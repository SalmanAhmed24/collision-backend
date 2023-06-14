const branchModel = require("../models/branchModel");
const addBranch = async (req, res, next) => {
  const { name } = req.body;
  const createbranchModel = new branchModel({
    name,
  });
  try {
    await createbranchModel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getBranch = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await branchModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    branch: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editBranch = async (req, res, next) => {
  const { name } = req.body;
  const { branchId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await branchModel.findById(branchId);
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
const deleteBranch = async (req, res, next) => {
  const { branchId } = req.params;
  try {
    await branchModel.findByIdAndRemove(branchId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addBranch = addBranch;
exports.getBranch = getBranch;
exports.editBranch = editBranch;
exports.deleteBranch = deleteBranch;
