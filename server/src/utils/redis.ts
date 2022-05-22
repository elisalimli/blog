import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

export const RedisStore = connectRedis(session);

export const redis = new Redis("redis://127.0.0.1:6379");
