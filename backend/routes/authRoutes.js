import express from "express"
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)

router.get("/login", loginUser)
router.post("/login", loginUser)

export default router