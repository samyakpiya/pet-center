import { DEFAULT_PET_IMAGE } from "@/lib/constants";
import email from "next-auth/providers/email";

import { z } from "zod";

export const petIdSchema = z.string().cuid();

export const petFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }).max(100, {
      message: "Name should be less than 100 characters",
    }),
    ownerName: z
      .string()
      .trim()
      .min(1, { message: "Owner name is required" })
      .max(100, {
        message: "Owner name should be less than 100 characters",
      }),
    imageUrl: z.union([
      z.literal(""),
      z.string().url({ message: "Invalid image url" }),
    ]),
    age: z.coerce
      .number()
      .int()
      .positive()
      .max(30, { message: "Age should be less than 30" }),
    notes: z.union([z.literal(""), z.string().trim().max(1000)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petFormSchema>;

export const authSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export type TAuth = z.infer<typeof authSchema>;
