const express = require("express");
const cors = require("cors");
const { createTodo, updatetodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());
// body{
// title:String,
// description:String
// }
app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsedpayload = createTodo.safeParse(createpayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

app.get("/todo", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatepayload = req.body;
  const parsedpayload = updatetodo.safeParse(updatepayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you have sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo is marked as completed",
  });
});

app.listen(3000);
