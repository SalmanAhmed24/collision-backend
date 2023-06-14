const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitLocCon = require("../controllers/unitLoc");
router.get("/", unitLocCon.getunitLoc);
router.post("/addunitLoc", unitLocCon.addunitLoc);
router.patch("/:unitLocId", unitLocCon.editunitLoc);
router.delete("/:unitLocId", unitLocCon.deleteunitLoc);
module.exports = router;
