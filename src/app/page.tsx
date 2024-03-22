"use client";
import { useState, useEffect } from "react";
import { Clock } from "./components/clock";
import { Header } from "./components/header";
import "tailwindcss/tailwind.css";

export function Principal(){
  return(
      <div className="">
          <Header/>
          <Clock/>
      </div>
  )
}