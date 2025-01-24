// const express = require("express");
// const bodyParser = require("body-parser");
// const { connectDB } = require("./config/db");
// const userRoutes = require("./routes/user.routes");
// const columnRoutes = require("./routes/column.routes");
// const taskRoutes = require("./routes/task.routes");

// const app = express();
// app.use(bodyParser.json());

// app.use("/api/users", userRoutes);
// app.use("/api/columns", columnRoutes);
// app.use("/api/tasks", taskRoutes);

// connectDB();

// module.exports = app;
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
const { sequelize } = require("./config/db");

const userRoutes = require("./routes/user.routes");
const columnRoutes = require("./routes/column.routes");
const taskRoutes = require("./routes/task.routes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/columns", columnRoutes);
app.use("/api/tasks", taskRoutes);

// Connect to PostgreSQL
connectDB();

// Sync database
sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced successfully");
});

module.exports = app;
