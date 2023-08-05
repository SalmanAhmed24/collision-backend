const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const taskModelSchema = new mongoose.Schema({
  date: { type: String },
  time: { type: String },
  taskCategory: { type: String },
  dueDate: { type: String },
  assignedTo: { type: String },
  title: { type: String },
  taskDescription: { type: String },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("tasks", taskModelSchema);
