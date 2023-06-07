const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitMakeCon = require("../controllers/unitMake");
router.get("/", unitMakeCon.getUnitMake);
router.post("/addUnitMake", unitMakeCon.addUnitMake);
module.exports = router;
