const unitsModel = require("../models/unitsModel");
const addUnits = async (req, res, next) => {
  const {
    branch,
    unitLocation,
    unitType,
    unitNumber,
    unitClient,
    unitYear,
    unitMake,
    unitModel,
    unitJobUrgency,
    notes,
  } = req.body;
  const createUnits = new unitsModel({
    branch,
    unitLocation,
    unitType,
    unitNumber,
    unitClient,
    unitYear,
    unitMake,
    unitModel,
    unitJobUrgency,
    notes,
  });
  try {
    await createUnits.save();
  } catch (error) {
    res.json({ message: "Error adding Units", error: true });

    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getUnits = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await unitsModel.find({});
  } catch (error) {
    res.json({ message: "cannot get the desired results", error: true });
    return next(error);
  }
  res.json({
    units: allUnits.map((i) => i.toObject({ getters: true })),
    error: false,
  });
};
const editUnit = async (req, res, next) => {
  const {
    branch,
    unitLocation,
    unitType,
    unitNumber,
    unitClient,
    unitYear,
    unitMake,
    unitModel,
    unitJobUrgency,
    notes,
  } = req.body;
  const { unitId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitsModel.findById(unitId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  unitToBeEdited.branch = branch;
  unitToBeEdited.unitLocation = unitLocation;
  unitToBeEdited.unitType = unitType;
  unitToBeEdited.unitNumber = unitNumber;
  unitToBeEdited.unitClient = unitClient;
  unitToBeEdited.unitYear = unitYear;
  unitToBeEdited.unitMake = unitMake;
  unitToBeEdited.unitModel = unitModel;
  unitToBeEdited.unitJobUrgency = unitJobUrgency;
  unitToBeEdited.notes = notes;
  try {
    await unitToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit units", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deleteUnit = async (req, res, next) => {
  const { unitId } = req.params;
  try {
    await unitsModel.findByIdAndRemove(unitId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addUnits = addUnits;
exports.getUnits = getUnits;
exports.editUnit = editUnit;
exports.deleteUnit = deleteUnit;
