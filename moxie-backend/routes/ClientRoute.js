const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const getClientController = require("../controller/getClientController");
const PostClientAnswerController =require("../controller/PostClientAnswerController");
const GetSingleClientControler =require('../controller/GetSingleClientController')
const  PostProfessionalResponded = require('../controller/PostProfessionalResponded')


router.post("/clientdata", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    PostClientAnswerController.Execute(req, res);
  }
});

router.post("/getclientdata", (req, res) => {
  
 
    getClientController.Execute(req, res);
    
  
})
router.post("/getsingleclient", (req, res) => {
  
  GetSingleClientControler.Execute(req, res);
  

});

router.post("/responded", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    PostProfessionalResponded.Execute(req, res);
  }
});


module.exports = router;
