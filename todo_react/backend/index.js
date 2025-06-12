const express = require("express");
const { createTodo, updatetodo } = require("./types");
const app = express();

app.use(express.json());

// body{
// title:String,
// description:String
// }
app.post("/todo", function (req, res) {
  const createpayload = req.body;
  const parsedpayload = createTodo.safeParse(createpayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
});

app.get("/todo", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatepayload = req.body;
  const parsedpayload = updatetodo.safeParse(updatepayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you have sent the wrong inputs",
    });
    return;
  }
});
