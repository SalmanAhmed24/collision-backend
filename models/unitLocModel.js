const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const unitLocSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("unitLoc", unitLocSchema);
