/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegister<any>;
}

const CustomInput = ({ placeholder, type, ...props }: Props) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      type={type}
      className="w-full rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
    />
  );
};

export default CustomInput;
