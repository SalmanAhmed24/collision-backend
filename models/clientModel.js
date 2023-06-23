const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const clientSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  mainContact: { type: String, required: true },
  phoneWork: { type: Number },
  phoneMobile: { type: Number, required: true },
  fax: { type: String },
  mainEmail: { type: String, required: true, unique: true },
  clientType: { type: String },
  website: { type: String },
  addressMain: { type: String },
  addressSec: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
});
clientSchema.plugin(validator);
module.exports = mongoose.model("clients", clientSchema);
