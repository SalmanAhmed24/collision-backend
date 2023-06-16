const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitModCon = require("../controllers/unitMod");
router.get("/", unitModCon.getUnitMod);
router.post("/addUnitMod", unitModCon.addUnitMod);
router.patch("/:unitModId", unitModCon.editUnitMod);
router.delete("/:unitModId", unitModCon.deleteUnitMod);
module.exports = router;
