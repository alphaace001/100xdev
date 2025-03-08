const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const JWT_Secret = "bakka";

// User Routes
router.post("/signup", async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  if (await User.findOne({ username: username })) {
    return res.json({
      message: "User already exists",
    });
  }
  await User.create({
    username,
    password,
  });
  res.json({
    msg: "User created successfully",
  });
});

router.get("/signin", async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  if (
    await User.findOne({
      username: username,
      password: password,
    })
  ) {
    const jwt_token = jwt.sign({ username: username }, JWT_Secret);
    res.json({
      token: jwt_token,
    });
  }
  res.json({
    message: "Invalid credentials",
  });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;
  User.updateOne(
    {
      username: username,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  )
    .then(() => {
      res.json({
        message: "Course purchased successfully",
      });
    })
    .catch(function (err) {
      res.json({
        error: err.message,
      });
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.username;
  const user_data = await User.findOne({ username: username });
  const courses = await Course.find({
    _id: {
      $in: user_data.purchasedCourses,
    },
  });
  res.json({
    courses,
  });
});

module.exports = router;
