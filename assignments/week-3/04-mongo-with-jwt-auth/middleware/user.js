const JWT_Secret = "bakka";
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, JWT_Secret);
  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else {
    res.json({
      message: "Invalid token",
    });
  }
}

module.exports = userMiddleware;
