"use client";

import { pop } from "@/helpers/constants";
import Typewriter from "typewriter-effect";
const ClientHeading = () => {
  return (
    <h1
      className={`${pop.className} inline-block bg-gradient-to-r from-zinc-100 via-sky-400 to-zinc-100 bg-clip-text text-2xl font-semibold uppercase tracking-tight text-transparent antialiased sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
    >
      Kindlusta Oma Tulevik:{` `}
      <span className="sm:inline-block">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(800).typeString("Alusta Täna").start();
          }}
        />
      </span>
    </h1>
  );
};

export default ClientHeading;
