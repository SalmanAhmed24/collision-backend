const unitMakeModel = require("../models/uniteMakeModel");
const addUnitMake = async (req, res, next) => {
  const { name, value } = req.body;
  const createUnitModel = new unitMakeModel({
    name,
    value,
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
  res.json({ unitMake: allUnits, error: false });
};
exports.addUnitMake = addUnitMake;
exports.getUnitMake = getUnitMake;
