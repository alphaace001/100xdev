const express = require("express");

const app = express();
app.use(express.json());

var no_req = 0;
const err_count = 0;

function number_req(req, res, next) {
  no_req++;
  console.log("Number of requests: ", no_req);
  next();
}

let numberofrequest = {};
setInterval(() => {
  numberofrequest = {};
}, 1000);

function number_of_requests(req, res, next) {
  const userid = req.headers.userid;
  if (numberofrequest[userid]) {
    numberofrequest[userid] += 1;

    if (numberofrequest[userid] > 5) {
      res.status(404).send("You have exceeded the number of requests");
    } else {
      next();
    }
  } else {
    numberofrequest[userid] = 1;
    next();
  }
}

app.use(number_req, number_of_requests);

app.get("/users", (req, res) => {
  res.status(200).json({
    name: "John",
  });
});

app.post("users", (req, res) => {
  res.status(200).json({
    msg: "created dummy user",
  });
});

app.use((err, req, res, next) => {
  err_count++;
  res.status(404).send("Internal Server Error");
});

app.listen(3000);
