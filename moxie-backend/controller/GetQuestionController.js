const Question = require("../models/Questions ");

class GetQuestionController {
  static async Execute(req, res) {
    const {service} = req.body;
  
   console.log( `heey ${service}`)
    if(service === undefined){
        res.status(400).json({
            message: `Invalid Request`,
        });
    }else{
        const que = await Question.find({service:service});
    res.status(200).json(que);
        }
  }
}

module.exports = GetQuestionController;
