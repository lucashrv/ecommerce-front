import { z } from "zod";
import messages from "../messages";

const signUpSchema = z.object({
    name: z.string()
        .min(1, messages(1).required)
        .max(40, messages(40).maxSize),
    email: z.string()
        .min(1, messages().required)
        .max(40, messages(40).maxSize)
        .email(messages().email),
    password: z.string()
        .min(8, messages(8).minSize)
        .max(30, messages(30).maxSize),
    confirmPassword: z.string()
        .min(8, messages(8).minSize)
        .max(30, messages(30).maxSize),
})

export default signUpSchema
