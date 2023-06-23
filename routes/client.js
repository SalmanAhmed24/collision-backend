const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
// user controllers
const clientCon = require("../controllers/client");
router.get("/", clientCon.getClient);
router.post("/addClient", clientCon.addClient);
router.patch("/:clientId", clientCon.editClient);
router.delete("/:clientId", clientCon.deleteClient);
module.exports = router;
