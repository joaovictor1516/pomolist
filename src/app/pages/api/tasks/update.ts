import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export async function UpdateTask(request: NextApiRequest, response: NextApiResponse){
    const {id, title, content, time} = request.body;

    try{
        const task = await prisma.task.update({
            where: {id},
            data: {title, content, time}
        });
        response.status(200).json(task);
    }
    catch(error){
        response.status(500).json({error: error});
    };
}