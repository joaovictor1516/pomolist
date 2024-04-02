import type { NextApiRequest, NextApiResponse } from "next";
import { TodoListElement, TaskElement } from "../interfaces/interfaces";

export class Task{
    id: string;
    title: string;
    content: string;
    completed: boolean;
    todoListMember: boolean;
    todoListPropriets: TodoListElement[];
    

    constructor(id: string, title: string, content: string, completed: boolean, todoListMember: boolean, todoListPropriets: TodoListElement[]){
        this.id = id;
        this.title = title;
        this.content = content;
        this.completed = completed;
        this.todoListMember = todoListMember;
        this.todoListPropriets = todoListPropriets;
    }

    creatTask(): TaskElement{
        const task: TaskElement = {
            id: this.id,
            title: this.title,
            content: this.content,
            completed: this.completed,
            todoListMember: this.todoListMember,
            todoListPropriets: this.todoListPropriets
        };

        return task;
    };
};

export class TodoList extends Task{
    list: TodoListElement[];
    idTodoList: string;

    constructor(idTodoList: string, list: TodoListElement[], id: string, title: string, content: string, completed: boolean, todoListMember: boolean, todoListPropriets: TodoListElement[]){
        super(id, title, content, completed, todoListMember, todoListPropriets);
        this.list = list;
        this.idTodoList = idTodoList;
        const task = new Task(id, title, content, completed, todoListMember, todoListPropriets);
        this.addTask(task);
    }

    addTask(task: TaskElement){
        this.list.push(task);
    }
}