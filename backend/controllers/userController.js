import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { cfg } from "../config.js";

export const createUser = (req, res) => {
  userModel.register(
    new userModel({ email: req.body.email, username: req.body.username }),
    req.body.password.password,
    (err, account) => {
      if (err) {
        res.send(err);
      } else {
        res.send();
      }
    }
  );
};

export const loginUser = (req, res) => {
  const username = req.body.username;
  userModel.findOne({username: username}).exec((err, user) => {
    if (err) {
      res.send(err);
    } else {
      var payload = {
        id: user.id,
        exp: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
      };
      var token = jwt.sign(payload, cfg.jwtSecret);
      res.json({
        status: 200,
        token: token,
      });
    }
  });
};
