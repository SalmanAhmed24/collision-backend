const clientTypeModel = require("../models/clientTypeModel");
const addclientType = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const createclientTypeel = new clientTypeModel({
    name,
    shortCode,
  });
  try {
    await createclientTypeel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getclientType = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await clientTypeModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    clientType: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editclientType = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const { clientTypeId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await clientTypeModel.findById(clientTypeId);
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
const deleteclientType = async (req, res, next) => {
  const { clientTypeId } = req.params;
  try {
    await clientTypeModel.findByIdAndRemove(clientTypeId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addclientType = addclientType;
exports.getclientType = getclientType;
exports.editclientType = editclientType;
exports.deleteclientType = deleteclientType;
