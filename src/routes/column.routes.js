const express = require("express");
const {
  getColumns,
  createColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/column.controller");
const router = express.Router();

router.get("/", getColumns);
router.post("/", createColumn);
router.put("/:id", updateColumn);
router.delete("/:id", deleteColumn);

module.exports = router;
