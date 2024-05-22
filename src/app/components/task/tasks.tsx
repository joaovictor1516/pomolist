"use client";
import { useState } from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";
import { TaskElement } from "@/src/interfaces/interfaces";

export function Task(props: TaskElement){
    const [task, setTask] = useState<TaskElement[]>([]);

    const focusTime = (time: Date) => {
        const taskTime = new Date();
        taskTime.setMinutes(0);
        if(time.getMinutes() === taskTime.getMinutes()){}
    };

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="">
                    <div className="">
                        <span className="">{props.title}</span>
                        <p className="">{props.content}</p>                        
                    </div>
                    <div className="">
                        <p className="">Tempo da atividade:</p>
                        <p>{props.timeTask}</p>
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
                            <textarea name="taskContent" id="taskContent" required className=""/>
                            <input type="button" value="Editar"/>
                            <input type="button" value="Deletar" />
                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}