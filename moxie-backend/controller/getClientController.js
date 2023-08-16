const Client = require("../models/Client");

class getClientController {
  static async Execute(req, res) {
  
   const {service}=req.body
  
 const s =  (service.pop())
 console.log(s.toString())
 
   if(s === undefined){
return  res.status(400).json("sorryyyyy");
   }else{

    // problem  -----------------------------------------
    const client = await Client.aggregate([{$match :{Service:s} }])
   
    console.log(client)
    res.status(200).json(client);

   }
            
  }
}

module.exports = getClientController;
