const Service = require("../models/ServiceProvider");

class PostServiceProvider {
  static async Execute(req, res) {
    const {companyName,service,user,details,co_ordinates_provider,nation} = req.body;
  
  
    if(companyName === undefined || service === undefined || user === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const serviceprovider = await Service({
            companyName:companyName,
            service:service,
            user:user,
            details:details,
            co_ordinates_provider:co_ordinates_provider,
            nation:nation
        });
   
    await serviceprovider.save((err) => {
        if (err) {
            return res.status(400).send(err);
        }
        else {
            return res.status(200).json({
                message: `user added successfully`
            });
        }
    })
        }
  }
}

module.exports = PostServiceProvider;
