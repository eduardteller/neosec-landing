import CustomForm from "@/components/contact-page/Form";
import Heading from "@/components/contact-page/Heading";
import Footer from "@/components/shared/Footer";
import { pop } from "@/helpers/constants";
import { Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeoSec - Kontakt",
  description: "Küberturbelahendused tulevikule",
  keywords: [
    "cybersecurity",
    "infosec",
    "neosec",
    "future",
    "defence",
    "offence",
    "security",
    "secure",
    "securely",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return (
    <>
      <Heading />
      <section className="relative z-10 bg-zinc-950">
        <div className="absolute right-0 top-0 h-2 w-full bg-zinc-950" />
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <div className="w-full space-y-4 lg:max-w-lg">
              <div className="space-y-1 text-start sm:space-y-2">
                <h1
                  className={`whitespace-nowrap text-xl font-semibold tracking-tight text-zinc-100 sm:text-3xl ${pop.className}`}
                >
                  Võta meiega ühendust{" "}
                  <span className="text-zinc-400">juba täna!</span>
                </h1>
              </div>
              <p className="prose prose-base text-zinc-400">
                {`Pakume sinu vajadustele kohandatud ja nutikaid lahendusi, mis toetavad olulisi uurimisi, digitaalsete ohtude analüüsi ning valgekraede kuritegevuse juhtumeid.`}
              </p>

              <div className="group flex w-full flex-row justify-start gap-4 rounded-md border-2 border-zinc-800 bg-zinc-950 p-8 text-zinc-300 duration-300 hover:translate-x-[-8px] hover:border-sky-600">
                <Mail
                  size={48}
                  className="duration-300 group-hover:text-sky-600"
                />
                <div className="flex flex-col gap-1">
                  <h5
                    className={`text-lg font-bold text-zinc-300 ${pop.className}`}
                  >
                    Teie küsimustele vastame ka{` `}
                    <span className="text-zinc-400">meili teel!</span>
                  </h5>
                  <p className="font-semibold text-zinc-400">
                    info@neosec.tech
                  </p>
                </div>
              </div>
            </div>
            <CustomForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
