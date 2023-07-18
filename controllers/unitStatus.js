const unitStatusModel = require("../models/unitStatus");
const addunitStatus = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const createUnitModel = new unitStatusModel({
    name,
    shortCode,
  });
  try {
    await createUnitModel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getunitStatus = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitStatusModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitStatus: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editunitStatus = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const { unitStatusId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitStatusModel.findById(unitStatusId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  unitToBeEdited.name = name;
  unitToBeEdited.shortCode = shortCode;
  try {
    await unitToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit unit make", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deleteunitStatus = async (req, res, next) => {
  const { unitStatusId } = req.params;
  try {
    await unitStatusModel.findByIdAndRemove(unitStatusId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addunitStatus = addunitStatus;
exports.getunitStatus = getunitStatus;
exports.editunitStatus = editunitStatus;
exports.deleteunitStatus = deleteunitStatus;
