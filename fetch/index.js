const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
app.use(express.json());

const users = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya Kumari",
  },
];

function userexist(username, password) {
  for (const user of users) {
    if (user.username == username && user.password == password) {
      return true;
    }
  }
  return false;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userexist(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtpassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtpassword);
    const username = decoded.username;
    res.json({
      users: users.filter((user) => user.username != username),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.listen(3000);
