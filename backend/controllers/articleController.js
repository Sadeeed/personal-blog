import articleModel from "../models/articleModel.js"
import slugify from "slugify";

export const getPosts = (req, res) => {
  articleModel.find({}).exec((err, data) => {
    if (err) throw err
    res.json(data)
  })
};

export const newPost = (req, res) => {
  const date = Date.now();
  req.body.slug = slugify(req.body.title, { lower: true });
  req.body.created = date;
  req.author = "Sadeed"

  const article = new articleModel(req.body)
  article.save()
  console.log("article" , req.body.title, "saved..")
  res.send()
};

export const editPost = (req, res) => {
  articleModel.findOne({slug:req.body.slug}).exec((err, data) => {
    if (err) throw err
    data.content = req.body.content
    data.subtitle = req.body.subtitle
    data.save()
    console.log("article" , data.title, "updated..")
    res.send()
  })
};

export const deletePost = (req, res) => {
  articleModel.deleteOne({slug:req.params.slug}).exec((err, data) => {
    if (err) throw err
    console.log("article" , data, "deleted..")
    res.json(data)
  })
}
