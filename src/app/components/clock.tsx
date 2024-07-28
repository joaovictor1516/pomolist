"use client";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { TaskElement, TaskClock } from "@/src/interfaces/interfaces";

export function Clock(props: TaskClock){
    const [tasks, setTasks] = useState<TaskElement[]>([]);
    const [Time, setTime] = useState<Date>();

    function takeTaskTime(id: number){
        const job: TaskElement[] = tasks.filter((task) => task.id === id);
        setTime(job[0].timeTask);

    }

    function takeTaskRestTime(id: number){
        const restTimeJob: TaskElement[] = tasks.filter((task) => task.id === id);
        setTime(restTimeJob[0].shortRestTime);
    }

    useEffect(() => {
        const time = props.taskTimer
        console.log(time);
    }, [props.taskTimer]);

    return(
        <div className="border-solid border-black w-10 h-10">
            <div className="">
                <p className="">
                    {Time?.toLocaleDateString()}
                </p>
            </div>
            <div className="">
                <button type="button">Pausar</button>
                <button type="button">Terminar</button>
            </div>
        </div>
    )
}