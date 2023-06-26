const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// route imports
const unitMakeRoutes = require("./routes/unitMake");
const branchRoutes = require("./routes/branch");
const unitLocRoutes = require("./routes/unitLoc");
const unitModRoutes = require("./routes/unitMod");
const unitJobRoutes = require("./routes/unitJob");
const unitYearRoutes = require("./routes/unitYear");
const unitTypeRoutes = require("./routes/unitType");
const clientTypeRoutes = require("./routes/clientType");
const vendorTypeRoutes = require("./routes/vendorType");
const clientRoutes = require("./routes/client");
const vendorRoutes = require("./routes/vendor");
const unitsRoutes = require("./routes/units");
const url =
  "mongodb+srv://book-a-tutorDB:reactive_007@cluster0.2art5.mongodb.net/western-collision";
mongoose
  .connect(url)
  .then(() => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log("error occured while connecting to database", err);
  });
app.use("/api/unitMake", unitMakeRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/unitLoc", unitLocRoutes);
app.use("/api/unitMod", unitModRoutes);
app.use("/api/unitJob", unitJobRoutes);
app.use("/api/unitYear", unitYearRoutes);
app.use("/api/unitType", unitTypeRoutes);
app.use("/api/clientType", clientTypeRoutes);
app.use("/api/vendorType", vendorTypeRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/units", unitsRoutes);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
