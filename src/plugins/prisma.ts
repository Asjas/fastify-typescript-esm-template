import { FastifyInstance } from "fastify";
import FastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

import { prismaDevMiddleware } from "../middleware/prismaMiddleware";
import { Config } from "../config";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

async function PrismaPlugin(fastify: FastifyInstance, opts: Config) {
  const prisma = new PrismaClient();

  await prisma.$connect();

  if (opts.NODE_ENV === "development") {
    prismaDevMiddleware();
  }

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
}

export default FastifyPlugin(PrismaPlugin);
