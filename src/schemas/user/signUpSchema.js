import { z } from "zod";

const message = {
    required: 'O campo é obrigatório',
    email: 'Formato de email inválido',
    size: 'Deve conter pelo menos 8 caracteres'
}

const loginSchema = z.object({
    email: z.string()
        .min(1, message.required)
        .max(50)
        .email(message.email),
    password: z.string()
        .min(8, message.size),
})

export default loginSchema

