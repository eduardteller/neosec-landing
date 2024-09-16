import {
  ArrowUpRight,
  Bitcoin,
  EarthLock,
  Fingerprint,
  Shield,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { bgImageData } from "../page";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});
const PageServices = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black text-white">
        <div
          className="breathe absolute inset-0 z-0"
          style={{
            backgroundImage: bgImageData,
          }}
        ></div>
        <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-between px-8 py-6">
          <Link
            href={"/"}
            className="text-3xl font-bold uppercase tracking-tight text-white/60 duration-300 hover:text-white"
          >
            <span>NEO</span>
            <span className="text-white/40">SEC</span>
          </Link>
          <a
            href="mailto:info@neosec.tech"
            className="border border-white/20 bg-black px-12 py-6 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
          >
            CONTACT US
          </a>
        </div>
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="w-fit border border-white/20 bg-black p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-transparent hover:text-white/60">
            null services{" "}
          </div>
          <div className="flex gap-4">
            <span
              className={`text-5xl font-semibold tracking-tight text-white ${pop.className}`}
            >
              Services We
            </span>
            <span
              className={`text-5xl font-semibold tracking-tight text-white/70 ${pop.className}`}
            >
              Offer
            </span>
          </div>
          <p className="prose prose-base max-w-3xl px-8 text-center text-white/70">
            {`Comprehensive cybersecurity solutions, including Digital Footprint Removal, Digital Protection Concierge Services, and Cyber Threat Intelligence, to safeguard your organization's digital presence.`}
          </p>
          <div className="flex gap-8">
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <EarthLock size={36} className="text-white/40" />

              <p className="text-center text-lg font-medium">
                Cyber Threat Intelligence
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href=""
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Shield size={36} className="text-white/40" />
              <p className="text-center text-lg font-medium">
                Digital Protection Concierge Service
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href=""
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Fingerprint size={36} className="text-white/40" />

              <p className="text-center text-lg font-medium">
                Digital Footprint Removal
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href=""
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Bitcoin size={36} className="text-white/40" />

              <p className="text-center text-lg font-medium">
                Cyber Investigations & Asset Recovery
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href=""
              >
                Read More <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl py-24">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-700 to-transparent px-8 py-16">
            <div className="flex gap-4">
              <span
                className={`text-5xl font-semibold tracking-tight text-white ${pop.className}`}
              >
                Discover The
              </span>
              <span
                className={`text-5xl font-semibold tracking-tight text-white/70 ${pop.className}`}
              >
                Undiscoverable
              </span>
            </div>
            <p className="prose prose-base px-8 text-center text-white/70">
              {`Secure critical information with Null Consolidated's elite
              intelligence services. Contact us today!`}
            </p>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-12 py-6 uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
            >
              reach our team
            </a>
          </div>
        </div>
      </section>
      <footer className="flex items-center justify-center bg-black p-8 text-white">
        <p className="uppercase tracking-widest">Copyright © 2024 NeoSec </p>
      </footer>
    </>
  );
};

export default PageServices;
