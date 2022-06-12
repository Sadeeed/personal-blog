import express from "express"
import {editPost, getPosts, newPost, deletePost} from "../controllers/articleController.js"

const router = express.Router();

router.get("/", getPosts)

router.post("/n", newPost)

router.post("/e", editPost)

router.post("/d", deletePost)

export default router