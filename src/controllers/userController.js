import * as userService from "../services/userService.js";
import { successResponse, errorResponse } from "../utils/apiResponses.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, 201, "User Created successfully", user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    successResponse(res, 200, "Users retrieved successfully", users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    successResponse(res, 200, "User retrieved successfully", user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    successResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    successResponse(res, 200, "User deleted successfully");
  } catch (error) {
    next(error);
  }
};
