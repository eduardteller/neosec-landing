"use client";
import { sendContact } from "@/actions/actions";
import { FormData, formSchema } from "@/helpers/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, LoaderPinwheel } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import CustomInput from "../shared/CustomInput";

const CustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const resp = await sendContact(data);
    if (!resp.status) {
      toast.error(
        "Kirja saatmine ebaõnnestus!\nPalun proovige hiljem uuesti.",
        {
          style: {
            borderRadius: "6px",
            background: "#27272a",
            color: "#d4d4d8",
          },
        },
      );
    } else {
      toast.success("Teie kiri on edukalt saadetud!", {
        style: {
          borderRadius: "6px",
          background: "#27272a",
          color: "#d4d4d8",
        },
      });
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
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
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <h6 className="font-bold uppercase text-zinc-300">
              ORGANISATSIOON
            </h6>
            <CustomInput
              placeholder="Teie organisatsioon"
              type="text"
              {...register("org")}
            />
            {errors.org && (
              <span className="text-sm text-red-500">{errors.org.message}</span>
            )}
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
              <option value="none">
                Soovin, et minuga võetaks ühendust...
              </option>
              <option value="email">Email</option>
              <option value="telegram">Telegram sõnum</option>
              <option value="whatsapp">Whatsapp sõnum</option>
            </select>
            <span className="absolute right-2 top-[50%] translate-y-[-50%] text-zinc-300 transition-colors group-hover:text-sky-600">
              <ChevronDown size={16} />
            </span>
          </div>
          {errors["msg-type"] && (
            <span className="text-sm text-red-500">
              {errors["msg-type"].message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">TELEGRAM</h6>
          <CustomInput
            placeholder="Teie Telegrami @kasutajanimi"
            type="text"
            {...register("telegram-account")}
          />
          {errors["telegram-account"] && (
            <span className="text-sm text-red-500">
              {errors["telegram-account"].message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">WHATSAPP</h6>
          <CustomInput
            placeholder="Teie WhatsAppi number koos suunakoodiga"
            type="text"
            {...register("whatsapp-account")}
          />
          {errors["whatsapp-account"] && (
            <span className="text-sm text-red-500">
              {errors["whatsapp-account"].message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className="font-bold uppercase text-zinc-300">E-POST</h6>
          <CustomInput
            placeholder="Teie e-posti aadress"
            type="email"
            {...register("email-account")}
          />
          {errors["email-account"] && (
            <span className="text-sm text-red-500">
              {errors["email-account"].message}
            </span>
          )}
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
          />
          {errors.message && (
            <span className="text-sm text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          disabled={loading}
          className="group w-full rounded-md bg-sky-600 px-8 py-4 font-semibold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950"
        >
          {loading ? <Spinner /> : `Saada sõnum`}
        </button>
      </form>
    </>
  );
};

const Spinner = () => {
  return (
    <span className="group flex w-full items-center justify-center">
      <LoaderPinwheel
        size={24}
        className="animate-spin text-zinc-300 duration-300 group-hover:text-zinc-950"
      />
    </span>
  );
};

export default CustomForm;
