import express from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth2";

const router = express.Router();
passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:4000/oauth2/redirect/google",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log("profile : ", profile);
      return done(null, profile);
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/protected", (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

router.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
export default router;
