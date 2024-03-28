"use client";
import { useEffect, useState } from "react";
import { Task } from "./tasks";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";

export function TodoList(){
    return(
        <Dialog.Root>
            <Dialog.Trigger className="">
                <div className="">

                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className=""/>

                <Dialog.Content className="">
                    
                    <Dialog.Close className="">
                        <X className=""/>
                    </Dialog.Close>

                    <div className="">
                        
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}