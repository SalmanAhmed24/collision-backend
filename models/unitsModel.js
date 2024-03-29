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
  unitStatus: [{ type: String }],
  notes: {
    note: { type: String },
    date: { type: String },
    time: { type: String },
    user: { type: String },
  },
  individualNotes: [
    {
      note: { type: String },
      date: { type: String },
      time: { type: String },
      user: { type: String },
    },
  ],
  tasks: [
    {
      date: { type: String },
      time: { type: Object },
      taskCategory: { type: String },
      dueDate: { type: String },
      assignedTo: { type: String },
      title: { type: String },
      taskDescription: { type: String },
    },
  ],
  work: { type: Object },
  parts: { type: Object },
  $: { type: Object },
  info: {
    estimateDone: { type: String },
    partsOrdered: { type: String },
    onPremise: { type: String },
    premiseDate: { type: String },
    approvedDate: { type: String },
    startDate: { type: String },
    ecd: { type: String },
    tearDownAssignTo: { type: String },
    tearDownCompleteDate: { type: String },
    bodyAssignedTo: { type: String },
    bodyCompletedDate: { type: String },
    paintPrepAssignTo: { type: String },
    paintPrepCompleteDate: { type: String },
    paintAssignTo: { type: String },
    paintCompleteDate: { type: String },
    inspectionAssignTo: { type: String },
    inspectionCompleteDate: { type: String },
    invoiceDate: { type: String },
    deliverDate: { type: String },
  },
});
// UserSchema.plugin(validator);
module.exports = mongoose.model("units", unitsSchema);
