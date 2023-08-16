const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  s_paid:{
    type: [String],
    require:true
  },
    // ---------------------------------------------------------------
    userProfile:{
      type:Buffer,
      default:""
    },
    companyProfile:{
      type:Buffer,
      default:""
    },
  address:{
    type:String,
    default:""
  },
  companyPhone:{
    type:String,
    default:""
  },
  about:{
    type:String,
    default:""
  },
  link:{
    type:String,
    default:""
  },
  years:{
    type:String,
    default:""
  },
            //  --------------------------------------------
   service:{
     type: String,
   },
  companyName: {
    type: String,
  },
  details: {
    type: String,
  },
  
  // leads: {
  //   type: Number,
  // },
  co_ordinates_provider: {
    //for maps
    type: String,
  }, 
  nation: {
    //for maps
    type: String,
  }, 
  // read_leads: {
  //   type: Number,
  // },
  // unread_leads: {
  //   type: Number,
  // },
  // ratting: {
  //   type: Number,
  // },
},{ timestamps: true });

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema);
