"use client";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import {Slide, ToastContainer} from "react-toastify";

import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { Task } from "./components/task/tasks";
import { NewTask } from "./components/task/newTasks";
import { TodoList } from "./components/todo_list";

import { TaskElement, TodoListElement } from "../interfaces/interfaces";

export interface NodeElement extends TaskElement{
  head: NodeElement;
  next: NodeElement;
}

export default function Principal(props: TaskElement){
  const [tasks, setTasks] = useState<TaskElement[]>([]);
  const [todoList, setTodoList] = useState<TodoListElement[]>([]);
  const [existTask, setExistTask] = useState<boolean>(false);
  const [existTodoList, setExistTodoList] = useState<boolean>(false);

  const creatTask = async (title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date) => {
    props.id = crypto.randomUUID();
    props.title = title;
    props.content = content;
    props.timeTask = timeTask;
    props.shortRestTime = shortRestTime;
    props.longRestTime = longRestTime;
    props.completed = false;

    setTasks([props, ...tasks]);
  };

  const editTask = async (id: string) => {
    
  }

  const removeTask = async (id: string) => {

  }

  const taskTimer = (id: string) => {
    const theTask = tasks.filter((task) => task.id === id)[0];
    return [theTask.timeTask, theTask.longRestTime, theTask.shortRestTime];
  }

  function isExistTask(){
    if(tasks.length !== 0){
      setExistTask(true);
    }
  };

  function isExistTodoList(){
    if(todoList.length !== 0){
      setExistTodoList(true);
    }
  }

  useEffect(isExistTask);
  useEffect(isExistTodoList);

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

            {existTask? 
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
                  /> : 
                <p>Nenhuma tarefa criada.</p>}
                
            <NewTask creatTask={creatTask}/>

            {existTodoList? 
              <TodoList/> :
              <p>Nenguma lista de tarefas criada.</p>}
            
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