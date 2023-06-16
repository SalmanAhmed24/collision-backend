const unitJobModel = require("../models/unitJobModel");
const addunitJob = async (req, res, next) => {
  const { name } = req.body;
  const createunitJobel = new unitJobModel({
    name,
  });
  try {
    await createunitJobel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getunitJob = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitJobModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitJob: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editunitJob = async (req, res, next) => {
  const { name } = req.body;
  const { unitJobId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitJobModel.findById(unitJobId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  unitToBeEdited.name = name;
  try {
    await unitToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit unit make", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deleteunitJob = async (req, res, next) => {
  const { unitJobId } = req.params;
  try {
    await unitJobModel.findByIdAndRemove(unitJobId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addunitJob = addunitJob;
exports.getunitJob = getunitJob;
exports.editunitJob = editunitJob;
exports.deleteunitJob = deleteunitJob;
