import express from "express"
import {getPosts, newPost} from "../controllers/articleController.js"

const router = express.Router();

router.get("/", getPosts)

router.post("/e", newPost)

export default router