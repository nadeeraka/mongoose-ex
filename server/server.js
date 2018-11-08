const express = require('express');
const bodyParser =require('body-parser');


const {mongoose} = require("../db/db");
const {Todo}  = require('../modal/todos');
const {User}  = require('../modal/users');

const app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>
{
 let newTodo = new Todo({
     text:req.body.text
 });
  newTodo.save().then((doc)=>{
      res.send(doc);
  },(e)=>{
      res.status(400).send(e);
  });

})

app.get('/todos',(req,res)=>
{
    Todo.find().then((todos)=>
    {
        res.send({todos});
// create a object becuase it is flexibale than create a array and use es 6 todos:todos

    }, (e)=>{
        res.stutas(400).send(e)
    })
})

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000!');
});