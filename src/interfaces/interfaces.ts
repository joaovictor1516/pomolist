export interface NewTaskElement{
    creatTask: (title: string, content: string, timeTask: Date, shortRestTime: Date, longRestTime: Date) => void;
}

export interface TaskElement{
    task: {
        id: string;
        title: string; 
        timeTask: Date;
        content: string;
        completed: boolean;
        longRestTime: Date;
        shortRestTime: Date;
    };
    editTask: (id: string) => void;
    removeTask: (id: string) => void;
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