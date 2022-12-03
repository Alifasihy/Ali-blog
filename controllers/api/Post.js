import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const router = express.Router();


export const getAllPosts = async (req, res) => {
    try {
      const Posts = await Post.find();
      res.status(200).json(Posts);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const addPost = async (req, res) => {
  const { title, description, fileUpload, creator, tags } = req.body;

  const createNewPost = new Post({
    title,
    content,
    
  });


  try {
    await createNewPost.save();
    res.status(201).json(createNewPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const singlepost = await Post.findById(id);

    res.status(200).json(singlepost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateSinglePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, fileUpload, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);

  const updatedPost = {
    title,
   content,
    _id: id,
  };
  await Post.findByIdAndUpdate(id, updatedBlogPost, { new: true });
  res.json(updatedBlogPost);
};



export const removeBlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);

  await Post.findByIdAndRemove(id);

  res.json({ message: "Successfully deleted" });
};

export default router;