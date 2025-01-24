// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/db");
// const Column = require("./column.model");
// const User = require("./user.model");

// const Task = sequelize.define("Task", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   title: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   due_date: { type: DataTypes.DATE },
// });

// Task.belongsTo(Column, { foreignKey: "column_id" });
// Task.belongsTo(User, { foreignKey: "assigned_user_id" });

// module.exports = Task;
// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/db");
// const Column = require("./column.model");
// const User = require("./user.model");

// const Task = sequelize.define("Task", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   title: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   due_date: { type: DataTypes.DATE },
// });

// Task.belongsTo(Column, { foreignKey: "column_id", onDelete: "CASCADE" });
// Task.belongsTo(User, { foreignKey: "assigned_user_id", onDelete: "SET NULL" });

// module.exports = Task;

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Column = require("./column.model");
const User = require("./user.model");

const Task = sequelize.define(
  "Task",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    due_date: { type: DataTypes.DATE },
  },
  {
    timestamps: true, // Ensure timestamps are enabled
  }
);

Task.belongsTo(Column, { foreignKey: "column_id", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "assigned_user_id", onDelete: "SET NULL" });

module.exports = Task;
