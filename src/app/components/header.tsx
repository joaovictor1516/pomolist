"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { LogIn, UserCircle2, Settings } from "lucide-react";

export function Header(){
    const router = useRouter();

    function handleUserSignIn(){
        router.push("/login");
    }

    function isUserLogin(){
        router.push("/register");
    }

    return(
        <div className="">
            <button type="button" className="" onClick={handleUserSignIn}>
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