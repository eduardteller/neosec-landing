"use client";
import { sendContact } from "@/actions/actions";
import { ContactFormText } from "@/helpers/est";
import { FormData, formSchema } from "@/helpers/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, LoaderPinwheel } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import CustomInput from "../shared/CustomInput";

interface Props {
  text: ContactFormText;
}

const CustomForm = ({ text }: Props) => {
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
      toast.error(text.failure, {
        style: {
          borderRadius: "6px",
          background: "#27272a",
          color: "#d4d4d8",
        },
      });
    } else {
      toast.success(text.success, {
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
              {text.name.title}
              <span className="text-red-500">*</span>
            </h6>
            <CustomInput
              {...register("name")}
              placeholder={text.name.placeholder}
              type="text"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <h6 className="font-bold uppercase text-zinc-300">
              {text.org.title}
            </h6>
            <CustomInput
              placeholder={text.org.placeholder}
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
            {text.contactType.title}
            <span className="text-red-500">*</span>
          </h6>
          <div className="group relative w-full">
            <select
              className="w-full appearance-none rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
              {...register("msg-type")}
            >
              <option value="none">{text.contactType.placeholder}</option>
              <option value="email">Email</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">Whatsapp</option>
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
          <h6 className="font-bold uppercase text-zinc-300">
            {text.telegram.title}
          </h6>
          <CustomInput
            placeholder={text.telegram.placeholder}
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
          <h6 className="font-bold uppercase text-zinc-300">
            {text.whatsapp.title}
          </h6>
          <CustomInput
            placeholder={text.whatsapp.placeholder}
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
          <h6 className="font-bold uppercase text-zinc-300">
            {text.email.title}
          </h6>
          <CustomInput
            placeholder={text.email.placeholder}
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
            {text.message.title}
            <span className="text-red-500">*</span>
          </h6>
          <textarea
            className="max-h-96 min-h-24 w-full rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
            placeholder={text.message.placeholder}
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
          {loading ? <Spinner /> : text.button}
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
