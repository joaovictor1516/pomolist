"use client";
import axios from "axios";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Slide, toast } from "react-toastify";
import { UserCircle2, Mail, Lock, Eye, EyeOff } from "lucide-react";

export function UserSignIn(){
    const [showPasswourd, setShowPassword] = useState<boolean>(false);
    const [userPassword, setUserPasswprd] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");

    function isShowPassword(){
        if(showPasswourd){
            setShowPassword(false);
        } else{
            setShowPassword(true);
        }
    }

    return(
        <form className="">
            <div className="">
                <label htmlFor="userName"
                       className="">
                    <UserCircle2/>
                    Digite o nome do seu usario:
                </label>
                <input type="text"
                       name="userName"
                       id="userName"
                       className=""/>
            </div>

            <div className="">
                <label htmlFor="userEmail" 
                       className="">
                    <Mail/>
                    Digite o seu e-mail:
                </label>
                <input type="email" 
                       name="userEmail"
                       id="userEmail"
                       className=""/>
            </div>

            <div className="">
                <label htmlFor="userPassword" className="">
                    <Lock/>
                    Digite a sua senha:
                </label>
                
                {showPasswourd ?
                <input type="text" 
                       name="userPassword" 
                       id="userPassword" 
                       className=""/>:
                <input type="password" 
                       name="userPassword" 
                       id="userPassword" 
                       className=""/>}
                    
                <button type="button" className="" onClick={isShowPassword}>
                    {showPasswourd ?
                    <EyeOff/>:
                    <Eye/>}
                </button>
            </div>

            <button type="button" className="">Criar conta</button>
        </form>
    )
}