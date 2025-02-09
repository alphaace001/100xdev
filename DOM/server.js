const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const { principal, rate, time } = req.query;
  console.log(principal, rate, time);
  const interest =
    (parseInt(principal) * parseInt(rate) * parseInt(time)) / 100;
  console.log(interest);
  res.json({
    amount: parseFloat(interest) + parseFloat(principal),
    interest: interest,
  });
});

app.listen(3000);
