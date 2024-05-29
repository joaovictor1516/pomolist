"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { TaskElement, TaskClock } from "@/src/interfaces/interfaces";

export function Clock(){
    const [tasks, setTasks] = useState<TaskElement[]>([]);
    const [worksTime, setWorksTime] = useState<Date>();

    function takeTaskTime(id: string){
        const job: TaskElement[] = tasks.filter((task) => task.id === id);
        setWorksTime(job[0].timeTask);

    }

    return(
        <div className="">

        </div>
    )
}