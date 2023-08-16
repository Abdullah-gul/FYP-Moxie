const client = require('../models/Client')

  class GetSingleClientControler{
  
  static async Execute(req, res) {
    const {client1} = req.body;
  
    if(client1 === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const data = await client.find({_id:client1});
    res.status(200).json(data);
        }
    }
}

module.exports = GetSingleClientControler;