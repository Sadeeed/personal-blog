import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import userModel from "../models/userModel.js";
import { cfg } from "../config.js";

const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
};

var strategy = new Strategy(params, function (payload, done) {
  console.log(payload)
  var user = userModel.findById(payload.id, function (err, user) {
    if (err) {
      return done(new Error("UserNotFound"), null);
    } else if (payload.expire <= Date.now()) {
      return done(new Error("TokenExpired"), null);
    } else {
      return done(null, user);
    }
  });
});

passport.use(strategy);

export const initialize = () => {
  return passport.initialize();
};

export const authenticate = () => {
  return passport.authenticate("jwt", cfg.jwtSession);
};
