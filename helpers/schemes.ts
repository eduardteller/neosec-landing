import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nimi on kohustuslik")
      .max(100, "Nimi on liiga pikk"),
    org: z.string().optional(),
    "msg-type": z.enum(["none", "email", "telegram", "whatsapp"], {
      invalid_type_error: "Palun valige kontakteerumise viis",
      required_error: "Palun valige kontakteerumise viis",
    }),
    "telegram-account": z.string().optional(),
    "whatsapp-account": z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, "Sisestage korrektne telefoninumber")
      .optional()
      .or(z.literal("")),
    "email-account": z
      .string()
      .email("Sisestage korrektne email")
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .min(1, "Sõnum on kohustuslik")
      .max(5000, "Sõnum on liiga pikk"),
  })
  .refine(
    (data) => {
      if (data["msg-type"] === "none") return false;
      return true;
    },
    {
      message: "Palun valige kontakteerumise viis",
      path: ["msg-type"],
    },
  )
  .refine(
    (data) => {
      if (data["msg-type"] === "email") return !!data["email-account"];
      return true;
    },
    {
      message:
        "Valitud kontakteerumise viisi jaoks on vajalik täita vastav väli",
      path: ["email-account"],
    },
  )
  .refine(
    (data) => {
      if (data["msg-type"] === "whatsapp") return !!data["whatsapp-account"];
      return true;
    },
    {
      message:
        "Valitud kontakteerumise viisi jaoks on vajalik täita vastav väli",
      path: ["whatsapp-account"],
    },
  )
  .refine(
    (data) => {
      if (data["msg-type"] === "telegram") return !!data["telegram-account"];
      return true;
    },
    {
      message:
        "Valitud kontakteerumise viisi jaoks on vajalik täita vastav väli",
      path: ["telegram-account"],
    },
  );

export type FormData = z.infer<typeof formSchema>;
