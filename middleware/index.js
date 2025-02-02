const express = require("express");

const app = express();

function usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "atul" || password != "pass") {
    res.status(400).json({ msg: "Invalid username or password" });
    return;
  }
  next();
}

function kidneymiddleware(req, res, next) {
  const kidneyid = req.query.kidneyid;

  if (kidneyid != 1 && kidneyid != 2) {
    res.status(400).json({ msg: "Invalid kidney id" });
    return;
  }
  next();
}

app.get("/health-checkup", usermiddleware, kidneymiddleware, (req, res) => {
  res.json({ msg: "You Kidney are healthy" });
});

app.listen(3000);
