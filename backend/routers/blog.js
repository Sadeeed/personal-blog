import express from "express"
import {getPosts, newPost} from "../controllers/blog.js"

const router = express.Router();

router.get("/", getPosts)

router.post("/", newPost)