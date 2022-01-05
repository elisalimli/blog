import session from "express-session";
import { COOKIE_NAME, isProduction } from "./constants";
import { redis, RedisStore } from "./redis";

export const sessionMiddleware = session({
  name: COOKIE_NAME,
  store: new RedisStore({
    client: redis,
    disableTouch: true,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 366 * 10, //10 years
    httpOnly: true,
    sameSite: "lax", //csrf,
    domain: isProduction ? ".alisalimli.xyz" : undefined,
    secure: isProduction, // cookie only works in https,
  },
  secret: "asdsadadsad",
  resave: false,
  saveUninitialized: false,
});
