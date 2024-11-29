const { generateToken } = require("../utils/jwt-utils");
const bcrypt = require("bcrypt");
const cds = require("@sap/cds");
class AdminService extends cds.ApplicationService {
  #logger = cds.log("Admin-service");
  async init() {
    this.#logger.info("AdminService Initialized");
    const { Users } = this.entities;

    this.on("POST", Users, async (req, next) => {
      const { Password } = req.data;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(Password, saltRounds);

      req.data.Password = hashedPassword;

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
      const token = generateToken({ userId: user.ID, roles: user.roles });
      return { token };
    });
    this.on("assignPOC", async (req) => {
      const { ID } = req.data;
      await UPDATE(Users).set({ roles: "POINTOFCONTACT" }).where({ ID });
      return { success: true };
    });
    return super.init();
  }
}
module.exports = { AdminService };
