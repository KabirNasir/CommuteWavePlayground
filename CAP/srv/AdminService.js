const { generateToken } = require("../utils/jwt-utils");
const bcrypt = require("bcrypt");
const cds = require("@sap/cds");
class AdminService extends cds.ApplicationService {
  #logger = cds.log("Admin-service");
  async init() {
    this.#logger.info("AdminService Initialized");
    const { Users, Booking, Shuttles, BusDetails } = this.entities;

    this.on("POST", Users, async (req, next) => {
      const { Password } = req.data;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(Password, saltRounds);

      req.data.Password = hashedPassword;
      req.data.roles_code = "USER";

      return next();
    });
    this.on("userAuthentication", async (req) => {
      const { Email, Password } = req.data;
      const user = await SELECT.one.from(Users).where({ Email });
      if (!user) {
        return req.reject(401, "Invalid email or password");
      }
      const passwordMatch = await bcrypt.compare(Password, user.Password);
      if (!passwordMatch) {
        return req.reject(401, "Invalid email or password");
      }
      const token = generateToken({
        userId: user.ID,
        roles: [user.roles_code],
      });
      return { token };
    });
    this.on("assignPOC", async (req) => {
      const { ID } = req.data;
      await UPDATE(Users).set({ roles_code: "POINTOFCONTACT" }).where({ ID });
      return { success: true };
    });
    this.on("assignADMIN", async (req) => {
      const { ID } = req.data;
      await UPDATE(Users).set({ roles_code: "POINTOFCONTACT" }).where({ ID });
      return { success: true };
    });

    this.on("CREATE", Shuttles, async (req) => {
      const bus = await SELECT.one
        .from(BusDetails)
        .where({ ID: req.data.busID_ID });
      req.data.remainingSeats = bus.seatCapacity;

      return next();
    });

    this.on("cancelBooking", async (req) => {
      const { bookingID, employeeID } = req.data;
      const booking = await SELECT.one.from(Booking).where({ ID: bookingID });
      if (booking.employeeID_ID !== employeeID) {
        return req.error(400, "You are not authorized to cancel this booking");
      }
      const shuttle = await SELECT.one
        .from(Shuttles)
        .where({ ID: booking.shuttle_ID });
      await UPDATE(Booking)
        .set({ status_code: "CANCELLED" })
        .where({ ID: bookingID });
      await UPDATE(Shuttles)
        .set({ remainingSeats: shuttle.remainingSeats + 1 })
        .where({ ID: booking.shuttle_ID });
      return { success: true };
    });

    this.on("CREATE", Booking, async (req) => {
      const { shuttle_ID } = req.data;
      const shuttle = await SELECT.one.from(Shuttles).where({ ID: shuttle_ID });
      if (shuttle.remainingSeats === 0) {
        shuttle.isBusFull = true;
        return req.error(400, "No seats available!");
      }
      req.data.status = "BOOKED";
      await UPDATE(Shuttles)
        .set({ remainingSeats: shuttle.remainingSeats - 1 })
        .where({ ID: shuttle_ID });
      return req.data;
    });
    return super.init();
  }
}
module.exports = { AdminService };
