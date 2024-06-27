"use client";
import axios from "axios";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import * as Dialog from "@radix-ui/react-dialog";
import { X, UserCircle2, Mail, Lock } from "lucide-react";
import { Slide, toast } from "react-toastify";

import { UserElement } from "@/src/interfaces/interfaces";

export function User(props: UserElement){
    async function login(email: string, password: string){
        
    }

    return(
      <button type="button">
        Fazer o login
      </button>
    )
}