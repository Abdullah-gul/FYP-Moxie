const Service = require("../models/ServiceProvider");

class getClientController {
  static async Execute(req, res) {
  
   
    const service = await Service.find();
    res.status(200).json(service);
        
  }
}

module.exports = getClientController;
