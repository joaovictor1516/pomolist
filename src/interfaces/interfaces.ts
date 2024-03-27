export interface Task{
    id: string;
    content: string;
    complet: boolean;
    todoListMember: boolean;
    todoListPropriets: TodoListElement | undefined; //caso seja membro de uma todo-list recebera as propriedades dos elementos de uma todo-list, como por exemplo a informacao de quando esta programado para esta task ser colocada no clock do pomodoro. 
};

export interface TodoListElement{
    id: string;
    completed: boolean;
};

export interface DataUser{
    id: string;
    userName: string;
    todoListMaked: boolean; //checa se o usuario criou alguma todo-list;
};