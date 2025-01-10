import { HTMLInputTypeAttribute } from "react";

interface Props {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

const CustomInput = ({ placeholder, type, name }: Props) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className="w-full rounded-md border border-zinc-800 bg-zinc-900 p-4 text-zinc-100 transition-colors hover:border-sky-600 focus:border-sky-600 focus:outline-none"
    />
  );
};

export default CustomInput;
