import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export async function IsTaskCompleted(request: NextApiRequest, response: NextApiResponse){
    const {id, completed} = request.body;

    try{
        const task = prisma.tasks.update({
            where: {id},
            data: {completed}
        });
        response.status(200).json(task);
    }
    catch(error){
        response.status(500).json({error: error});
    };
}