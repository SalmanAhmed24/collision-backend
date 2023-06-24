const vendorTypeModel = require("../models/vendorTypeModel");
const addvendorType = async (req, res, next) => {
  const { name } = req.body;
  const createvendorTypeel = new vendorTypeModel({
    name,
  });
  try {
    await createvendorTypeel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getvendorType = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await vendorTypeModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    vendorType: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editvendorType = async (req, res, next) => {
  const { name } = req.body;
  const { vendorTypeId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await vendorTypeModel.findById(vendorTypeId);
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
const deletevendorType = async (req, res, next) => {
  const { vendorTypeId } = req.params;
  try {
    await vendorTypeModel.findByIdAndRemove(vendorTypeId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addvendorType = addvendorType;
exports.getvendorType = getvendorType;
exports.editvendorType = editvendorType;
exports.deletevendorType = deletevendorType;
