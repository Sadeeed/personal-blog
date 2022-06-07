import express from "express"
import {editPost, getPosts, newPost} from "../controllers/articleController.js"

const router = express.Router();

router.get("/", getPosts)

router.post("/n", newPost)

router.post("/e", editPost)

export default router