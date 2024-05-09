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

export interface NodeElement extends TaskElement{
  head: NodeElement;
  next: NodeElement;
}

export default function Principal(){

  class Node{
    data: NodeElement;
    next: Node | null;
    constructor(data: NodeElement){
      this.data = data;
      this.next = null
    };
  };

  class LinkedList{
    head: Node | null;
    constructor(){
      this.head = null;
    };

    increment(data: NodeElement){
      const newNode = new Node(data);

      if(!this.head){
        this.head = newNode;
      } else{
        let current = this.head;
        while(current.next){
          current = current.next;
        };
        current.next = newNode;
      };
    }
  }

  const [taskGroup, setTaskGroup] = useState(new LinkedList());
  const [task, setTask] = useState();

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