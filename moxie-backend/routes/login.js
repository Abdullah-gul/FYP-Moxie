const loginRouter =require("express").Router();
const LoginController = require("../controller/LoginController");
const { body, validationResult } = require("express-validator");

loginRouter.post("/login", 
body("email").isEmail(),
(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  } else {
     console.log("loooooooggggg")
    LoginController.Execute(req, res);
  }
});

module.exports = loginRouter;
