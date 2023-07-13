const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  fullname: { type: String, required: true },
  mainEmail: { type: String, required: true, unique: true },
  phone: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pinCode: { type: String },
  hireDate: { type: String },
  nextReviewDate: { type: String },
});
userSchema.plugin(validator);
module.exports = mongoose.model("users", userSchema);
