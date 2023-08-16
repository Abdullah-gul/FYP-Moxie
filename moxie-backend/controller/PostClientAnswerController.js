const Client = require("../models/Client");
const axios =require('axios')

class PostClientAnswerController {
    static async Execute(req,res){
     const {mainclient,user,Service,pc} = req.body;
     const[postalcode ,country] = pc.split(",")
     var address;
      
     console.log(postalcode)
var data = Object.entries(mainclient).map(el => JSON.parse(el[1]))

        
   
      
        if(mainclient === undefined || mainclient.length === 0){
        
            res.status(400).json({
                message: `Invalid Request`,
            });
        }else{
            
          const resp = await axios({
                method: "post",
                url: `https://us1.locationiq.com/v1/search?key=pk.39b734717c4bba613b6415dffef806ea&format=json&postalcode=${postalcode}&country=${country}`,
                
              })
            address= resp.data
            
             
              let weight = data.map(el => parseInt(el.weight) )
              console.log(address.map(el => JSON.stringify(el)))
            const answers = new Client({
                user:user,
                Service:Service,
                question: data.map(el => el.que),
                answer : data.map(el => el.answer), 
                country:country,
                postalcode:postalcode,
                address: address.map(el => JSON.stringify(el)),
                qustion_weightage: data.map(el => el.weight),
                credits : weight.reduce((total,amount)=> total + amount)
            })
              console.log(answers)
               
            await answers.save(( err) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send(err);
                }
                else {
                    console.log('added')
                   
                    return res.status(200).json({
                        message: `question added successfully`
                    });
                }
            })
        }

    }
 
 }

 module.exports = PostClientAnswerController;