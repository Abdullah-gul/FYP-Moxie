const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  question:{
    type:[String],
    require:true,
  },
  answer:{
    type:[String],
      require:true,
  },
  Service: {
    type: String,
    required: true,
  },
  client_img_logo:
  {
      data: Buffer,
      contentType: String
  },
  paid:{
 type:Boolean,
 default:false
  },
  credits: {
    //it will be calculated through question
    type: Number,
  },

  postalcode: {
    //for maps
    type: String,
  },
  address: {
    //for maps
    required:true,
    type: [String],
  },
  country:{
    type:String
  },
  professionals_responded: {
    type: Number,
    default:0
  },      
 

  qustion_weightage: {
    type: [Number],
  },
  
},{ timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
