const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const taskTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortCode: { type: String, required: true },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("taskType", taskTypeSchema);
