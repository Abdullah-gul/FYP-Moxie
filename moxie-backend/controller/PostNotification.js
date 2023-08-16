// const Notification = require("../models/notification");
const mailer = require("../components/mailer");

class PostNotificationController {
  static async Execute(req, res) {
    const {  message, email } = req.body;
    console.log(req.body);
    if ( email != undefined && message !== undefined) {

      
          const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: "MOXIE Notification Email",
            html: `<h2>YOUR CODE IS ${ message}</h2>`,
          };

          await mailer.sendMail(mailOptions);

          return res.status(200).json({
            message: `notification added successfully`,
          });
        
      
    } else {
      res.status(400).json({
        message: `Invalid Request`,
      });
    }
  }
}

module.exports = PostNotificationController;
