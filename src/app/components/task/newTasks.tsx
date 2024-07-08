"use client";
import { X } from "lucide-react";
import "tailwindcss/tailwind.css";
import * as Dialog from "@radix-ui/react-dialog";
import { ChangeEvent, FormEvent, useState} from "react";
import { NewTaskElement } from "@/src/interfaces/interfaces";

export function NewTask(props: Readonly<NewTaskElement>){
    const [textTask, setTextTask] = useState("");
    const [titleTask, setTitleTask] = useState("");
    const [timeTask, setTimeTask] = useState<Date | null>(null);
    const [shortRestTime, setShortRestTime] = useState<Date | null>(null);
    const [longRestTime, setLongRestTime] = useState<Date | null>(null);

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

    function handleTimeTask(value: ChangeEvent<HTMLInputElement>, setTime: (data: Date | null) => void){
        const timeString = value.target.value;

        if(timeString !== ""){
            const [minutes, seconds] = timeString.split(":").map(Number);
            const time = new Date()
            time.setMinutes(minutes, seconds);
            setTime(time);
        } else{
            setTime(null);
        }
    }

    function handleCreatTask(task: FormEvent){
        task.preventDefault();

        if(titleTask && textTask && timeTask && shortRestTime && longRestTime){
            props.creatTask(titleTask, textTask, timeTask, shortRestTime, longRestTime);
        } 
    }

    return(
        <Dialog.Root>
            <Dialog.Trigger className="">
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
                        <form 
                            className="" 
                            onSubmit={handleCreatTask}>
                            
                            <p className="">Titulo:</p>
                            
                            <input type="text" 
                                   id="taskTitle" 
                                   required
                                   className=""
                                   onChange={handleTitle}/>

                            <p className="">Tarefa:</p>
                            
                            <textarea name="taskContent" id="taskContent" required className="" onChange={handleText}/>
                            
                            <p className="">Tempo de duração:</p>
                            
                            <input type="text" name="taskTime" id="taskTime" className="" onChange={(event) => handleTimeTask(event, setTimeTask)}/>
                            
                            <p className="">Tempo curto de descanso:</p>
                            
                            <input type="text" name="shortRestTime" id="shortRestTime" className="" value={"5:00"} onChange={(event) => handleTimeTask(event, setShortRestTime)}/>
                            
                            <p className="">Tempo longo de descanso:</p>
                            
                            <input type="text" name="longRestTime" id="longRestTime" className="" value={"10:00"} onChange={(event) => handleTimeTask(event, setLongRestTime)}/>
                            
                            <input type="submit" value="Criar task"/>
                        </form>
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}