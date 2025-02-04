const express = require("express");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtpassword = "123456";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aplhaace:1234567890@cluster0.zpucp.mongodb.net/user_app"
);

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existinguser = await User.findOne({ email: email });

  if (existinguser) {
    return res.status(403).json({
      msg: "User already exists",
    });
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  user.save().then(() => console.log("meow"));
  res.json({
    msg: "User created",
  });
});

app.listen(3000);
