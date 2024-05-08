import { z } from "zod";
import messages from "../messages";

const updateSchema = z.object({
    name: z.string()
        .min(1, messages(1).required)
        .max(40, messages(40).maxSize),
    email: z.string()
        .min(1, messages().required)
        .max(40, messages(40).maxSize)
        .email(messages().email),
    balance: z.number(),
    role: z.string()
})

export default updateSchema