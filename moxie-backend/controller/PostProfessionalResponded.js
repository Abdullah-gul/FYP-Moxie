const Client =require("../models/Client");
const Service = require("../models/ServiceProvider");


class PostProfessionalResponded{

    static async Execute(req,res){

        const {responded,userid,serviceid,  singleclient} = req.body;
    //    console.log(userid.client)
    //    var data = Object.entries(mainclient).map(el => JSON.parse(el[1]))
         
  
               console.log(userid)




        if(responded === undefined   ){
            res.status(400).json({
                message: `Invalid Request`,
            });
        }else{
            // const professional = await  
            Client.findOne({
                _id:  singleclient,
             },(err,user)=>{
                user.professionals_responded =user.professionals_responded +responded
              
                user.save(function (err) {
                    if(err) {
                        console.log(err)
                    }else{
                        return res.status(200).json({
                                        message: `respond added successfully`
                                     });
                    }
                });
             });
             
             Service.findOne({user:serviceid},(err,service)=>{
                if(err || userid === undefined){
                   console.log(err)
                }else{
     
                    if(userid === undefined){
            console.log("badddddd")
                    }else{
                        service.s_paid.push(userid)
                    }
                   
                

                   service.save(function (err){
                       if(err){
                           console.log(err)
                       }else{
                        console.log("good")
                       
                       }
                   })
                }
        })
       
        // await professional.save((err) => {
        //     if (err) {
        //         return res.status(400).send(err);
        //     }
        //     else {
        //         return res.status(200).json({
        //             message: `user added successfully`
        //         });
        //     }
        // })
        
            }

    }

}

module.exports = PostProfessionalResponded;