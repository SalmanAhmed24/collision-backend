const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const unitJobCon = require("../controllers/unitJob");
router.get("/", unitJobCon.getunitJob);
router.post("/addunitJob", unitJobCon.addunitJob);
router.patch("/:unitJobId", unitJobCon.editunitJob);
router.delete("/:unitJobId", unitJobCon.deleteunitJob);
module.exports = router;
