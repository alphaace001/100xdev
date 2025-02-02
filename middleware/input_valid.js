const express = require("express");

const app = express();
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;
  const kidneylength = kidney.length;

  res.send("you have" + kidneylength + "kidneys");
});

// global catch
app.use((err, req, res, next) => {
  res.json({
    msg: "Something is wrong with server",
  });
});

app.listen(3000);
