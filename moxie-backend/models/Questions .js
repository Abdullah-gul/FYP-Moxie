const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({

service:{
type:String
},
  
question:{
    type:String,
    require:true,
  },
answer:{
  type:[String],
    require:true,
},
weight:{
  type:[String],
    require:true,
}


})

module.exports = mongoose.model('Questions',questionSchema)