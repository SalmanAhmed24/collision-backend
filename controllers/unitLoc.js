const unitLocModel = require("../models/unitLocModel");
const addunitLoc = async (req, res, next) => {
  const { name } = req.body;
  const createUnitModel = new unitLocModel({
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
const getunitLoc = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitLocModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitLoc: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editunitLoc = async (req, res, next) => {
  const { name } = req.body;
  const { unitLocId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitLocModel.findById(unitLocId);
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
const deleteunitLoc = async (req, res, next) => {
  const { unitLocId } = req.params;
  try {
    await unitLocModel.findByIdAndRemove(unitLocId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addunitLoc = addunitLoc;
exports.getunitLoc = getunitLoc;
exports.editunitLoc = editunitLoc;
exports.deleteunitLoc = deleteunitLoc;
