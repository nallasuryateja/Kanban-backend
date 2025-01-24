// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/db");

// const Column = sequelize.define("Column", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false },
// });

// module.exports = Column;
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Column = sequelize.define("Column", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Column;
