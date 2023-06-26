const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const unitsSchema = new mongoose.Schema({
  branch: { type: String },
  unitLocation: { type: String },
  unitType: { type: String },
  unitNumber: { type: String },
  unitClient: { type: String },
  unitYear: { type: String },
  unitMake: { type: String },
  unitModel: { type: String },
  unitJobUrgency: { type: String },
  notes: [
    {
      note: { type: String },
      date: { type: String },
    },
  ],
  tasks: [{ type: Object }],
  additionalInformation: [{ type: Object }],
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("units", unitsSchema);
