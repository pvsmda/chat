import express from "express";
import {
  signup,
  logout,
  login,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Rotas de autenticação
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Rotas de perfil
router.put("/update-profile", protectRoute, updateProfile);

export default router;
