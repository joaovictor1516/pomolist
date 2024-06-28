"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { UserLogin } from "./user/userLogin";
import { UserSignIn } from "./user/userSignIn";
import { LogIn, User2, Settings } from "lucide-react";

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
            
        </div>
    )
}