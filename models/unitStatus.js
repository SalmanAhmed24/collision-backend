const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const unitStatusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortCode: { type: String, required: true },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("unitStatus", unitStatusSchema);
