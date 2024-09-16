import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import pic2 from "../public/analysis-vertical.webp";
import pic1 from "../public/binary-beaming-vertical.webp";
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
        <div className="relative z-10 flex items-center justify-between px-8 py-6">
          <div>
            <Link
              href={"/"}
              className="text-3xl font-bold uppercase tracking-tight text-white/60 duration-300 hover:text-white"
            >
              <span>NEO</span>
              <span className="text-white/40">SEC</span>
            </Link>
          </div>
          <a
            href="mailto:info@neosec.tech"
            className="border border-white/20 bg-black px-12 py-6 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
          >
            CONTACT US
          </a>
        </div>
        <div className="relative z-10 flex w-full flex-col gap-14 px-4 py-24">
          <div>
            <h1
              className={`${pop.className} whitespace-nowrap text-7xl font-semibold uppercase tracking-tight antialiased`}
            >
              Cybersecurity Redefined
            </h1>
            <h1
              className={`${pop.className} mt-4 whitespace-nowrap text-7xl font-semibold uppercase tracking-tight text-white/70 antialiased`}
            >
              Proactive. Adaptive. Relentless.
            </h1>
          </div>
          <p className="text-lg font-normal tracking-wider text-white/70">
            Securing your digital presence when others fall short - even in the
            most challenging scenarios.{" "}
          </p>
          <div className="flex gap-4">
            <Link
              href="/services"
              className="border border-white/20 bg-black px-12 py-6 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
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
      </section>
      <section className="bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-24">
          <div className="w-fit border border-white/20 bg-black p-4 text-xs tracking-[0.2em] text-white duration-300 hover:text-white/60">
            IMPOSSIBLE MADE POSSIBLE{" "}
          </div>
          <div className="flex flex-col gap-4">
            <h1
              className={`text-center text-5xl font-semibold tracking-tight text-white ${pop.className}`}
            >
              Strategic Execution
            </h1>
            <h2
              className={`text-center text-5xl font-semibold tracking-tight text-white/70 ${pop.className}`}
            >
              Global Influence
            </h2>
          </div>
          <div className="prose prose-base mt-12 flex max-w-none items-start justify-center gap-20 font-light text-white/80">
            <p className="m-0">
              {`   At Null Consolidated, we excel in achieving what others consider
              unfeasible. We specialize in an array of services including
              high-profile investigations of white-collar crime, digital threat
              intelligence, digital footprint removal, and the recovery of
              digital assets. Utilizing advanced technology and expert
              operatives, we secure elusive evidence that others cannot obtain.
              Utilizing advanced technology and expert operatives, we secure
              evidence that others can not obtain through complex tactics. Our
              strategic approach integrates extensive knowledge, diverse
              expertise, and an international network to deliver comprehensive,
              customized solutions for each client, revealing concealed truths
              and providing the critical insights you require for success.`}
            </p>
            <p className="m-0">
              {`Our cutting-edge mentoring program equips you with the essential
              modern tools needed to thrive in today’s world. The program is
              divided into three comprehensive chapters: Phase I for
              intermediates, Phase II for advanced users, and Phase III for
              veteran users. In Phase I, intermediates are introduced to
              fundamental concepts and techniques, laying a solid foundation.
              Phase II delves deeper, providing advanced users with complex
              strategies and practical applications. Phase III is designed for
              veterans, offering specialized knowledge and sophisticated
              methodologies. Through private methodologies, our course offers an
              easy entry point and valuable knowledge tailored to all skill
              levels, ensuring you gain the experience necessary to excel in the
              field.`}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pt-24">
          <div className="flex w-full justify-center border-2 border-white/60">
            <div className="flex h-min w-1/2 gap-8">
              <div className="h-[524px] w-1/2">
                <Image
                  src={pic1}
                  className="h-full object-cover grayscale"
                  alt="neosec"
                ></Image>
              </div>
              <div className="h-[524px] w-1/2">
                <Image
                  src={pic2}
                  className="h-full object-cover grayscale"
                  alt="neosec"
                ></Image>
              </div>
            </div>
            <div className="flex w-1/2 flex-col justify-center gap-8 px-24">
              <div className="w-fit border border-white/20 bg-black p-4 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:text-white/60">
                leading by example{" "}
              </div>
              <div className="flex flex-col gap-4 text-start">
                <h1
                  className={`text-5xl font-semibold tracking-tight text-white ${pop.className}`}
                >
                  Experienced And
                </h1>
                <h2
                  className={`text-5xl font-semibold tracking-tight text-white/70 ${pop.className}`}
                >
                  Trusted
                </h2>
              </div>
              <p className="prose prose-base text-white/70">
                Null Consolidated leads in cybersecurity, continuously updating
                methods to counter emerging threats. Our commitment to
                innovation ensures your organization benefits from the latest
                technologies. Our mentoring program offers a three-part course
                for all skill levels, providing essential modern tools and
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-8 py-32">
          <div className="flex w-full justify-center text-center text-white">
            <div className="flex flex-col items-center justify-center gap-2 border-r border-white/40 px-16 py-8">
              <h1
                className={`${pop.className} text-5xl font-semibold antialiased`}
              >
                10 +
              </h1>
              <h1>years of experience</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-r border-white/40 px-16 py-8">
              <h1
                className={`${pop.className} text-5xl font-semibold antialiased`}
              >
                100 +
              </h1>
              <h1>clients helped</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-r border-white/40 px-16 py-8">
              <h1
                className={`${pop.className} text-5xl font-semibold antialiased`}
              >
                $ 10 M +
              </h1>
              <h1>funds recovered</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-16 py-8">
              <h1
                className={`${pop.className} text-5xl font-semibold antialiased`}
              >
                2.3 M +
              </h1>
              <h1>intercepted leaks</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl py-24">
          <div className="flex items-center justify-center gap-12">
            <div className="flex flex-col gap-8 px-8">
              <div className="flex flex-col gap-4 px-8 text-start">
                <h1
                  className={`text-5xl font-semibold tracking-tight text-white ${pop.className}`}
                >
                  Industries We
                </h1>
                <h2
                  className={`text-5xl font-semibold tracking-tight text-white/70 ${pop.className}`}
                >
                  Serve
                </h2>
              </div>
              <p className="prose prose-base px-8 text-white/70">
                Null Consolidated excels across all sectors, providing
                unparalleled intelligence solutions. From legal and financial to
                corporate, government, healthcare, energy, tech, and retail, we
                deliver results in every industry.
              </p>
            </div>
            <div className="flex h-fit min-w-[720px] flex-col gap-4 bg-gradient-to-br from-zinc-900 to-transparent p-8">
              <h1 className="text-xl font-medium text-white">{`Industries We've Helped`}</h1>
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
}
