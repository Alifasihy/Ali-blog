import express from "express";

import {
  getAllPosts,
  addPost,
  getSinglePost,
  updateSinglePost,
  removeSinglePost,
  
} from "../controllers/Posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", addPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSinglePost);
router.delete("/:id", removeSinglePost);

