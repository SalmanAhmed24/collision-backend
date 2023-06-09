const unitMakeModel = require("../models/uniteMakeModel");
const addUnitMake = async (req, res, next) => {
  const { name } = req.body;
  const createUnitModel = new unitMakeModel({
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
const getUnitMake = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitMakeModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitMake: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editUnitMake = async (req, res, next) => {
  const { name } = req.body;
  const { unitMakeId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitMakeModel.findById(unitMakeId);
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
const deleteUnitMake = async (req, res, next) => {
  const { unitMakeId } = req.params;
  try {
    await unitMakeModel.findByIdAndRemove(unitMakeId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addUnitMake = addUnitMake;
exports.getUnitMake = getUnitMake;
exports.editUnitMake = editUnitMake;
exports.deleteUnitMake = deleteUnitMake;
