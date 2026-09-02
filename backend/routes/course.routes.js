import express from "express";

import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  toggleCoursePublish,
} from "../controller/course.controller.js";

import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| COURSE ROUTES
|--------------------------------------------------------------------------
*/

// Get all courses
router.get(
  "/",
  protect,
  getCourses
);

// Get single course
router.get(
  "/:id",
  protect,
  getCourseById
);

// Create course
router.post(
  "/",
  protect,
  authorize("SUPER_ADMIN", "AI_SCHOLAR_ADMIN"),
  createCourse
);

// Update course
router.put(
  "/:id",
  protect,
  authorize("SUPER_ADMIN", "AI_SCHOLAR_ADMIN"),
  updateCourse
);

// Delete course
router.delete(
  "/:id",
  protect,
  authorize("SUPER_ADMIN", "AI_SCHOLAR_ADMIN"),
  deleteCourse
);

// Publish / Unpublish
router.patch(
  "/:id/publish",
  protect,
  authorize("SUPER_ADMIN", "AI_SCHOLAR_ADMIN"),
  toggleCoursePublish
);

export default router;