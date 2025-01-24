const Task = require("../models/task.model");
const Column = require("../models/column.model");
const User = require("../models/user.model");

// Get all tasks with associated column and user details
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [
        { model: Column, attributes: ["id", "name"] },
        { model: User, attributes: ["id", "name", "avatar", "email"] },
      ],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, due_date, column_id, assigned_user_id } =
    req.body;
  try {
    const task = await Task.create({
      title,
      description,
      due_date,
      column_id,
      assigned_user_id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  const { title, description, due_date, column_id, assigned_user_id } =
    req.body;
  try {
    const [updated] = await Task.update(
      { title, description, due_date, column_id, assigned_user_id },
      { where: { id: req.params.id } }
    );
    if (updated) {
      res.status(200).json({ message: "Task updated successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Move a task to another column
exports.moveTask = async (req, res) => {
  const { column_id } = req.body;
  try {
    const [updated] = await Task.update(
      { column_id },
      { where: { id: req.params.id } }
    );
    if (updated) {
      res.status(200).json({ message: "Task moved successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
