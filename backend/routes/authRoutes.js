import express from "express"
import passport from "passport";
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser)

router.post("/login", passport.authenticate('local', { failureMessage: true }), loginUser)

export default router