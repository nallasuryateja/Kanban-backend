const Column = require("../models/column.model");

exports.getColumns = async (req, res) => {
  const columns = await Column.findAll();
  res.status(200).json(columns);
};

exports.createColumn = async (req, res) => {
  const { name } = req.body;
  const column = await Column.create({ name });
  res.status(201).json(column);
};

exports.updateColumn = async (req, res) => {
  const { name } = req.body;
  await Column.update({ name }, { where: { id: req.params.id } });
  res.status(200).json({ message: "Column updated successfully" });
};

exports.deleteColumn = async (req, res) => {
  await Column.destroy({ where: { id: req.params.id } });
  res.status(200).json({ message: "Column deleted successfully" });
};
