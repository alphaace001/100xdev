const express = require("express");

const app = express();

var users = [
  {
    fname: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnkidneys = users[0];
  var nokidneys = users[0].kidneys.length;
  let healthykidneys = 0;
  for (let i = 0; i < nokidneys; i++) {
    if (johnkidneys.kidneys[i].healthy) {
      healthykidneys++;
    }
  }

  console.log("number of kidneys are" + nokidneys);
  console.log("number of healthy kidneys are " + healthykidneys);
  const unhealthykidneys = nokidneys - healthykidneys;

  res.json({
    nokidneys,
    healthykidneys,
    unhealthykidneys,
  });
});

app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  const user = users[0].kidneys;
  for (let i = 0; i < user.length; i++) {
    user[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const healthykidney = [];
  const user = users[0];
  for (let i = 0; i < user.kidneys.length; i++) {
    if (user.kidneys[i].healthy) {
      healthykidney.push({
        healthy: true,
      });
    }
  }
  user.kidneys = healthykidney;
  res.json({
    msg: "Done",
  });
});

app.listen(3000);
