const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortCode: { type: String, required: true },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("branch", branchSchema);
