"use client";
import { FormData, formSchema } from "@/helpers/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../shared/CustomInput";

const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

const CustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full space-y-4"
    >
      <div className="flex w-full flex-row gap-8">
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">
            TÄISNIMI VÕI ALIAS{` `}
            <span className="text-red-500">*</span>
          </h6>
          <CustomInput {...register("name")} placeholder="Nimi" type="text" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">
            ORGANISATSIOON (VALIKULINE)
          </h6>
          <CustomInput
            placeholder="Teie organisatsioon"
            type="text"
            {...register("org")}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          KUIDAS VÕTTA TEIEGA ÜHENDUST?{` `}
          <span className="text-red-500">*</span>
        </h6>
        <div className="group relative w-full">
          <select
            className="w-full appearance-none rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
            {...register("msg-type")}
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
          {...register("telegram-account")}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          WHATSAPP (VALIKULINE)
        </h6>
        <CustomInput
          placeholder="Teie WhatsAppi number koos suunakoodiga"
          type="text"
          {...register("whatsapp-account")}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <h6 className="font-bold uppercase text-zinc-300">
          E-POST (VALIKULINE)
        </h6>
        <CustomInput
          placeholder="Teie e-posti aadress"
          type="email"
          {...register("email-account")}
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
          {...register("message")}
        ></textarea>
      </div>

      <button className="w-full rounded-md bg-sky-600 px-8 py-4 font-semibold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950">
        Saada
      </button>
    </form>
  );
};

export default CustomForm;
