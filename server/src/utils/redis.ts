import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

export const RedisStore = connectRedis(session);

export const redis = new Redis(process.env.REDIS_URL);
// postgres://postgres:298ded1bfa6a8a753bfe244e37b92ee3@dokku-postgres-anka-db:5432/anka_db
