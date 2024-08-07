"use client";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { toast, Toaster} from "sonner";

import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { Task } from "./components/task/tasks";
import { TodoList } from "./components/todo_list";
import { NewTask } from "./components/task/newTasks";

import { TaskElement, TodoListElement } from "../interfaces/interfaces";

export default function Principal(props: Readonly<TaskElement>){
  const [tasks, setTasks] = useState<TaskElement[]>(() => {
    const tasksOnStorage = localStorage.getItem("tasks");

    if(tasksOnStorage){
      return JSON.parse(tasksOnStorage);
    }

    return [];
  });
  const [todoList, setTodoList] = useState<TodoListElement[]>(() => {
    const todoListOnStorage = localStorage.getItem("todoList");

    if(todoListOnStorage){
      return JSON.parse(todoListOnStorage);
    }

    return [];
  }
  );
  const [existTask, setExistTask] = useState<boolean>(false);
  const [existTodoList, setExistTodoList] = useState<boolean>(false);

  const creatTask = async (title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date) => {
    try{
      await axios.post("/tasks/create", 
        { title,
          content,
          timeTask,
          shortRestTime,
          longRestTime
        });
        toast.success("Tarefa criada com sucesso.");
    } catch(error){
      console.error(`Erro ao criar a tarefa, erro: ${error}`);
      toast.error("Falha na criação da tarefa.");
    }

    setTasks([props, ...tasks]);
  };

  const taskTimer = (id: number) => {
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

  useEffect(() => {
    const tasksOnStorage = localStorage.getItem("tasks");
    if(!tasksOnStorage){
      const tasksOnDataBase = async () => {
        try {
          const response = await axios.get("/api/tasks");
          
          if(response.data.length > 0){
            setTasks(response.data);
            localStorage.setItem("tasks", JSON.stringify(response.data));
          };

        } catch (error) {
          console.error(`Erro na tentativa de pergar as tarefas do banco de dados, erro: 
            ${error}`);
        };

        tasksOnDataBase();
      }
    }
  });

  useEffect(() => {
    const todoListOnStorage = localStorage.getItem("todoList");

    if(!todoListOnStorage){
      const todoListOnDateBase = async () => {
        try {
          const response = await axios.get("/api/todoLists");
          if(response.data){
            setTodoList(response.data);
            localStorage.setItem("todoList", JSON.stringify(response.data))
          }
        } catch(error){
          console.error(`Erro na tentativa de pegar as listas de afazeres do banco de dados, erro: ${error}`);
        };

        todoListOnDateBase();
      }
    }
  });
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
        <div className="flex flex-col justify-center content-center items-center">
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
            
            <Toaster richColors/>
        </div>
      </body>
    </>  
  )
}