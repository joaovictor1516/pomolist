"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { UserLogin } from "./user/userLogin";
import { UserSignIn } from "./user/userSignIn";
import { LogIn, UserCircle2, Settings } from "lucide-react";

export function Header(){
    const [userLogin, setUserLogin] = useState<boolean>(false);
    
    function isUserSignIn(){
        if(userLogin){
            setUserLogin(false);
        }
    }

    function isUserLogin(){
        if(!userLogin){
            setUserLogin(true);
        }
    }

    return(
        <div className="">
            <button type="button" className="" onClick={isUserSignIn}>
                <UserCircle2/>
                Criar conta                
            </button>
            
            <button type="button" className="" onClick={isUserLogin}>
                <LogIn/>
                Entrar
            </button>
            
            <button type="button">
                <Settings/>
                Configurações
            </button>
        </div>
    )
}