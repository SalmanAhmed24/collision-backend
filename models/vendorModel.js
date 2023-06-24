const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  mainContact: { type: String, required: true },
  phoneWork: { type: Number },
  phoneMobile: { type: Number, required: true },
  fax: { type: String },
  mainEmail: { type: String, required: true, unique: true },
  vendorType: { type: String },
  website: { type: String },
  addressMain: { type: String },
  addressSec: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
});
vendorSchema.plugin(validator);
module.exports = mongoose.model("vendors", vendorSchema);
