import express from "express";
import * as userController from "../controllers/userController.js";
import { validateUserInput } from "../middleware/inputValidation.js";

const router = express.Router();

router.post("/", validateUserInput, userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", validateUserInput, userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
