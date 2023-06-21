const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const clientTypeCon = require("../controllers/clientType");
router.get("/", clientTypeCon.getclientType);
router.post("/addclientType", clientTypeCon.addclientType);
router.patch("/:clientTypeId", clientTypeCon.editclientType);
router.delete("/:clientTypeId", clientTypeCon.deleteclientType);
module.exports = router;
