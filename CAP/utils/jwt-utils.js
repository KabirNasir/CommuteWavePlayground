const jwt = require("jsonwebtoken");

const secretKey = "your-very-secret-key"; // Replace with a secure key

const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
};

module.exports = { generateToken, verifyToken };
