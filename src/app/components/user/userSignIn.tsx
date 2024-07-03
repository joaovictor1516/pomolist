"use client";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { ChangeEvent, useState } from "react";
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

    function creatCount(){
        axios.post("/user/api");
    }

    function handleUserPassword(value: ChangeEvent<HTMLInputElement>){
        const text = value.target.value;

        if(text !== ""){
            setUserPasswprd(text);
        }
    }

    function handleUserEmail(value: ChangeEvent<HTMLInputElement>){
        const text = value.target.value;

        if(text !== ""){
            setUserEmail(text);
        }
    }

    function handleUserName(value: ChangeEvent<HTMLInputElement>){
        const text = value.target.value;

        if(text !== ""){
            setUserName(text);
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
                       onChange={handleUserName}
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
                       onChange={handleUserEmail}
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
                       onChange={handleUserPassword}
                       className=""/>:
                <input type="password" 
                       name="userPassword" 
                       id="userPassword"
                       onChange={handleUserPassword}
                       className=""/>}
                    
                <button type="button" className="" onClick={isShowPassword}>
                    {showPasswourd ?
                    <EyeOff/>:
                    <Eye/>}
                </button>
            </div>

            <div className="">
                <label htmlFor="userPassword" className="">
                    <Lock/>
                    Confirme a sua senha:
                </label>

                {showPasswourd ?
                <input type="text" 
                       name="userPassword" 
                       id="userPassword"
                       onChange={handleUserPassword}
                       className=""/>:
                <input type="password" 
                       name="userPassword" 
                       id="userPassword"
                       onChange={handleUserPassword}
                       className=""/>}
                    
                <button type="button" className="" onClick={isShowPassword}>
                    {showPasswourd ?
                    <EyeOff/>:
                    <Eye/>}
                </button>
            </div>

            <button type="button" className="" onClick={creatCount}>Criar conta</button>
        </form>
    )
}