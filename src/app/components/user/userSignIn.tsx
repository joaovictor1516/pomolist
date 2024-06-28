"use client";
import axios from "axios";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { Slide, toast } from "react-toastify";
import { X, UserCircle2, Mail, Lock, Eye, EyeOff } from "lucide-react";

export function UserSignIn(){
    const [showPasswourd, setShowPassword] = useState<boolean>(false);

    function isShowPassword(){
        if(showPasswourd){
            setShowPassword(false);
        } else{
            setShowPassword(true);
        }
    }

    return(
        <form className="">
            <label htmlFor="userEmail" className="">Digite o seu e-mail:</label>
            <input type="email" name="userEmail" id="userEmail" className=""/>

            <label htmlFor="userPassword" className="">Digite a sua senha:</label>

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