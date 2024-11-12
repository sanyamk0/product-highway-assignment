import { body, validationResult } from "express-validator";
import { errorResponse } from "../utils/apiResponses.js";

export const validateTaskInput = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("status")
    .isIn(["pending", "in progress", "completed"])
    .withMessage("Invalid status"),
  body("user_id").optional().isUUID().withMessage("Invalid user ID"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, "Validation error", errors.array());
    }
    next();
  },
];

export const validateUserInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, "Validation error", errors.array());
    }
    next();
  },
];
