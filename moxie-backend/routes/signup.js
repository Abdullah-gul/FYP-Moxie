const signupRouter = require("express").Router();
const SignUpController = require("../controller/SignUpController");
const { body, validationResult } = require("express-validator");

signupRouter.post("/signup", 
(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    SignUpController.Execute(req, res);
  }
});

module.exports = signupRouter;
