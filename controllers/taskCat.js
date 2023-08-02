const taskCatModel = require("../models/taskCategory");
const addtaskCat = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const createtaskCatel = new taskCatModel({
    name,
    shortCode,
  });
  try {
    await createtaskCatel.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const gettaskCat = async (req, res, next) => {
  let allUnits;
  try {
    allUnits = await taskCatModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    taskCategory: allUnits.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const edittaskCat = async (req, res, next) => {
  const { name, shortCode } = req.body;
  const { taskCatId } = req.params;
  let unitToBeEdited;
  try {
    unitToBeEdited = await taskCatModel.findById(taskCatId);
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
const deletetaskCat = async (req, res, next) => {
  const { taskCatId } = req.params;
  try {
    await taskCatModel.findByIdAndRemove(taskCatId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addtaskCat = addtaskCat;
exports.gettaskCat = gettaskCat;
exports.edittaskCat = edittaskCat;
exports.deletetaskCat = deletetaskCat;
