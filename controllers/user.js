const userModel = require("../models/userModel");
const addUser = async (req, res, next) => {
  const {
    userType,
    fullname,
    mainEmail,
    phone,
    username,
    password,
    pinCode,
    hireDate,
    nextReviewDate,
  } = req.body;
  const createUserModel = new userModel({
    userType,
    fullname,
    mainEmail,
    phone,
    username,
    password,
    pinCode,
    hireDate,
    nextReviewDate,
  });
  try {
    await createUserModel.save();
  } catch (error) {
    res.json({ message: "Error adding User", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const getUsers = async (req, res, next) => {
  let allUsers;
  try {
    allUsers = await userModel.find({});
  } catch (error) {
    res.json({ message: "Error finding users list", error: true });
    return next(error);
  }
  res.json({
    allUsers: allUsers.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const editUser = async (req, res, next) => {
  const {
    userType,
    fullname,
    mainEmail,
    phone,
    username,
    password,
    pinCode,
    hireDate,
    nextReviewDate,
  } = req.body;
  const { userId } = req.params;
  let userToBeEdited;
  try {
    userToBeEdited = await userModel.findById(userId);
  } catch (error) {
    res.json({ message: "Could not find the user", error: true });
    return next(error);
  }
  userToBeEdited.userType = userType;
  userToBeEdited.fullname = fullname;
  userToBeEdited.mainEmail = mainEmail;
  userToBeEdited.phone = phone;
  userToBeEdited.username = username;
  userToBeEdited.password = password;
  userToBeEdited.pinCode = pinCode;
  userToBeEdited.hireDate = hireDate;
  userToBeEdited.nextReviewDate = nextReviewDate;
  try {
    await userToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit user", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    await userModel.findByIdAndRemove(userId);
  } catch (error) {
    res.json({ message: "Could not found the specific user", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addUser = addUser;
exports.getUsers = getUsers;
exports.editUser = editUser;
exports.deleteUser = deleteUser;
