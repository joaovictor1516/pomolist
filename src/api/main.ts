import type { NextApiRequest, NextApiResponse } from "next";
import { TodoListElement, TaskElement } from "../interfaces/interfaces";

export class TaskApi{
    idTask: string;
    time: Date;
    title: string;
    content: string;
    completed: boolean;
    todoListMember: boolean;
    todoListPropriets: TodoListElement[];
    

    constructor(idTask: string, time: Date, title: string, content: string, completed: boolean, todoListMember: boolean, todoListPropriets: TodoListElement[]){
        this.idTask = idTask;
        this.time = time;
        this.title = title;
        this.content = content;
        this.completed = completed;
        this.todoListMember = todoListMember;
        this.todoListPropriets = todoListPropriets;
    }

    creatTask(): TaskElement{
        const task: TaskElement = {
            id: this.idTask,
            time: this.time,
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

export class TodoListApi{
    TodoLists: TodoListElement[];
    idTodoList: string;

    constructor(idTodoList: string, list: TodoListElement[]){
        this.TodoLists = list;
        this.idTodoList = idTodoList;
    };

    addTodoListTask(idTodoList: string, task: TaskElement): boolean{
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find(
            (todoList: TodoListElement) => todoList.id === idTodoList
        );

        if(todoListSelected){
            todoListSelected.tasks.push(task);
            return true;
        } else{
            console.error("Todo-list don`t exist.");
            return false;
        };
    };

    removeTodoListTask(idTodoList: string, idTask: string): boolean{
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find(
            (todoList: TodoListElement) => todoList.id === idTodoList
        );

        if(todoListSelected){
            const taskSelected: undefined | TaskElement = todoListSelected.tasks.find(
                (task: TaskElement) => task.id === idTask
            );

            if(taskSelected){
                const taskPosition: number = todoListSelected.tasks.indexOf(taskSelected);
                todoListSelected.tasks.splice(taskPosition, 1);
                return true;
            } else{
                console.error("Task don't exist");
                return false;
            }
        } else{
            console.error("Todo-list don't exist");
            return false;
        };
    };

    changeTodoListTaskContent(idTodoList: string, idTask: string, content: string){
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find(
            (todoList: TodoListElement) => todoList.id === idTodoList
        );
        if(todoListSelected){
            const taskSelected = todoListSelected.tasks.find(
                (task: TaskElement) => task.id === idTask
            );

            if(taskSelected){
                taskSelected.content = content;
                return true;
            } else{
                console.error("This task don't exist");
                return false;
            }

        } else{
            console.error("This todo-list don't exist");
            return false;
        }
    };

    showTodoListTaskContent(idTodoList: string, idTask: string){
        const todoListSelected: undefined | TodoListElement = this.TodoLists.find(
            (todoList: TodoListElement) => todoList.id === idTodoList
        );

        if(todoListSelected){
            const taskSelected = todoListSelected.tasks.find(
                (task: TaskElement) => task.id === idTask
            );

            if(taskSelected){
                return taskSelected.content;
            } else{
                console.error("This task don't exist");
                return;
            };

        } else{
            console.error("This todo-list don`t exist");
            return;
        };
    };
};