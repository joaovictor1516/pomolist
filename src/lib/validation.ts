import { z } from "zod";

export const taskSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1, "Digite o titulo da tarefa."),
    content: z.string().min(5, "Digite o conteudo da tarefa."),
    timeTask: z.date(),
    longTimeTask: z.date(),
    shortTimeTask: z.date(),
    completed: z.boolean()
});

export const userSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    password: z.string(),
    
});