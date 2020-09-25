var express = require("express");
var router = express.Router();
var TaskController = require("../controllers/TaskController");
/* GET home page. */
router.get("/tasks", function (req, res, next) {
  TaskController.getTasks(req, res, next);
});

module.exports = router;
