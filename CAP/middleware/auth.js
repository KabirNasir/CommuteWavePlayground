// middleware/auth.js
const { verifyToken } = require("../utils/jwt-utils");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const path = req.path;
  if (path.includes("Users") || path.includes("userAuthentication")) {
    return next();
  }
  if (!authHeader) {
    return res.status(401).send("Authorization header is missing.");
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(403).send("Invalid or expired token.");
  }

  req.user = decoded; // Attach user details to the request
  next();
};

module.exports = authenticateJWT;
