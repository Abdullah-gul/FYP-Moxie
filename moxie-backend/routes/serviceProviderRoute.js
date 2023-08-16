const router = require("express").Router();
const { body, validationResult } = require("express-validator");

const ServiceProviderController  = require('../controller/ServiceProviderController')
const PostServiceProvider  =require('../controller/PostServiceProvider')
const  getServiceController =require("../controller/getServiceController")
const GetSingleServiceController=require('../controller/GetSingleServiceController')
const GetSingle_ServiceController =require('../controller/GetSingle_ServiceController')
router.post("/postservice", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    PostServiceProvider.Execute(req, res);
  }
});


router.post("/getservice", (req, res) => {
    //this route will check that service provider exist or not
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    ServiceProviderController.Execute(req, res);
  }
});
router.post("/getsingleservice", (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    GetSingleServiceController.Execute(req, res);
  }
});
router.post("/getsinglserviceid", (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    GetSingle_ServiceController.Execute(req, res);
  }
});
router.get("/getservices", (req, res) => {
 
 
  getServiceController.Execute(req, res);
  
});

module.exports = router;