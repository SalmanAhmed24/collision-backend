const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitStatusCon = require("../controllers/unitStatus");
router.get("/", unitStatusCon.getunitStatus);
router.post("/addunitStatus", unitStatusCon.addunitStatus);
router.patch("/:unitStatusId", unitStatusCon.editunitStatus);
router.delete("/:unitStatusId", unitStatusCon.deleteunitStatus);
module.exports = router;
