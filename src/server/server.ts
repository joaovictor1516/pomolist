import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

export function server(){
    const app = fastify();

    app.listen({port: 3000}, () => {
        console.log("Server is working");
    });
};