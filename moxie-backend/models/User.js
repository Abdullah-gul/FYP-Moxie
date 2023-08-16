const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
 
  role:{
    type:String
  },
  mobile:{
    type:String,
    unique:true,
    
  },
 
  co_ordinates_provider: {
    //for maps
    type: [String],
    
  },
  ratting: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
 
})

module.exports = mongoose.model('User', userSchema)
