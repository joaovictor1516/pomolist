import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export async function DeleteTask(request: NextApiRequest, response: NextApiResponse){
    const {id} = request.body;
    
    try{
        await prisma.task.delete({
            where: {id}
        });
        response.status(200).json({message: "task deletada com sucesso."});
    }
    catch(error){
        response.status(500).json({error: error});
    }
}