"use client";
import { useState, useEffect } from "react";
import { Clock } from "./components/clock";
import { Header } from "./components/header";
import { DinamicTab } from "./components/dinamicTab";
import { Task } from "./components/tasks";
import { TodoList } from "./components/todo_list";
import "tailwindcss/tailwind.css";

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