import { errorResponse } from "../utils/apiResponses.js";

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle specific error types
  if (err.name === "ValidationError") {
    return errorResponse(res, 400, "Validation error", err.errors);
  }

  // Handle other errors
  return errorResponse(res, 500, "Internal server error");
};

export default errorHandler;
