import { z } from "zod";

export const taskSchema = z.object({
    id: z.number(),
    title: z.string().min(1, "Digite o titulo da tarefa."),
    content: z.string().min(5, "Digite o conteudo da tarefa."),
    timeTask: z.date(),
    longRestTime: z.date(),
    shortRestTime: z.date(),
    completed: z.boolean()
});

export type TaskTypeSchema = z.infer<typeof taskSchema>;

export const todoListSchema = z.object({
    id: z.number(),
    completed: z.boolean(),
    tasks: z.array(taskSchema)
});

export type TodoListTypeSchema = z.infer<typeof todoListSchema>;

export const userSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    password: z.string(),
    taskMaked: z.boolean(),
    tasks: z.array(taskSchema).nullable(),
    todoLists: z.array(todoListSchema).nullable()
});

export type UserTypeSchema = z.infer<typeof userSchema>;