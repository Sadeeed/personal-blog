import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// TODO

export const createUser = (req, res) => {
  const token = jwt.sign(req.body, "hello");
  const user = new userModel(req.body);
  user.token = token;
  user.save();
  res.send({ success: 200, token: token });
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxNDI1NTN3MjY1MyIsImlhdCI6MTY1NDYzMjA3OH0.aaaThZL1aB667uWyVCdRIEJX0grbqP0oZfhAl7oWMUo

export const loginUser = (req, res) => {
  const token = req.body.token;
  userModel.findOne(req.body, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      const decoded = jwt.verify(token, "hello");
      if (decoded.password == user.password) {
        res.send({ message: "Welcome back" });
      } else {
        res.send({ message: "Token expired" });
      }
    }
  });
};
