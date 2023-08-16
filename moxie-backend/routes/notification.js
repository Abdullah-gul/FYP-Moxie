const PostNotification = require("../controller/PostNotification");
// const GetNotification = require("../controllers/GetNotification");
// const updateSeen = require("../controllers/UpdateSeen");
// const DeleteNotification = require("../controllers/DeleteNotification");
const notificationRouter = require("express").Router();
// const auth = require("../middleware/adminAuth");
// const commonauth = require("../middleware/commonauth");

notificationRouter.post("/notification", async (req, res) => {
  PostNotification.Execute(req, res);
});

// notificationRouter.put("/updateSeen", async (req, res) => {
//   updateSeen.Execute(req, res);
// });

// notificationRouter.get("/notification", async (req, res) => {
//   GetNotification.Execute(req, res);
// });

// notificationRouter.delete("/notification", async (req, res) => {
//   DeleteNotification.Execute(req, res);
// });

module.exports = notificationRouter;
