import { z } from "zod";

const message = {
    required: 'O campo é obrigatório',
    email: 'Formato de email inválido'
}

const testSchema = z.object({
    email: z.string()
        .min(1, message.required)
        .email(message.email),
    age: z.coerce
        .number()
        .int()
        .min(1, message.required),
    search: z.string()
})

export default testSchema

/*

min(1) - igual a required
optional
refine - passa uma função que captura o campo e retorna ele com uma alteração setada
superRefine - captura todos os campos e executa uma função

*/