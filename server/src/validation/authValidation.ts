import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({ message: "Name is required" })
      .min(3, { message: "Name should be at least 3 characters long." }),
    email: z.string({ message: "Email is required" }).email({
      message: "Email should be a valid email address.",
    }),
    password: z
      .string({ message: "Password is required" })
      .min(6, { message: "Password should be at least 6 characters long." }),
    confirm_password: z
      .string({ message: "Password is required" })
      .min(6, { message: "Password should be at least 6 characters long." }),
  })
  .refine((data) => {
    data.password === data.confirm_password,
      {
        message: "Confirm Password does not match",
        path: ["confirm_password"],
      };
  });
