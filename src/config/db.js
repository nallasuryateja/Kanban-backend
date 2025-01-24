const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // User
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Host
    dialect: "postgres", // Database type
    port: process.env.DB_PORT || 5432, // Port
    logging: false, // Disable SQL query logging
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

module.exports = { sequelize, connectDB };
