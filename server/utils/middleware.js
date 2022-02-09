const cache = require("../config/cache");
const jwt = require("jsonwebtoken");

module.exports.authenticateUser = async (req, res, next) => {
  const rawToken = req.headers[process.env.JWT_HEADER_NAME];

  if (!rawToken)
    return res.status(401).json({
      message: "Authorization token not present in headers",
    });

  try {
    const blacklistedToken = await cache.get(`jwtoken-${rawToken}`);
    if (blacklistedToken)
      return res.status(401).json({
        message: "Invalid authorization token",
      });
  } catch (e) {
    return res.status(500).json(e);
  }

  try {
    const verifiedToken = await jwt.verify(
      rawToken,
      process.env.JWT_SECRET_KEY
    );
    req.jti = verifiedToken.jti;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid authorization token" });
  }
};
