import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    phone: z.string().optional(),
    company: z.string().optional(),
    interest: z.string().min(1, { message: "Please select an area of interest" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
    honeypot: z.string().optional(), // Should be empty
});

export type ContactFormData = z.infer<typeof contactSchema>;
