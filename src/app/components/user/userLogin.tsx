"use client";
import axios from "axios";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Slide, toast } from "react-toastify";
import { X, UserCircle2, Mail, Lock, Eye, EyeOff } from "lucide-react";

import { UserElement } from "@/src/interfaces/interfaces";

export function UserLogin(props: Readonly<UserElement>){
  const [showPasswourd, setShowPassword] = useState<boolean>(false);
  
  async function login(){
        try {
          await axios
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

    return(
        <form className="">
            <label htmlFor="userEmail" className="">
              <Mail/>
              Digite o seu e-mail:
              </label>
            <input type="email" name="userEmail" id="userEmail" className=""/>

            <label htmlFor="userPassword" className="">
              <Lock/>
              Digite a sua senha:
              </label>

            {showPasswourd ?  
            <input type="text" name="userPassword" id="userPassword" className=""/>:
            <input type="password" name="userPassword" id="userPassword" className=""/>}
            
            <button type="button" className="" onClick={isShowPassword}>
                {showPasswourd ?
                <EyeOff/>:
                <Eye/>}
            </button>
            
        </form>
    )
}