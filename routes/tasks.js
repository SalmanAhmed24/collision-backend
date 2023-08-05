const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const tasksCon = require("../controllers/tasks");
router.get("/", tasksCon.gettask);
router.post("/addtask", tasksCon.addtask);
router.patch("/:taskId", tasksCon.edittask);
router.delete("/:taskId", tasksCon.deletetask);
module.exports = router;
