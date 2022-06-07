import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  token: String,
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
