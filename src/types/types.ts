import { z } from "zod";

export const DrawFormSchema = z.object({
  quantity: z.number().min(1).max(1000),
  from: z.number().min(1),
  to: z.number().max(9000)
}).refine(data => data.from < data.to, {
  message: "O número inicial deve ser menor que o número final",
  path: ["from"]
});

export type DrawFormData = z.infer<typeof DrawFormSchema>;