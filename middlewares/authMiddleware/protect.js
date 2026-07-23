const jwt = require("jsonwebtoken");
const userSchema = require("../../models/userSchema");

const protect = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json({
        message: "Unauthorized request",
        error: { name: "JsonWebTokenError", message: "jwt must be provided" }
      });
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    const user = await userSchema.findById(decoded.id);

    if (!user || !user.isvalidEmail) {
      return res.status(401).json({
        message: "Unauthorized request"
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized request",
      error
    });
  }
};

module.exports = protect;