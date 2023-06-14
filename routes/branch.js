const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const branchCon = require("../controllers/branch");
router.get("/", branchCon.getBranch);
router.post("/addBranch", branchCon.addBranch);
router.patch("/:branchId", branchCon.editBranch);
router.delete("/:branchId", branchCon.deleteBranch);
module.exports = router;
