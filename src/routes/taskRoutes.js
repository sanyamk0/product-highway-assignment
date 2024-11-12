import express from "express";
import * as taskController from "../controllers/taskController.js";
import { validateTaskInput } from "../middleware/inputValidation.js";

const router = express.Router();

router.post("/", validateTaskInput, taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", validateTaskInput, taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
