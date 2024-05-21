export interface NewTaskElement{
    creatTask: (title: string, content: string, time: Date) => void;
}

export interface TaskElement extends NewTaskElement{
    id: string; 
    time: Date;
    title: string;
    content: string;
    completed: boolean;
};

export interface NewTodoListEment{
    tasks: TaskElement[];
    creatTodoList: (task: TaskElement) => void;
}

export interface TodoListElement{
    id: string;
    completed: boolean;
};

export interface DataUser{
    id: string;
    userName: string;
    todoListMaked: boolean; //checa se o usuario criou alguma todo-list;
};