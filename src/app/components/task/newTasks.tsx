"use client";
import { ChangeEvent, useState, useEffect} from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";
import { TaskElement } from "@/src/interfaces/interfaces";

export default function NewTask(){
    const [textTask, setTextTask] = useState("");
    const [titleTask, setTitleTask] = useState("");

    function handleText(value: ChangeEvent<HTMLTextAreaElement>){
        const text = value.target.value;

        if(text !== ""){
            setTextTask(text);
        }
    };

    function handleTitle(value: ChangeEvent<HTMLInputElement>){
        const title = value.target.value;

        if(title !== ""){
            setTitleTask(title);
        }
    };

    function handleCreatTask(){

    }

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="">
                    <div className="text-teal-400">
                        Criar uma nova task.
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
                            <input type="text" id="taskTitle" required className="" onChange={handleTitle}/>
                            <textarea name="taskContent" id="taskContent" required className="" onChange={handleText}/>

                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}