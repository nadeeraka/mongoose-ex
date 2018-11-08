const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp')
    .then(() => console.log('connected'),
    (e)=>console.log('unable to connect',e)
    );
    module.exports ={mongoose};