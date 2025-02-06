const express = require("express");

const app = express();
app.use(express.json());

function iseligible(req, res, next) {
  const age = req.query.age;
  if (age < 14) {
    res.json({
      msg: "You are not eligible to ride",
    });
  } else {
    next();
  }
}

app.get("/", iseligible, (req, res) => {
  res.json({
    msg: "You have successfully reached the ride endpoint",
  });
});

app.listen(3000);
