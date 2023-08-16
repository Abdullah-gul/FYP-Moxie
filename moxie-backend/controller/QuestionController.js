const Question = require("../models/Questions ");

class QuestionController {
    static async Execute(req,res){
     const {que,ans,weight,service} = req.body;
        
        if(que == undefined || que.length == 0 || ans.length == 0){
            res.status(400).json({
                message: `Invalid Request`,
            });
        }else{
            const question = new Question({
                service:service,
                question: que,
                answer : ans,
                weight:weight,
               
            })

             
            await question.save((err) => {
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    return res.status(200).json({
                        message: `question added successfully`
                    });
                }
            })
        }

    }
 
 }

 module.exports = QuestionController;