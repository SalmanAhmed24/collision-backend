const clientModel = require("../models/clientModel");
const addClient = async (req, res, next) => {
  const {
    clientName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    clientType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  } = req.body;
  const createClient = new clientModel({
    clientName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    clientType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  });
  try {
    await createClient.save();
  } catch (error) {
    res.json({ message: "Error adding Unit Make", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getClient = async (req, res, next) => {
  let allClients;
  try {
    allClients = await clientModel.find({});
  } catch (error) {
    res.json({ message: "Error finding unit make list", error: true });
    return next(error);
  }
  res.json({
    client: allClients.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editClient = async (req, res, next) => {
  const {
    clientName,
    mainContact,
    phoneWork,
    phoneMobile,
    fax,
    mainEmail,
    clientType,
    website,
    addressMain,
    addressSec,
    city,
    state,
    zipCode,
  } = req.body;
  const { clientId } = req.params;
  let clientToBeEdited;
  try {
    clientToBeEdited = await clientModel.findById(clientId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  clientToBeEdited.clientName = clientName;
  clientToBeEdited.mainContact = mainContact;
  clientToBeEdited.phoneWork = phoneWork;
  clientToBeEdited.phoneMobile = phoneMobile;
  clientToBeEdited.fax = fax;
  clientToBeEdited.mainEmail = mainEmail;
  clientToBeEdited.clientType = clientType;
  clientToBeEdited.website = website;
  clientToBeEdited.addressMain = addressMain;
  clientToBeEdited.addressSec = addressSec;
  clientToBeEdited.city = city;
  clientToBeEdited.state = state;
  clientToBeEdited.zipCode = zipCode;
  try {
    await clientToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit unit make", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deleteClient = async (req, res, next) => {
  const { clientId } = req.params;
  try {
    await clientModel.findByIdAndRemove(clientId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addClient = addClient;
exports.getClient = getClient;
exports.editClient = editClient;
exports.deleteClient = deleteClient;
