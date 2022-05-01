import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

export interface MyContext {
  req: Request & {
    session: Session &
      Partial<SessionData> & {
        userId?: string;
        user: { id: string };
        oauth2return?: string;
      };
  };
  user: { id: string };
  res: Response;
  redis: Redis;
  prisma: PrismaClient;
}
