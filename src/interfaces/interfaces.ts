export interface NewTaskElement{
    creatTask: (title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date) => void;
}

export interface TaskElement{
    id: number;
    title: string; 
    timeTask: Date;
    content: string;
    completed: boolean;
    longRestTime: Date;
    shortRestTime: Date;
};

export interface TaskClock{
    taskTimer: (id: number) => Date[];
};

export interface NewTodoListElement{
    tasks: TaskElement[];
    creatTodoList: (task: TaskElement) => void;
}

export interface TodoListElement{
    id: number;
    completed: boolean;
};

export interface UserElement{
    id: string;
    userName: string;
    userPassword: string;
    tasks: TaskElement[] | null; //lista de tasks;
    todoListMaked: boolean; //checa se o usuario criou alguma todo-list;
    todoLists: TodoListElement[] | null //lista de todoLists, caso tenha;
};