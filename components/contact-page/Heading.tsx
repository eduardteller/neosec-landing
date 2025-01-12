import { contactSVG, pop } from "@/helpers/constants";
import Navbar from "../shared/Navbar";

const Heading = () => {
  return (
    <section className="relative bg-zinc-950 text-zinc-100">
      <div
        className="breathe absolute inset-0 z-0 bg-cover blur-sm"
        style={{
          backgroundImage: contactSVG,
        }}
      />

      <Navbar />

      <div className="relative z-10 flex w-full flex-col items-center gap-12 px-4 py-8">
        <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
          kontakt{" "}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
          <span
            className={`text-4xl font-semibold tracking-tight text-zinc-100 md:whitespace-nowrap md:text-5xl ${pop.className}`}
          >
            Võtke
          </span>
          <span
            className={`text-4xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className}`}
          >
            Ühendust
          </span>
        </div>
        <p className="prose prose-lg max-w-3xl px-8 text-center leading-loose text-zinc-400 max-md:prose-base">
          {`Küberkaitse tipplahendused teie ettevõtte kindlustamiseks.`}
        </p>
      </div>
    </section>
  );
};

export default Heading;
