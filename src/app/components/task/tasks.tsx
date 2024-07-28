"use client";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import "tailwindcss/tailwind.css";
import { TaskElement } from "@/src/interfaces/interfaces";

export function Task(props: Readonly<TaskElement>){
    const [newTimeTask, setNewTimeTask] = useState("");
    const [newTitleTask, setNewTitleTask] = useState("");
    const [newContentTask, setNewContentTask] = useState("");
    const [newRestLongTime, setNewRestLongTime] = useState("");
    const [newRestShortTime, setNewRestShortTime] = useState("");

    let timeTask: string | undefined = undefined;
    let longRestTime: string | undefined = undefined;
    let shortRestTime: string | undefined = undefined;

    if(props.timeTask && props.longRestTime && props.longRestTime){
        timeTask = props.timeTask.toLocaleDateString("pt-BR");
        longRestTime = props.longRestTime.toLocaleDateString("pt-BR");
        shortRestTime = props.shortRestTime.toLocaleDateString("pt-BR");
    };

    function handleNewTitle(text: ChangeEvent<HTMLInputElement>){
        const title = text.target.value;

        if(title !== ""){
            setNewTitleTask(title);
        } else{
            setNewTimeTask(props.title);
        }
    }

    function handleNewTaskContent(text: ChangeEvent<HTMLTextAreaElement>){
        const content = text.target.value;

        if(content !== ""){
            setNewContentTask(content);
        } else{
            setNewContentTask(props.content);
        }
    }

    function handleNewTimeTask(text: ChangeEvent<HTMLInputElement>){
        const newTimeTaskContent = text.target.value;

        if(newTimeTaskContent !== ""){
            setNewTimeTask(newTimeTaskContent);
        } else if(timeTask !== undefined){
            setNewTimeTask(timeTask);
        }
    }

    function handleNewShortRestTime(text: ChangeEvent<HTMLInputElement>){
        const newShortRestTimeContent = text.target.value;

        if(newShortRestTimeContent !== ""){
            setNewRestShortTime(newShortRestTimeContent);
        } else if(shortRestTime !== undefined){
            setNewRestShortTime(shortRestTime);
        }
    }

    function handleNewLongRestTime(text: ChangeEvent<HTMLInputElement>){
        const newLongRestTimeContent = text.target.value;

        if(newLongRestTimeContent !== ""){
            setNewRestLongTime(newLongRestTimeContent);
        } else if(longRestTime !== undefined){
            setNewRestLongTime(longRestTime);
        }
    }

    async function updateTask(){
        await axios.post("api/tasks/update", {
            id: props.id,
            title: newTitleTask,
            content: newContentTask,
            timeTask: newTimeTask,
            longRestTime: newRestLongTime,
            shortRestTime: newRestShortTime
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
                        <p className="">Tempo da atividade: </p>
                        <p className="">{timeTask}</p>
                    </div>

                    <div className="">
                        <p className="">Tempo de descanso curto:</p>
                        <p className="">{shortRestTime}</p>
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
                            <label htmlFor="taskTitle" className="">Titulo:</label>
                            <input type="text" 
                                id="taskTitle" 
                                className="" 
                                value={props.title}
                                onChange={handleNewTitle}/>
                            
                            <label htmlFor="taskContent" className="">Tarefa:</label>
                            <textarea name="taskContent" 
                                id="taskContent" 
                                className="" 
                                value={props.content}
                                onChange={handleNewTaskContent}/>
                            
                            <div className="">
                                <label htmlFor="timeTask" className="">Tempo de duração: </label>
                                <input type="text" 
                                    name="timeTask" 
                                    id="timeTask" 
                                    className="" 
                                    value={timeTask}
                                    onChange={handleNewTimeTask}/>
                                
                                <label htmlFor="shortRestTime" className="">Tempo de descanso curto: </label>
                                <input type="text" 
                                    name="shortRestTime"
                                    id="shortRestTime"
                                    className=""
                                    value={shortRestTime}
                                    onChange={handleNewShortRestTime}/>
                                
                                <label htmlFor="longRestTime" className="">Tempo de descanso longo: </label>
                                <input type="text" 
                                    name="longRestTime" 
                                    id="longRestTime" 
                                    className=""
                                    value={longRestTime}
                                    onChange={handleNewLongRestTime}/>
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