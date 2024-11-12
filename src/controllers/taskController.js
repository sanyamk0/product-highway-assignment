import * as taskService from "../services/taskService.js";
import { successResponse } from "../utils/apiResponses.js";

export const createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.body);
    successResponse(res, 201, "Task created successfully", task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const { status, userId } = req.query;
    const tasks = await taskService.getTasks(status, userId);
    successResponse(res, 200, "Tasks retrieved successfully", tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    successResponse(res, 200, "Task retrieved successfully", task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    successResponse(res, 200, "Task updated successfully", updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await taskService.deleteTask(req.params.id);
    successResponse(res, 200, "Task deleted successfully");
  } catch (error) {
    next(error);
  }
};
