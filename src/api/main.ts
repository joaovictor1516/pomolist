import type { NextApiRequest, NextApiResponse } from "next";
import { TodoListElement } from "../interfaces/interfaces";

export class Task{
    name: string;
    content: string;

    constructor(name: string, content: string){
        this.name = name;
        this.content = content;
    }

    creatTask(){
        console.log(this.name, this.content)
    }
};

export class TodoList extends Task{
    list: string[];

    constructor(list: string[], name: string, content: string){
        super(name, content);
        this.list = list;
    }

    addTask(){
        this.list.push();
    }
}