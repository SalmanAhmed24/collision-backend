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
    unitStatus,
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
    unitStatus,
    info: [],
    individualNotes: [],
    tasks: [],
    work: null,
    parts: null,
    $: null,
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
    unitStatus,
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
  unitToBeEdited.unitStatus = unitStatus;
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
const addInfo = async (req, res, next) => {
  const { unitId } = req.params;
  const {
    estimateDone,
    partsOrdered,
    onPremise,
    premiseDate,
    approvedDate,
    startDate,
    ecd,
    tearDownAssignTo,
    tearDownCompleteDate,
    bodyAssignedTo,
    bodyCompletedDate,
    paintPrepAssignTo,
    paintPrepCompleteDate,
    paintAssignTo,
    paintCompleteDate,
    inspectionAssignTo,
    inspectionCompleteDate,
    invoiceDate,
    deliverDate,
  } = req.body;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitsModel.findById(unitId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  unitToBeEdited.info.estimateDone = estimateDone;
  unitToBeEdited.info.partsOrdered = partsOrdered;
  unitToBeEdited.info.onPremise = onPremise;
  unitToBeEdited.info.premiseDate = premiseDate;
  unitToBeEdited.info.approvedDate = approvedDate;
  unitToBeEdited.info.startDate = startDate;
  unitToBeEdited.info.ecd = ecd;
  unitToBeEdited.info.tearDownAssignTo = tearDownAssignTo;
  unitToBeEdited.info.tearDownCompleteDate = tearDownCompleteDate;
  unitToBeEdited.info.bodyAssignedTo = bodyAssignedTo;
  unitToBeEdited.info.bodyCompletedDate = bodyCompletedDate;
  unitToBeEdited.info.paintPrepAssignTo = paintPrepAssignTo;
  unitToBeEdited.info.paintPrepCompleteDate = paintPrepCompleteDate;
  unitToBeEdited.info.paintAssignTo = paintAssignTo;
  unitToBeEdited.info.paintCompleteDate = paintCompleteDate;
  unitToBeEdited.info.inspectionAssignTo = inspectionAssignTo;
  unitToBeEdited.info.inspectionCompleteDate = inspectionCompleteDate;
  unitToBeEdited.info.invoiceDate = invoiceDate;
  unitToBeEdited.info.deliverDate = deliverDate;
  try {
    await unitToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit units", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const addNotes = async (req, res, next) => {
  const { unitId } = req.params;
  const { note, date, time, user } = req.body;
  let unitToBeEdited;
  try {
    unitToBeEdited = await unitsModel.findById(unitId);
  } catch (error) {
    res.json({ message: "Could not find the unit", error: true });
    return next(error);
  }
  unitToBeEdited.individualNotes.push({ note, date, time, user });
  try {
    await unitToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit units", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
exports.addUnits = addUnits;
exports.getUnits = getUnits;
exports.editUnit = editUnit;
exports.addInfo = addInfo;
exports.deleteUnit = deleteUnit;
exports.addNotes = addNotes;
