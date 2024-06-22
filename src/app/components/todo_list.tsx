"use client";
import { X } from "lucide-react";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Task } from "./task/tasks";

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