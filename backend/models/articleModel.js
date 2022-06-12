import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  slug: String,
  author: String,
  subtitle: String,
  content: String,
  created: Date,
});

const articleModel = mongoose.model("article", articleSchema);

export default articleModel;
