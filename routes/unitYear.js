const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitYearCon = require("../controllers/unitYear");
router.get("/", unitYearCon.getunitYear);
router.post("/addunitYear", unitYearCon.addunitYear);
router.patch("/:unitYearId", unitYearCon.editunitYear);
router.delete("/:unitYearId", unitYearCon.deleteunitYear);
module.exports = router;
