"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";
import { TaskElement } from "@/src/interfaces/interfaces";

export function Task(){
    const [task, setTask] = useState<TaskElement[]>([]);
    const [textTask, setTextTask] = useState("");

    const focusTime = () => {

    };

    function handleText(value: ChangeEvent<HTMLTextAreaElement>){
        const text = value.target.value;
        setTextTask(text);
        if(text !== ""){
            
        }
    };

    useEffect(() => {
        console.log(textTask);
    }, [textTask]);

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="">
                    <div className="">
                        teste
                    </div>
                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className=""/>

                <Dialog.Content className="">

                    <Dialog.Close className="">
                        <X/>
                    </Dialog.Close>

                    <div className="">
                        <form action="" className="">
                            <p>Title:</p>
                            <input type="text" id="taskTitle" required className=""/>
                            <textarea name="taskContent" id="taskContent" required className="" onChange={handleText}/>

                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}