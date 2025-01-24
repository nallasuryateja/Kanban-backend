// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/db");

// const User = sequelize.define("User", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   avatar: { type: DataTypes.STRING },
//   email: { type: DataTypes.STRING, allowNull: false, unique: true },
// });

// module.exports = User;
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = User;
