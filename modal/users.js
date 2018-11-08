const mongoose = require("mongoose");

let newTodo = new Todo({
  text: "node",
  completed: true,
  completedAt: 8.0
});

newTodo
  .save()
  .then(
    res => console.log(`result : ${res}`),
    e => console.log(`error occard : ${e}`)
  );
module.exports = {Users}