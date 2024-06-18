"use client";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import {Slide, ToastContainer} from "react-toastify";

import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { Task } from "./components/task/tasks";
import { NewTask } from "./components/task/newTasks";
import { TodoList } from "./components/todo_list";

import { TaskElement } from "../interfaces/interfaces";

export interface NodeElement extends TaskElement{
  head: NodeElement;
  next: NodeElement;
}

export default function Principal(props: TaskElement){
  const [tasks, setTasks] = useState<TaskElement[]>([]);

  function creatTask(title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date){
    props.id = crypto.randomUUID();
    props.title = title;
    props.content = content;
    props.timeTask = timeTask;
    props.shortRestTime = shortRestTime;
    props.longRestTime = longRestTime;
    props.completed = false;

    setTasks([props, ...tasks]);
  };

  function editTask(id: string){

  }

  function removeTask(id: string){

  }

  function taskTimer(id: string){
    const theTask = tasks.filter((task) => task.id === id)[0];
    return [theTask.timeTask, theTask.longRestTime, theTask.shortRestTime];
  }

  return(
    <>
      <head>
        <title>
          {props.title}
        </title>
      </head>

      <body>
        <div className="">
            <Header/>
            <Clock taskTimer={taskTimer}/>
            <Task key={props.id}
                  id={props.id}
                  title={props.title}
                  content={props.content}
                  timeTask={props.timeTask}
                  shortRestTime={props.shortRestTime}
                  longRestTime={props.longRestTime}
                  completed={props.completed}
                  editTask={editTask}
                  removeTask={removeTask}
                  />
            <NewTask creatTask={creatTask}/>
            <TodoList/>
            <ToastContainer
              hideProgressBar={true}
              position="top-right"
              transition={Slide}
              autoClose={500}
              closeOnClick
              pauseOnHover
            />
        </div>
      </body>
    </>  
  )
}