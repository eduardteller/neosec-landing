import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import pic2 from "../public/pexels-saksham-choudhary-109710-2036656.jpg";
// import pic2 from "../public/pexels-pixabay-60504.jpg";
import pic2 from "../public/blurface.jpg";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});
export const bgImageData = `
                      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23333333' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23555555'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`;

export default function Home() {
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
        <div className="flex min-h-screen flex-col">
          <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
            <div>
              <Link
                href={"/"}
                className="text-xl font-bold uppercase tracking-tight text-white/60 duration-300 hover:text-white md:text-3xl"
              >
                <span>NEO</span>
                <span className="text-white/40">SEC</span>
              </Link>
            </div>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-sm"
            >
              CONTACT US
            </a>
          </div>
          <div className="container relative z-10 mx-auto flex w-full flex-1 flex-col justify-center gap-14 px-4">
            <div className="flex flex-wrap md:flex-col">
              <h1
                className={`${pop.className} text-2xl font-semibold uppercase tracking-tight antialiased sm:text-3xl md:text-5xl lg:text-7xl`}
              >
                Fortify Your Future: Smarter. Faster.
              </h1>
              <h1
                className={`${pop.className} mt-2 text-2xl font-semibold uppercase tracking-tight text-white/70 antialiased sm:text-3xl md:mt-4 md:whitespace-nowrap md:text-5xl lg:text-7xl`}
              >
                Unbreakable Cybersecurity.
              </h1>
            </div>
            <p className="prose prose-base max-w-none text-base text-white/70 md:prose-lg md:leading-loose md:tracking-wider">
              Protecting your digital world where others fail—delivering
              security that thrives in even the toughest conditions.{" "}
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="border border-white/20 bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-sm"
              >
                services
              </Link>
              {/* <a
            href="mailto:info@neosec.tech"
            className="bg-transparent px-12 py-6 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
          >
            <span className="">services</span>
          </a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 md:items-center md:px-8">
          <div className="w-fit border border-white/20 bg-black p-2 text-xs uppercase tracking-widest text-white duration-300 hover:text-white/60">
            Turning the Impossible into Reality{" "}
          </div>
          <div className="flex flex-col items-start justify-center gap-2 md:w-[576px] md:items-center">
            <h1
              className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${pop.className}`}
            >
              Precision in Action
            </h1>
            <h2
              className={`text-3xl font-semibold tracking-tight text-white/70 sm:text-4xl md:text-5xl ${pop.className}`}
            >
              Power on a Global Scale
            </h2>
          </div>
          <div className="prose prose-base mt-8 flex max-w-xl flex-col items-start justify-center leading-loose text-white/80 md:mt-12">
            <p>
              {`At NeoSec, we thrive where others falter. Specializing in high-stakes white-collar investigations, digital threat intelligence, digital footprint removal, and asset recovery, we achieve what most deem impossible. Armed with cutting-edge technology and elite operatives, we uncover critical evidence that others simply cannot. Our tailored strategies combine deep industry knowledge, global expertise, and an international network to reveal hidden truths and deliver the actionable insights you need to succeed.`}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-8">
          <div className="flex w-full flex-col justify-center border-2 border-white/60 lg:flex-row">
            <div className="flex w-full p-4">
              {/* <div className="w-1/2 lg:h-[524px]">
                <Image
                  src={pic1}
                  className="h-full object-cover grayscale"
                  alt="neosec"
                ></Image>
              </div>
              <div className="w-1/2 lg:h-[524px]">
                <Image
                  src={pic2}
                  className="h-full object-cover grayscale"
                  alt="neosec"
                ></Image>
              </div> */}
              <Image
                src={pic2}
                className="object-cover grayscale"
                alt="neosec"
              ></Image>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 px-8 py-8 md:px-24 lg:items-start lg:py-0">
              <div className="mx-auto w-fit border border-white/20 bg-black p-2 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:text-white/60 lg:mx-0">
                Setting the Gold Standard{" "}
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-center lg:flex-col lg:text-left">
                <h1
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl ${pop.className}`}
                >
                  Proven Expertise
                </h1>
                <h2
                  className={`text-3xl font-semibold tracking-tight text-white/70 md:text-4xl lg:text-5xl ${pop.className}`}
                >
                  You Can Rely On
                </h2>
              </div>
              <p className="prose prose-base text-left leading-loose text-white/70">
                {`NeoSec is at the forefront of cybersecurity, relentlessly
                evolving our methods to outsmart emerging threats. Our
                dedication to innovation guarantees your organization stays
                protected with cutting-edge technology. `}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl py-24">
          <div className="flex flex-col items-center justify-center gap-12 px-4 md:px-8 lg:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-2 text-start">
                <h1
                  className={`text-3xl font-semibold tracking-tight text-white md:text-5xl ${pop.className}`}
                >
                  Diverse Industries
                </h1>
                <h2
                  className={`text-3xl font-semibold tracking-tight text-white/70 md:text-5xl ${pop.className}`}
                >
                  Tailored Solutions
                </h2>
              </div>
              <p className="prose prose-base max-w-none text-white/70">
                {`NeoSec stands at the pinnacle of excellence, delivering top-tier
                intelligence solutions across a multitude of sectors. Whether
                it's legal, financial, corporate, government, healthcare,
                energy, tech, or retail, our expertise translates into tangible
                results for every industry we touch. Discover unparalleled
                performance with NeoSec, your partner in success across all
                domains`}
              </p>
            </div>
            <div className="flex h-fit flex-col gap-4 bg-gradient-to-br from-zinc-900 to-transparent p-8 lg:min-w-[720px]">
              <h1 className="text-xl font-medium text-white">
                {`Empowering Every`}
                <span className="ml-1 text-white/70">Industry</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  governments
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  telecommunication
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  healthcare
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  crypto
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  finance
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  fintech
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  energy
                </div>
                <div className="border border-white/20 bg-transparent p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-black/20 hover:text-white/60">
                  legal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-700 to-transparent px-8 py-16 md:gap-8">
            <div className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-4">
              <span
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-5xl ${pop.className}`}
              >
                Discover The
              </span>
              <span
                className={`text-3xl font-semibold tracking-tight text-white/70 md:text-5xl ${pop.className}`}
              >
                Ultimate Protection
              </span>
            </div>
            <p className="prose prose-sm px-8 text-center text-white/70 md:prose-base md:leading-loose">
              {`Safeguard your most valuable assets with NeoSec's elite intelligence services. Reach out to us today for unmatched protection!`}
            </p>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-base"
            >
              reach us
            </a>
          </div>
        </div>
      </section>
      <footer className="flex items-center justify-center bg-black p-8 text-white">
        <p className="uppercase tracking-widest">Copyright © 2024 NeoSec </p>
      </footer>
    </>
  );
}
