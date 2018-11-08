const {mongoose} = require('../db/db');
const {Todo} = require('../modal/todos');
const {User} = require('../modal/users');

//const id = "5be40d6a82a766e42e6b9d28";
//const id = "5be40d6a82a766e42e6b9d28";

// Todo.find({
//     _id:id
// }).then((todos)=>console.log(`todos : ${todos}`),
// (e)=>console.log(`errors : ${e}`)
// )

// Todo.findOne({
//     _id: id
// }).then((todo) => console.log(`todo : ${todo}`),
//     (e) => console.log(`errors : ${e}`)
// )

// Todo.findById().then(
//     (todo) => {
//         if (!todo) {
//             return console.log('Not found!');
//         }

//         console.log(`todo BY Id : ${todo}`)},
//     (e) => console.log(`errors : ${e}`)
// ).catch((e)=>console.log(e))

User.find().then(
    (res)=>{
         console.log(`user BY Id : ${res}`)
    }, (e) => console.log(`user BY Id : ${res}`)
).catch((e)=>console.log(e));