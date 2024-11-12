import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(errorHandler); // Error handling middleware

export default app;
