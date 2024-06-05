"use client";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { TaskElement, TaskClock } from "@/src/interfaces/interfaces";

export function Clock(props: TaskClock){
    const [tasks, setTasks] = useState<TaskElement[]>([]);
    const [worksTime, setWorksTime] = useState<Date>();

    function takeTaskTime(id: string){
        const job: TaskElement[] = tasks.filter((task) => task.id === id);
        setWorksTime(job[0].timeTask);

    }  

    return(
        <>
            <div className="">
                <p className="">
                    {worksTime?.toLocaleDateString()}
                </p>
            </div>
            <div className="">
                <button type="button">Pausar</button>
                <button type="button">Terminar</button>
            </div>
        </>
    )
}