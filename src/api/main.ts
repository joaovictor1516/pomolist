import type { NextApiRequest, NextApiResponse } from "next";
import { NewTodoListElement, TodoListElement, TaskElement } from "../interfaces/interfaces";
import Server from "next/dist/server/base-server";

export class TaskApi{
    idTask: string;
    time: Date;
    title: string;
    content: string;
    completed: boolean;
    longRestTime: Date;
    shortRestTime: Date;
    task: TaskElement;
    
    constructor(
        idTask: string, 
        time: Date, 
        title: string, 
        content: string, 
        completed: boolean, 
        longRestTime: Date, 
        shortRestTime: Date
    ){
        this.idTask = idTask;
        this.time = time;
        this.title = title;
        this.content = content;
        this.completed = completed;
        this.longRestTime = longRestTime;
        this.shortRestTime = shortRestTime;
        this.task = this.creatTask();
    }

    creatTask(): TaskElement{
        const task: TaskElement = {
            id: this.idTask,
            timeTask: this.time,
            title: this.title,
            content: this.content,
            completed: this.completed,
            longRestTime: this.longRestTime,
            shortRestTime: this.shortRestTime
        };

        return task;
    };

    deleteTask(idTask: string){
        
    };

    editTaskContent(idTask: string, content: string){

    }
};