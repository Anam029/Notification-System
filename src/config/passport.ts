import User from "../models/user.models.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import type { Profile } from "passport-google-oauth20";


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
    let user = await User.findOne({
      googleId: profile.id,
    });
    

    if (!user) {
      user = await User.create({
       googleId: profile.id as string,
       verifierId: profile.id as string,
      });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
    }
  )
);