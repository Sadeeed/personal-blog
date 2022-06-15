import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("user", userSchema);

export default userModel;
