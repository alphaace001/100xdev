const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/conversation", (req, res) => {
  console.log(req.body);
  // console.log(req.headers);
  res.send({
    msg: "2+2=4",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
