import { PrismaClient } from '@prisma/client';

declare global {
  declare module globalThis {
    // eslint-disable-next-line no-var,vars-on-top
    var prisma: PrismaClient;
  }
}
