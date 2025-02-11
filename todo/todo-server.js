const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/todo", (req, res) => {
  const randomnumber = Math.floor(Math.random() * 10) + 1; // Added parentheses after Math.random
  var todos = [];
  for (let i = 0; i < randomnumber; i++) {
    var temp = {};
    temp.title = "Todo " + (i + 1); // Added parentheses for proper concatenation
    temp.description = "description of the todo " + (i + 1);
    temp.id = i + 1;
    todos.push(temp);
  }
  res.json(todos);
});

app.listen(3000);
