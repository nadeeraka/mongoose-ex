const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp')
.then(()=>console.log('connected'),
(e)=>console.log('unable to connect'))

let User = mongoose.model('User',{
    text:{
        type:String,
        required:true,
        minlenght:1,
        trim:true
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
})

let data = new User({
    text:'youtubing',
    completed:false,
    completedAt:7
})

data.save()
.then((res)=>console.log(`result : ${res}`),
(e)=>console.log('error'));
