// const Answer = require("../models/Answer");

// class AnswerController {
//     static async Execute(req,res){
//      const {queID} = req.body;
        
//         if(queID == undefined){
//             res.status(400).json({
//                 message: `Invalid Request`,
//             });
//         }else{
//             var answer = await Answer.find({
//                 question: queID
//             }).populate({
//                 path: "question",
//                 select: "question",
//             });

             
//             if (answer && answer.length > 0) {

//                 res.status(200).json({
//                     message: "Sucess",
//                     answer: answer
//                 });

//             } else {
//                 res.status(200).json({
//                     message: "No Record found",
//                 });
//             }


//         }

//     }
 
//  }

//  module.exports = AnswerController;