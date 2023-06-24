const vendorModel = require("../models/vendorModel");
const addvendor = async (req, res, next) => {
  const {
    vendorName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    vendorType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  } = req.body;
  const createvendor = new vendorModel({
    vendorName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    vendorType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  });
  try {
    await createvendor.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getvendor = async (req, res, next) => {
  let allvendors;
  try {
    allvendors = await vendorModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    vendor: allvendors.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editvendor = async (req, res, next) => {
  const {
    vendorName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    vendorType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  } = req.body;
  const { vendorId } = req.params;
  let vendorToBeEdited;
  try {
    vendorToBeEdited = await vendorModel.findById(vendorId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  vendorToBeEdited.vendorName = vendorName;
  vendorToBeEdited.mainContact = mainContact;
  vendorToBeEdited.phoneWork = phoneWork;
  vendorToBeEdited.phoneMobile = phoneMobile;
  vendorToBeEdited.fax = fax;
  vendorToBeEdited.mainEmail = mainEmail;
  vendorToBeEdited.vendorType = vendorType;
  vendorToBeEdited.website = website;
  vendorToBeEdited.addressMain = addressMain;
  vendorToBeEdited.addressSec = addressSec;
  vendorToBeEdited.city = city;
  vendorToBeEdited.state = state;
  vendorToBeEdited.zipCode = zipCode;
  try {
    await vendorToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit unit make", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deletevendor = async (req, res, next) => {
  const { vendorId } = req.params;
  try {
    await vendorModel.findByIdAndRemove(vendorId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addvendor = addvendor;
exports.getvendor = getvendor;
exports.editvendor = editvendor;
exports.deletevendor = deletevendor;
