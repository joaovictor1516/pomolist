"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";
import { TaskElement } from "@/src/interfaces/interfaces";

export function Task(props: TaskElement){

    const focusTime = (time: Date) => {
        const taskTime = new Date();
        taskTime.setMinutes(0);
        if(time.getMinutes() === taskTime.getMinutes()){}
    };
    
    let timeStack: string | undefined = undefined;
    let longRestTime: string | undefined = undefined;
    let shortRestTime: string | undefined = undefined;

    if(props.timeTask && props.longRestTime && props.longRestTime){
        timeStack = props.timeTask.toLocaleDateString("pt-BR");
        longRestTime = props.longRestTime.toLocaleDateString("pt-BR");
        shortRestTime = props.shortRestTime.toLocaleDateString("pt-BR");
    };

    async function updateTask(){
        await axios.post("api/tasks/update", {
            id: props.id,
            title: props.title,
            content: props.content,
            timeTask: props.timeTask,
            longRestTime: props.longRestTime,
            shortRestTime: props.shortRestTime
        });
    };

    async function removeTask(){
        await axios.post("api/tasks/delete", {
            id: props.id
        });
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
                        <p>{timeStack}</p>
                    </div>
                    <div className="">
                        <p className="">Tempo de descanso curto:</p>
                        <p>{shortRestTime}</p>
                    </div>
                    <div className="">
                        <p className="">Tempo de descanso longo:</p>
                        <p className="">{longRestTime}</p>
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
                            <span className="">Titulo:</span>
                            <input type="text" id="taskTitle" className="" value={props.title}/>
                            <span className="">Tarefa:</span>
                            <textarea name="taskContent" id="taskContent" className="" value={props.content}/>
                            <div className="">
                                <span className="">Tempo de duração:</span>
                                <input type="time" name="timeStack" id="timeStack" className=""/>
                                <span className="">Tempo de descanso curto:</span>
                                <input type="time" name="shortRestTime" id="shortRestTime" className=""/>
                                <span className="">Tempo de descanso longo:</span>
                                <input type="time" name="longRestTime" id="longRestTime" className=""/>
                            </div>
                            <div className="">
                                <input type="button" value="Editar" onClick={() => updateTask()}/>
                                <input type="button" value="Deletar" onClick={() => removeTask()}/>
                            </div>
                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}