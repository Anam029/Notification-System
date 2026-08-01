import User from "../models/user.models.js";
import passport, { Passport } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import type { Profile } from "passport-google-oauth20";


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_REDIRECT_URI as string,
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done) => {
      try {
    let user = await User.findOne({
      googleId: profile.id,
    });
    

    if (!user) {
    let email = profile.emails?.[0]?.value;
    if(!email){
      return done(new Error("Email not found"))
    }

      user = await User.create({
       googleId: profile.id as string,
       email,
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
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;