const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const vendorTypeCon = require("../controllers/vendorType");
router.get("/", vendorTypeCon.getvendorType);
router.post("/addvendorType", vendorTypeCon.addvendorType);
router.patch("/:vendorTypeId", vendorTypeCon.editvendorType);
router.delete("/:vendorTypeId", vendorTypeCon.deletevendorType);
module.exports = router;
