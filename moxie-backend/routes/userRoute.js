const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const getUserControler = require("../controller/getUserControler");
const GetSingleUserController = require('../controller/GetSingleUserController')


router.get("/getuser", (req, res) => {
   
     getUserControler.Execute(req, res);
});

router.post("/getsingleuser", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    GetSingleUserController.Execute(req, res);
  }   
 
});




module.exports = router;