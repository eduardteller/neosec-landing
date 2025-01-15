import { pop } from "@/helpers/constants";
import { ContactFormText } from "@/helpers/est";
import { Mail } from "lucide-react";
import CustomForm from "./Form";

interface Props {
  main: {
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
    mail: {
      titleFirst: string;
      titleSecond: string;
    };
  };
  form: ContactFormText;
}

const ContactSection = ({ main, form }: Props) => {
  return (
    <section className="relative z-10 bg-zinc-950">
      <div className="absolute right-0 top-0 h-2 w-full bg-zinc-950" />
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="w-full space-y-4 lg:max-w-lg">
            <div className="sm:space-y-2 sm:text-center lg:text-start">
              <h1
                className={`text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl ${pop.className}`}
              >
                {main.titleFirst}
                {` `}
                <span className="inline-block text-zinc-400 max-sm:block">
                  {main.titleSecond}
                </span>
              </h1>
            </div>
            <p className="prose prose-base text-zinc-400 sm:mx-auto sm:text-center lg:mx-0 lg:text-start">
              {main.paragraph}
            </p>

            <div className="group flex w-fit flex-row items-center justify-start gap-4 rounded-md border-2 border-zinc-800 bg-zinc-950 p-8 text-zinc-300 duration-300 hover:border-sky-600 max-lg:p-4 sm:mx-auto lg:mx-0 lg:w-full">
              <Mail
                size={36}
                className="duration-300 group-hover:text-sky-600"
              />
              {/* <h5
                    className={`text-lg font-bold text-zinc-300 ${pop.className}`}
                  >
                    {main.mail.titleFirst}
                    {` `}
                    <span className="text-zinc-400">
                      {main.mail.titleSecond}
                    </span>
                  </h5> */}
              <p className="text-lg font-semibold text-zinc-400">
                info@neosec.tech
              </p>
            </div>
          </div>
          <CustomForm text={form} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
