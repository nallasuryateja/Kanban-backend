const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  moveTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.put("/move/:id", moveTask);
router.delete("/:id", deleteTask);

module.exports = router;
