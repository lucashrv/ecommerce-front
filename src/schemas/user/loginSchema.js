import { z } from "zod";
import messages from "../messages";

const loginSchema = z.object({
    email: z.string()
        .min(1, messages().required)
        .max(50)
        .email(messages().email),
    password: z.string()
        .min(1, messages(8).minSize),
})

export default loginSchema
