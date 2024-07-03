import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const secretKey = process.env.KEY_JWT ?? "";

export function authentication(handler: NextApiHandler){
    return async (request: NextApiRequest, response: NextApiResponse) => {
        const token = request.cookies.auth;

        if(!token){
            response.status(401).json({mensage: "Falha na autenticação"});
            return;
        }

        try{
            jwt.verify(token, secretKey);
            return handler(request, response);
        } catch(error){
            response.status(401).json({mensage: "Falha na autenticação"});
        }
    }
}