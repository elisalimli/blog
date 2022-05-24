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
      //@todo fix this
      // callbackURL:
      //   process.env.NODE_ENV === "production"
      //     ? process.env.BACKEND_URL + "/oauth2/redirect/google"
      //     : "http:// :4000/oauth2/redirect/google",
      callbackURL: "/oauth2/redirect/google",
      passReqToCallback: true,
    },
    //@ts-ignore

    async function (_, __, ___, profile, done) {
      await prisma.user.upsert({
        where: {
          id: profile?.id,
        },
        update: {},
        create: {
          id: profile?.id,
        },
      });
      return done(null, profile);
    }
  )
);

router.get(
  "/auth/google",
  (req: any, _, next) => {
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
  (req: any, res) => {
    // Redirect back to the original page, if any
    const redirect = req.session.oauth2return || "/";
    delete req.session.oauth2return;
    res.redirect(redirect);
  }
);

router.get("/auth/google/failure", (_, res) => {
  res.send("Failed to authenticate..");
});
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user as any);
});
export default router;
