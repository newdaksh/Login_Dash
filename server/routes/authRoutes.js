import express from "express";
const router = express.Router();
import { login, register } from "../controllers/authController.js";

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

export default router;
