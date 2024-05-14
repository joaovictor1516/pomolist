"use client";
import { ChangeEvent, FormEvent, useState, useEffect} from "react";
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

    function handleCreatTask(task: FormEvent<HTMLFormElement>){

    }

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="">
                    <div className="">
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
                        <form action="" className="" onSubmit={handleCreatTask}>
                            <p>Title:</p>
                            <input type="text" id="taskTitle" required className="" onChange={handleTitle}/>
                            <textarea name="taskContent" id="taskContent" required className="" onChange={handleText}/>
                            <input type="submit" value="Criar task"/>
                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}