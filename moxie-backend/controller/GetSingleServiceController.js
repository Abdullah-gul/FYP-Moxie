const servicePro = require('../models/ServiceProvider')

  class GetSingleClientControler{
  
  static async Execute(req, res) {
    const {service} = req.body;
  
    if(service === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const data = await servicePro.find({_id:service});
    res.status(200).json(data);
        }
    }
}

module.exports = GetSingleClientControler;