import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../../lib/prisma";

export async function ShowTasks(request: NextApiRequest, response: NextApiResponse){
    try{
        const tasks = prisma.tasks.findMany();
        response.status(200).json(tasks);
    }
    catch (error){
        response.status(500).json({error: `Erro ao buscar as tasks, descrição do erro: ${error}`});
    }
};