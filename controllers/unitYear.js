const unitYearModel = require("../models/unitYearModel");
const addunitYear = async (req, res, next) => {
  const { name } = req.body;
  const createUnitModel = new unitYearModel({
    name,
  });
  try {
    await createUnitModel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getunitYear = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitYearModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitYear: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editunitYear = async (req, res, next) => {
  const { name } = req.body;
  const { unitYearId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitYearModel.findById(unitYearId);
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
const deleteunitYear = async (req, res, next) => {
  const { unitYearId } = req.params;
  try {
    await unitYearModel.findByIdAndRemove(unitYearId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addunitYear = addunitYear;
exports.getunitYear = getunitYear;
exports.editunitYear = editunitYear;
exports.deleteunitYear = deleteunitYear;
