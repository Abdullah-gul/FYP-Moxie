  const user = require('../models/User') 

  class GetSingleUserControler{
  
  static async Execute(req, res) {
    const {user1} = req.body;
  
    if(user1 === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const data = await user.find({_id:user1});
    res.status(200).json(data);
        }
    }
}

module.exports = GetSingleUserControler;