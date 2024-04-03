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

export class TodoList{
    TodoLists: TodoListElement[];
    idTodoList: string;

    constructor(idTodoList: string, list: TodoListElement[]){
        this.TodoLists = list;
        this.idTodoList = idTodoList;
    };

    addTask(idTodoList: string, task: TaskElement){
        const todoListSelected = this.TodoLists.filter((todoList: TodoListElement) => {
            todoList.id === idTodoList;
        });
    };

    removeTask(idTodoList: string, idTask: string){
        const todoListSelected = this.TodoLists.filter((todoList: TodoListElement) => {
            todoList.id === idTodoList;
        });


    };

    changeTaskContent(idTodoList: string, idTask: string, content: string){
        
    }   
}