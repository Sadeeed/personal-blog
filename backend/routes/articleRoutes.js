import express from "express"
import {editPost, getPosts, newPost, deletePost} from "../controllers/articleController.js"

const router = express.Router();

router.get("/", getPosts)

router.post("/n", newPost)

router.put("/e/:slug", editPost)

router.delete("/d/:slug", deletePost)

export default router