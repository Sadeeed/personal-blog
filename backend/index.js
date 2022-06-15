import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import articleRouter from "./routes/articleRoutes.js";
import authRouter from "./routes/authRoutes.js";
import passport from "passport";
import localStrategy from "passport-local";
import userModel from "./models/userModel.js";
import session from "express-session";
import { cfg } from "./config.js";

const app = express();
const port = 5000;

const uri =
  "mongodb+srv://icesoup:pegasis8@aloo.e7een.mongodb.net/?retryWrites=true&w=majority";
// const uri =
//   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

passport.use(new localStrategy(userModel.authenticate()));
app.use(
  session({
    secret: cfg.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.use("/api", articleRouter);
app.use("/api/auth", authRouter);

// app.get('/', (req, res) => {
//   res.send(`Hello World!`)
// })
