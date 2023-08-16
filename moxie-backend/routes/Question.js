const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const QuestionController = require("../controller/QuestionController");
const GetQuestionController = require("../controller/GetQuestionController");
const { route } = require("./signup");

router.post("/question", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    QuestionController.Execute(req, res);
  }
});
router.post("/getquestion", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty(req)) {
    return res.send(400).json({ errors: errors.arry() });
  } else {
    GetQuestionController.Execute(req, res);
  }
});

module.exports = router;
