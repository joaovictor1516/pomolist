"use client";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Slide, toast } from "react-toastify";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export function UserLogin(){
  const [showPasswourd, setShowPassword] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  
  async function login(){
        try{
          await axios.post("login/api", {
            email: userEmail,
            password: userPassword
          });

          toast.success("Login efetuado com sucesso.", {
            hideProgressBar: true,
            position: "top-right",
            transition: Slide,
            autoClose: 500,
            closeOnClick: true,
            pauseOnHover: true
          });
          
        } catch (error){
          toast.error("Falha ao efetuar o login", {
            hideProgressBar: true,
            position: "top-right",
            transition: Slide,
            autoClose: 500,
            closeOnClick: true,
            pauseOnHover: true
          });
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
            setUserPassword(text);
        }
    }

    function handleUserSignIn(){
        const Router = useRouter();
        Router.push("/register");
    }

    return(
        <form className="flex flex-col justify-center content-center items-center">
            <div className="flex flex-row">
                <label htmlFor="userEmail" 
                       className="flex flex-row">
                    <Mail/>
                    Digite o seu e-mail:
                </label>
                <input type="email" 
                       name="userEmail"
                       id="userEmail"
                       onChange={handleEmail}
                       className="bg-stone-300 border-solid rounded-md px-1"/>
            </div>

            <div className="flex flex-row">
                <label htmlFor="userPassword" 
                       className="flex flex-row">
                    <Lock/>
                    Digite a sua senha:
                </label>
                
                {showPasswourd ?
                <input type="value" 
                       name="userPassword"
                       id="userPassword"
                       onChange={handlePassword}
                       className="bg-stone-300 border-solid rounded-md px-1"/>:
                <input type="password"
                       name="userPassword" 
                       id="userPassword"
                       onChange={handlePassword}
                       className="bg-stone-300 border-solid rounded-md px-1"/>}
                    
                <button type="button" className="" onClick={isShowPassword}>
                    {showPasswourd ?
                    <EyeOff/>:
                    <Eye/>}
                </button>
            </div>
            
            <div className="flex flex-col">
                <button type="button" className="" onClick={login}>Fazer o login</button>
                <button type="button" className="" onClick={handleUserSignIn}>Criar conta</button>
            </div>
        </form>
    )
}