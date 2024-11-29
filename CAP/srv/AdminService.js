const { generateToken, verifyToken } = require("../utils/jwt-utils");

const cds = require("@sap/cds");
class AdminService extends cds.ApplicationService {
  #logger = cds.log("Admin-service");
  async init() {
    this.#logger.info("ConsultationService Initialized");
    const { Users } = this.entities;
    this.on("POST", Users, async (req, next) => {
      const token = generateToken({ userId: "testUser", roles: ["admin"] });
      console.log("Generated JWT:", token);
      return { token };
    });
    return super.init();
  }
}
module.exports = { AdminService };
