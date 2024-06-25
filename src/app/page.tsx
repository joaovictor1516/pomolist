"use client";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import {Slide, ToastContainer} from "react-toastify";

import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { Task } from "./components/task/tasks";
import { TodoList } from "./components/todo_list";
import { NewTask } from "./components/task/newTasks";

import { TaskElement, TodoListElement } from "../interfaces/interfaces";

export default function Principal(props: TaskElement){
  const [tasks, setTasks] = useState<TaskElement[]>([]);
  const [todoList, setTodoList] = useState<TodoListElement[]>([]);
  const [existTask, setExistTask] = useState<boolean>(false);
  const [existTodoList, setExistTodoList] = useState<boolean>(false);

  const creatTask = async (title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date) => {
    try{
      axios.post("/task/creat", 
        { title,
          content,
          timeTask,
          shortRestTime,
          longRestTime
        });
    } catch(error){
      console.error(`Erro ao criar a tarefa, erro: ${error}`);
    }

    setTasks([props, ...tasks]);
  };

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
        <div className="flex justify-center content-center items-center flex-col">
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