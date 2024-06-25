import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../../lib/prisma";

export async function CreateTask(request: NextApiRequest, response: NextApiResponse){
    const {title, content, timeTask, shortRestTime, longRestTime} = request.body;

    try{
        const task = await prisma.tasks.create({
            data: {title, content, timeTask, shortRestTime, longRestTime}
        });
        response.status(200).json(task);
    }
    catch(error){
        response.status(500).json({error: error});
    }
}