import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UserEntity } from "../graphql/entity/User";

export interface MyContext {
  req: Request & {
    session: Session &
      Partial<SessionData> & {
        userId?: string;
        user: UserEntity;
        oauth2return?: string;
      };
  };
  res: Response;
  redis: Redis;
  prisma: PrismaClient;
}
