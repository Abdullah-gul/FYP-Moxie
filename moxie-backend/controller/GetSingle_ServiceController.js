const servicePro = require('../models/ServiceProvider')

  class GetSingleClientControler{
  
  static async Execute(req, res) {
    const {userId} = req.body;
  
    if(userId === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const data = await servicePro.find({user:userId});
    res.status(200).json(data);
        }
    }
}

module.exports = GetSingleClientControler;