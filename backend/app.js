import express from "express";
import cors from "cors";

import courseRoutes from "./routes/course.routes.js";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Scholar FMS API is running",
  });
});

export default app;