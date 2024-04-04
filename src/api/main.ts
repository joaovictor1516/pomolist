import type { NextApiRequest, NextApiResponse } from "next";
import { TodoListElement, TaskElement } from "../interfaces/interfaces";

export class Task{
    idTask: string;
    title: string;
    content: string;
    completed: boolean;
    todoListMember: boolean;
    todoListPropriets: TodoListElement[];
    

    constructor(idTask: string, title: string, content: string, completed: boolean, todoListMember: boolean, todoListPropriets: TodoListElement[]){
        this.idTask = idTask;
        this.title = title;
        this.content = content;
        this.completed = completed;
        this.todoListMember = todoListMember;
        this.todoListPropriets = todoListPropriets;
    }

    creatTask(): TaskElement{
        const task: TaskElement = {
            id: this.idTask,
            title: this.title,
            content: this.content,
            completed: this.completed,
            todoListMember: this.todoListMember,
            todoListPropriets: this.todoListPropriets
        };

        return task;
    };

    deleteTask(idTask: string){

    };

    editTask(idTask: string){

    }
};

export class TodoList{
    TodoLists: TodoListElement[];
    idTodoList: string;

    constructor(idTodoList: string, list: TodoListElement[]){
        this.TodoLists = list;
        this.idTodoList = idTodoList;
    };

    addTodoListTask(idTodoList: string, task: TaskElement){
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find((todoList: TodoListElement) => {
            todoList.id === idTodoList;
        });

        if(todoListSelected){
            todoListSelected.tasks.push(task);
        } else{
            console.error("Todo-list don`t exist.");
            return;
        };
    };

    removeTodoListTask(idTodoList: string, idTask: string){
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find((todoList: TodoListElement) => {
            todoList.id === idTodoList;
        });

        if(todoListSelected){
            const taskSelected: undefined | TaskElement = todoListSelected.tasks.find((task: TaskElement) => {
                task.id === idTask;
            });

            if(taskSelected){
                const taskPosition = todoListSelected.tasks.indexOf(taskSelected);
                todoListSelected.tasks.splice(taskPosition, 1);
            } else{
                console.error("Task don't exist");
                return;
            }
        } else{
            console.error("Todo-list don't exist");
            return;
        };
    };

    changeTodoListTaskContent(idTodoList: string, idTask: string, content: string){
        
    };

    showTaskContent(idTodoList: string, idTask: string){

    };
}