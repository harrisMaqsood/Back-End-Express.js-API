const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateTaskTitle,
  updateTaskCompleted,
} = require("../controller/taskController");

router.get("/tasks", getTasks);          
router.get("/tasks/:id", getTask);       
router.post("/tasks", createTask);       
router.put("/tasks/:id/completed", updateTaskCompleted);    
router.put("/tasks/:id/title", updateTaskTitle);    
router.delete("/tasks/:id", deleteTask);

module.exports = router;
