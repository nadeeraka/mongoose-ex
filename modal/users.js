
const mongoose = require("mongoose");
const validator = require("validator");

let User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlenght:1,
    unique:true,
    validate: validator.isEmail,
    value:'{VALUE} is not a email'
  },
  password:{
    type:String,
    minlenght:6,
    required:true
  },
  tokens:[
    {
      access:{
        type:String,
        required:true
      },
      token:{
        type:String,
        required:true
      }
    }
  ]
})

module.exports = {User}