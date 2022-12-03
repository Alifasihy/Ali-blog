import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  content: String,


});

var Post = mongoose.model("BlogArticle", blogSchema);

export default Post;