const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const taskCatCon = require("../controllers/taskCat");
router.get("/", taskCatCon.gettaskCat);
router.post("/addtaskCat", taskCatCon.addtaskCat);
router.patch("/:taskCatId", taskCatCon.edittaskCat);
router.delete("/:taskCatId", taskCatCon.deletetaskCat);
module.exports = router;
