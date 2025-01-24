const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

exports.createUser = async (req, res) => {
  const { name, avatar, email } = req.body;
  const user = await User.create({ name, avatar, email });
  res.status(201).json(user);
};
