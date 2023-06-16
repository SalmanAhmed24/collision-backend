const unitModModel = require("../models/unitModModel");
const addUnitMod = async (req, res, next) => {
  const { name } = req.body;
  const createUnitModel = new unitModModel({
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
const getUnitMod = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitModModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    unitMod: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editUnitMod = async (req, res, next) => {
  const { name } = req.body;
  const { unitModId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitModModel.findById(unitModId);
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
const deleteUnitMod = async (req, res, next) => {
  const { unitModId } = req.params;
  try {
    await unitModModel.findByIdAndRemove(unitModId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addUnitMod = addUnitMod;
exports.getUnitMod = getUnitMod;
exports.editUnitMod = editUnitMod;
exports.deleteUnitMod = deleteUnitMod;
