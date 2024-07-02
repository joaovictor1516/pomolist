"use client";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Slide, toast } from "react-toastify";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import { UserElement } from "@/src/interfaces/interfaces";

export function UserLogin(){
  const [showPasswourd, setShowPassword] = useState<boolean>(false);
  const [userPassword, setUserPasswprd] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  
  async function login(){
        try {
          await axios.get("/user/api");
        } catch (error) {
          
        }
    }

    function isShowPassword(){
        if(showPasswourd){
            setShowPassword(false);
        } else{
            setShowPassword(true);
        }
    }

    function handleEmail(value: ChangeEvent<HTMLInputElement>){
        const text = value.target.value
        
        if(text !== ""){
            setUserEmail(text);
        }
    }

    function handlePassword(value: ChangeEvent<HTMLInputElement>){
        const text = value.target.value;

        if(text !== ""){
            setUserPasswprd(text);
        }
    }

    function handleUserSignIn(){
        const router = useRouter();
        router.push("/register");
    }

    return(
        <form className="flex flex-col ">
            <div className="">
                <label htmlFor="userEmail" 
                       className="">
                    <Mail/>
                    Digite o seu e-mail:
                </label>
                <input type="email" 
                       name="userEmail"
                       id="userEmail"
                       onChange={handleEmail}
                       className=""/>
            </div>

            <div className="">
                <label htmlFor="userPassword" className="">
                    <Lock/>
                    Digite a sua senha:
                </label>
                
                {showPasswourd ?
                <input type="value" 
                       name="userPassword"
                       id="userPassword"
                       onChange={handlePassword}
                       className=""/>:
                <input type="password"
                       name="userPassword" 
                       id="userPassword"
                       onChange={handlePassword}
                       className=""/>}
                    
                <button type="button" className="" onClick={isShowPassword}>
                    {showPasswourd ?
                    <EyeOff/>:
                    <Eye/>}
                </button>
            </div>
            
            <div className="flex flex-col">
                <button type="button" className="">Fazer o login</button>
                <button type="button" className="" onClick={handleUserSignIn}>Criar conta</button>
            </div>
        </form>
    )
}