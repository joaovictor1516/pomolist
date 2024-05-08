"use client";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { DinamicTab } from "./components/dinamicTab";
import { Task } from "./components/tasks";
import { TodoList } from "./components/todo_list";
import {  TaskApi, TodoListApi } from "../api/main";
import { TaskElement } from "../interfaces/interfaces";

export default function Principal(){
  const [taskGroup, setTaskGroup] = useState();

  class Node<TaskElement>{
    data: TaskElement;
    next: TaskElement | null;
    constructor(data: TaskElement){
      this.data = data;
      this.next = null
    };
  };

  class LinkedList{
    head: TaskElement | null;
    constructor(){
      this.head = null;
    };

    increment(data: TaskElement){
      const newNode = new Node(data);

      if(!this.head){
        this.head = newNode;
      } else{
        let current = this.head;
        while(current.next){
          current = current.nextç
        };
        current.next = newNode;
      };
    }
  }

  return(
      <div className="">
          <DinamicTab/>
          <Header/>
          <Clock/>
          <Task/>
          <TodoList/>
      </div>
  )
}