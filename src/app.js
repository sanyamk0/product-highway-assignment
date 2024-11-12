import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

app.use(errorHandler); // Error handling middleware

export default app;
