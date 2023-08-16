const User = require("../models/User");
const Credentials = require("../models/Credentials");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class SignUpController {
  static async Execute(req, res) {
    const { firstName, lastName, email,phone } = req.body;
    
  

    const user = new User({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      mobile:phone
    });

    const existingUser = await User.find({
      email: email,
    });
    const existUser = await User.find({
      mobile:phone,
    });

    if (existingUser.length > 0 || existUser.length > 0  ) {
      res.status(200).json({
        message: `Email Address is already registered`,
      });
    } else {
      console.log(req.body);
      user.save(
        async(err, responce)=>{
          if (err) {
            return res.status(400).send(err, responce);
          } else {
           const {password}= req.body
              console.log("im here")
            bcrypt.hash(password, saltRounds).then(async function (hash) {
              // Store hash in your password DB.
              
              const credential = new Credentials({
                user: responce._id,
                email: responce.email.trim(),
                user_password: hash,
                role: "client",
              });
                  
              credential.save((err) => {
                if (err) {
                  console.log("errr here soory")
                  return res.status(400).send(err);
                } else {
                  res.status(200).json({
                    message: `user added sucessfully`,
                  });
                }
              });
            });
          }
        },
      );
     
      
    }
  }
}


module.exports = SignUpController