import { z } from "zod";

export const taskSchema = z.object({
    id: z.number(),
    title: z.string().min(1, "Digite o titulo da tarefa."),
    content: z.string().min(5, "Digite o conteudo da tarefa."),
    timeTask: z.date(),
    longTimeTask: z.date(),
    shortTimeTask: z.date(),
    completed: z.boolean()
});

export const todoListSchema = z.object({
    id: z.number(),
    completed: z.boolean(),
    tasks: z.array(taskSchema)
});

export const userSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    password: z.string(),
    taskMaked: z.boolean(),
    tasks: z.array(taskSchema).nullable(),
    todoLists: z.array(todoListSchema).nullable()
});