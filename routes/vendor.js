const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const vendorCon = require("../controllers/vendor");
router.get("/", vendorCon.getvendor);
router.post("/addvendor", vendorCon.addvendor);
router.patch("/:vendorId", vendorCon.editvendor);
router.delete("/:vendorId", vendorCon.deletevendor);
module.exports = router;
