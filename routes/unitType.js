const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitTypeCon = require("../controllers/unitType");
router.get("/", unitTypeCon.getunitType);
router.post("/addunitType", unitTypeCon.addunitType);
router.patch("/:unitTypeId", unitTypeCon.editunitType);
router.delete("/:unitTypeId", unitTypeCon.deleteunitType);
module.exports = router;
