import { prisma } from "./prisma";
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
    async function (_, __, ___, profile, done) {
      const upsertUser = await prisma.user.upsert({
        where: {
          id: profile?.id,
        },
        update: {},
        create: {
          id: profile?.id,
        },
      });
      console.log("user : ", upsertUser);
      return done(null, profile);
    }
  )
);

router.get(
  "/auth/google",
  (req, res, next) => {
    // Save the url of the user's current page so the app can redirect back to it after authorization
    if (req.query.next) {
      req.session.oauth2return = req.query.next;
    }
    next();
  },

  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google"),
  (req, res) => {
    // Redirect back to the original page, if any
    console.log("seession", req.session);
    const redirect = req.session.oauth2return || "/";
    delete req.session.oauth2return;
    res.redirect(redirect);
  }
);

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
