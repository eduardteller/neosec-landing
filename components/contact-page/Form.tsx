"use client";
import { ChevronDown } from "lucide-react";
import Form from "next/form";
import CustomInput from "../shared/CustomInput";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Nimi on kohustuslik"),
  org: z.string().optional(),
  "msg-type": z.enum(["none", "email", "telegram", "whatsapp"], {
    required_error: "Palun valige kontakteerumise viis",
  }),
  "telegram-account": z.string().optional(),
  "whatsapp-account": z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Sisestage korrektne telefoninumber")
    .optional(),
  "email-account": z.string().email("Sisestage korrektne email").optional(),
  message: z.string().min(1, "Sõnum on kohustuslik"),
});

export type FormData = z.infer<typeof formSchema>;

const CustomForm = () => {
  return (
    <Form
      action={"/api/send-contact"}
      formMethod="POST"
      className="mx-auto w-full space-y-4"
    >
      <div className="flex w-full flex-row gap-8">
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">
            TÄISNIMI VÕI ALIAS{` `}
            <span className="text-red-500">*</span>
          </h6>
          <CustomInput placeholder="Nimi" type="text" name="name" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">
            ORGANISATSIOON (VALIKULINE)
          </h6>
          <CustomInput
            placeholder="Teie organisatsioon"
            type="text"
            name="org"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          KUIDAS VÕTTA TEIEGA ÜHENDUST?
        </h6>
        <div className="group relative w-full">
          <select
            className="w-full appearance-none rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
            name="msg-type"
          >
            <option value="none">Soovin, et minuga võetaks ühendust...</option>
            <option value="email">Email</option>
            <option value="telegram">Telegram sõnum</option>
            <option value="whatsapp">Whatsapp sõnum</option>
          </select>
          <span className="absolute right-2 top-[50%] translate-y-[-50%] text-zinc-300 transition-colors group-hover:text-sky-600">
            <ChevronDown size={16} />
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          TELEGRAM (VALIKULINE)
        </h6>
        <CustomInput
          placeholder="Teie Telegrami @kasutajanimi"
          type="text"
          name="telegram-account"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          WHATSAPP (VALIKULINE)
        </h6>
        <CustomInput
          placeholder="Teie WhatsAppi number koos suunakoodiga"
          type="text"
          name="whatsapp-account"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          E-POST (VALIKULINE)
        </h6>
        <CustomInput
          placeholder="Teie e-posti aadress"
          type="email"
          name="email-account"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          SÕNUM{` `}
          <span className="text-red-500">*</span>
        </h6>
        <textarea
          className="max-h-96 min-h-24 w-full rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
          placeholder="Sõnum"
          name="message"
        ></textarea>
      </div>

      <button className="w-full rounded-md bg-sky-600 px-8 py-4 font-semibold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950">
        Saada
      </button>
    </Form>
  );
};

export default CustomForm;
