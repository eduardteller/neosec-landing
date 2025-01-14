import Accordion from "@/components/Accordion";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { servicesSVG2 } from "@/helpers/constants";
import { servicesPage } from "@/helpers/en";
import {
  ArrowUpRight,
  Bitcoin,
  EarthLock,
  Fingerprint,
  Shield,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import pic4 from "../../../public/digital-footprint.webp";
import pic2 from "../../../public/digital-protection-concierge-service.webp";
import pic3 from "../../../public/pexels-alesiakozik-6765371.jpg";
import pic1 from "../../../public/pexels-pixabay-207580.jpg";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});

const PageServices = () => {
  return (
    <>
      <section className="relative min-h-screen bg-zinc-950 text-zinc-100">
        <div
          className="breathe absolute inset-0 z-0 bg-contain blur-sm"
          style={{
            backgroundImage: servicesSVG2,
          }}
        />
        <Navbar lang="eng" />
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            {servicesPage.heading.topText}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-100 md:whitespace-nowrap md:text-5xl ${pop.className}`}
            >
              {servicesPage.heading.titleFirst}
            </span>
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className}`}
            >
              {servicesPage.heading.titleSecond}
            </span>
          </div>
          <p className="prose prose-lg max-w-3xl px-8 text-center leading-loose text-zinc-400 max-md:prose-base">
            {servicesPage.heading.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <EarthLock
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

              <p className="text-center text-lg font-medium">
                {servicesPage.services[0].title}
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section1"
              >
                {servicesPage.servicesButton} <ArrowUpRight />
              </a>
            </div>
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Shield
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />
              <p className="text-center text-lg font-medium">
                {servicesPage.services[1].title}
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section2"
              >
                {servicesPage.servicesButton} <ArrowUpRight />
              </a>
            </div>
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Fingerprint
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

              <p className="text-center text-lg font-medium">
                {servicesPage.services[2].title}
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section3"
              >
                {servicesPage.servicesButton} <ArrowUpRight />
              </a>
            </div>
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Bitcoin
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

              <p className="text-center text-lg font-medium">
                {servicesPage.services[3].title}
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section4"
              >
                {servicesPage.servicesButton} <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-zinc-950">
        <div className="absolute right-0 top-0 h-2 w-full bg-zinc-950" />
        <div id="section1" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic1}
                alt="cybersecurity"
                className="rounded-md object-cover grayscale"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap justify-center gap-2 md:justify-start">
                <span
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-zinc-100 ${pop.className} antialiased`}
                >
                  {servicesPage.firstSection.titleFirst}
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  {servicesPage.firstSection.titleSecond}
                </span>
              </div>
              <Accordion items={servicesPage.firstSection.items}></Accordion>
            </div>
          </div>
        </div>
        <div id="section2" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="order-2 flex-1 md:order-1">
              <div className="mb-4 flex w-full flex-wrap justify-center gap-2 md:justify-start">
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-100 ${pop.className} antialiased`}
                >
                  {servicesPage.secondSection.titleFirst}
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  {servicesPage.secondSection.titleSecond}
                </span>
              </div>
              <Accordion items={servicesPage.secondSection.items}></Accordion>
            </div>
            <div className="order-1 h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px] md:order-2">
              <Image
                src={pic2}
                alt="cybersecurity"
                className="rounded-md object-cover grayscale"
              ></Image>
            </div>
          </div>
        </div>
        <div id="section3" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic4}
                alt="cybersecurity"
                className="rounded-md object-cover grayscale"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap justify-center gap-2 md:justify-start">
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-100 ${pop.className} antialiased`}
                >
                  {servicesPage.thirdSection.titleFirst}
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  {servicesPage.thirdSection.titleSecond}
                </span>
              </div>
              <Accordion items={servicesPage.thirdSection.items}></Accordion>
            </div>
          </div>
        </div>
        <div id="section4" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="order-2 flex-1 md:order-1">
              <div className="mb-4 flex w-full flex-wrap justify-center md:flex-col md:justify-start">
                <h2
                  className={`text-center text-3xl font-semibold tracking-tight text-zinc-100 md:text-start ${pop.className} antialiased`}
                >
                  {servicesPage.fourthSection.titleFirst}
                  <span
                    className={`text-3xl font-semibold tracking-tight text-zinc-400 md:block ${pop.className} antialiased`}
                  >
                    {servicesPage.fourthSection.titleSecond}
                  </span>
                </h2>
              </div>
              <Accordion items={servicesPage.fourthSection.items}></Accordion>
            </div>
            <div className="order-1 h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px] md:order-2">
              <Image
                src={pic3}
                alt="cybersecurity"
                className="rounded-md object-cover grayscale"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <section className="bg-gradient-to-br from-sky-950/80 to-zinc-950">
          <div className="mx-auto max-w-7xl px-8 py-24">
            <div className="flex flex-col items-center justify-center gap-4 py-16 md:gap-8">
              <div className="flex flex-wrap justify-center gap-2 text-3xl sm:text-4xl md:justify-start md:gap-2 md:text-5xl">
                <span
                  className={`whitespace-nowrap font-semibold tracking-tight text-zinc-100 ${pop.className}`}
                >
                  {servicesPage.finalSection.titleFirst}
                </span>
                <span
                  className={`font-semibold tracking-tight text-zinc-400 ${pop.className}`}
                >
                  {servicesPage.finalSection.titleSecond}
                </span>
              </div>
              <p className="prose prose-base px-8 text-center text-zinc-400 md:prose-lg md:leading-loose">
                {servicesPage.finalSection.paragraph}
              </p>

              <Link
                href="/contact/en"
                className="rounded-md bg-sky-600 px-16 py-4 text-sm font-bold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950 md:text-lg"
              >
                {servicesPage.finalSection.contactButton}
              </Link>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default PageServices;
