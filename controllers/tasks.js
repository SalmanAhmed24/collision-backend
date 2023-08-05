const taskModel = require("../models/taskModel");
const addtask = async (req, res, next) => {
  const {
    date,
    time,
    taskCategory,
    dueDate,
    assignedTo,
    title,
    taskDescription,
  } = req.body;
  const createtask = new taskModel({
    date,
    time,
    taskCategory,
    dueDate,
    assignedTo,
    title,
    taskDescription,
  });
  try {
    await createtask.save();
  } catch (error) {
    res.json({ message: "Error adding Tasks", error: true });
    return next(error);
  }
  res.json({ message: "Created Successfully", error: false });
};
const gettask = async (req, res, next) => {
  let allTasks;
  try {
    allTasks = await taskModel.find({});
  } catch (error) {
    res.json({ message: "Error finding tasks", error: true });
    return next(error);
  }
  res.json({
    tasks: allTasks.map((item) => item.toObject({ getters: true })),
    error: false,
  });
};
const edittask = async (req, res, next) => {
  const {
    date,
    time,
    taskCategory,
    dueDate,
    assignedTo,
    title,
    taskDescription,
  } = req.body;
  const { taskId } = req.params;
  let taskToBeEdited;
  try {
    taskToBeEdited = await taskModel.findById(taskId);
  } catch (error) {
    res.json({ message: "Could not find the task", error: true });
    return next(error);
  }
  taskToBeEdited.date = date;
  taskToBeEdited.time = time;
  taskToBeEdited.taskCategory = taskCategory;
  taskToBeEdited.dueDate = dueDate;
  taskToBeEdited.assignedTo = assignedTo;
  taskToBeEdited.title = title;
  taskToBeEdited.taskDescription = taskDescription;
  try {
    await taskToBeEdited.save();
  } catch (error) {
    res.json({ message: "Enable to edit task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Edited successfully", error: false });
};
const deletetask = async (req, res, next) => {
  const { taskId } = req.params;
  try {
    await taskModel.findByIdAndRemove(taskId);
  } catch (error) {
    res.json({ message: "Could not found the specific task", error: true });
    return next(error);
  }
  res.status(201).json({ message: "Deleted successfully", error: false });
};
exports.addtask = addtask;
exports.gettask = gettask;
exports.edittask = edittask;
exports.deletetask = deletetask;
