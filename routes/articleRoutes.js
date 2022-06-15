import express from "express";
import {
  editPost,
  getPosts,
  newPost,
  deletePost,
  getPost,
} from "../controllers/articleController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/p/:slug", getPost);

router.post("/n", authenticate(), newPost);

router.put("/e/:slug", authenticate(), editPost);

router.delete("/d/:slug", authenticate(), deletePost);

export default router;
