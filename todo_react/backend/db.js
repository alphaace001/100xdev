const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "mongodb+srv://aplhaace:1234567890@cluster0.zpucp.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
