"use client";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { DinamicTab } from "./components/dinamicTab";
import { Task } from "./components/tasks";
import { TodoList } from "./components/todo_list";

export function Principal(){
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