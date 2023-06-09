const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitsCon = require("../controllers/units");
router.get("/", unitsCon.getUnits);
router.post("/addUnits", unitsCon.addUnits);
router.patch("/:unitId", unitsCon.editUnit);
router.delete("/:unitId", unitsCon.deleteUnit);
module.exports = router;
