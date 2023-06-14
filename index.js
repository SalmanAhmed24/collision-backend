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
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
