const unitTypeModel = require("../models/unitTypeModel");
const addunitType = async (req, res, next) => {
  const { name } = req.body;
  const createUnitModel = new unitTypeModel({
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
const getunitType = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitTypeModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitType: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editunitType = async (req, res, next) => {
  const { name } = req.body;
  const { unitTypeId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitTypeModel.findById(unitTypeId);
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
const deleteunitType = async (req, res, next) => {
  const { unitTypeId } = req.params;
  try {
    await unitTypeModel.findByIdAndRemove(unitTypeId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addunitType = addunitType;
exports.getunitType = getunitType;
exports.editunitType = editunitType;
exports.deleteunitType = deleteunitType;
