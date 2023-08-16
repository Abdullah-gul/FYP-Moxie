const Service = require("../models/ServiceProvider");

class ServiceProviderController {
  static async Execute(req, res) {
    const {user} = req.body;
  
  
    if(user === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const service = await Service.find({user: user});
    res.status(200).json(service);
        }
  }
}

module.exports = ServiceProviderController;
