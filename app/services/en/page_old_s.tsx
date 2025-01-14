import Accordion from "@/components/Accordion";
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
import { bgImageData } from "../../en/page_old";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});

const PageServices = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black text-zinc-100">
        <div
          className="breathe absolute inset-0 z-0"
          style={{
            backgroundImage: bgImageData,
          }}
        ></div>
        <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
          <div>
            <Link
              href={"/en"}
              className="text-xl font-bold uppercase tracking-tight text-zinc-100/60 antialiased duration-300 hover:text-zinc-100 md:text-3xl"
            >
              <span>NEO</span>
              <span className="text-zinc-100/40">SEC</span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-lg font-medium text-zinc-100/60">
              <Link className="text-zinc-100" href={"/en/services"}>
                ENG
              </Link>
              <span> | </span>
              <Link
                className="tracking-tight duration-300 hover:text-zinc-100"
                href={"/services"}
              >
                EST
              </Link>
            </div>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-zinc-400 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-sm"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="w-fit border border-white/20 bg-black p-2 text-xs uppercase tracking-widest text-zinc-100 duration-300 hover:bg-transparent hover:text-zinc-100/60">
            services{" "}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-100 md:whitespace-nowrap md:text-5xl ${pop.className}`}
            >
              Discover Our
            </span>
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className}`}
            >
              Services
            </span>
          </div>
          <p className="prose prose-base max-w-3xl px-8 text-center leading-loose text-zinc-400">
            {`Unlock Complete Cybersecurity Mastery with our all-encompassing solutions. From Digital Footprint Removal and bespoke Digital Protection Concierge Services to advanced Cyber Threat Intelligence, we ensure your organization's digital fortress is impenetrable. `}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <EarthLock size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Cyber Threat Intelligence
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section1"
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Shield size={36} className="text-zinc-100/40" />
              <p className="text-center text-lg font-medium">
                Digital Protection Concierge Service
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section2"
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Fingerprint size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Digital Footprint Removal
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section3"
              >
                Read More <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Bitcoin size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Cyber Investigations & Asset Recovery
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section4"
              >
                Read More <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div id="section1" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic1}
                alt="cybersecurity"
                className="object-cover grayscale"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap justify-center gap-2 md:justify-start">
                <span
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-zinc-100 ${pop.className} antialiased`}
                >
                  Cyber Threat
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Intelligence
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Company Presence Analysis",
                    secondText: `We identify vulnerabilities like outdated security measures, exposed sensitive information, and potential attack vectors, ensuring your digital fortress remains unbreachable.`,
                  },
                  {
                    firstText: "Exposure Assessment",
                    secondText: `Guard your leadership against SIM-swap and communication takeover attacks. Our expert evaluation scrutinizes publicly available information and identifies potential vulnerabilities, ensuring your senior officials stay protected against targeted threats.`,
                  },
                  {
                    firstText: "Senior Official Security Review",
                    secondText: `Shield your senior officials with our meticulous account security reviews. We enforce robust measures like 2FA verification, audit outdated recovery options, and assess password integrity. Plus, we scour hacked-data search engines to uncover and secure exposed information. Ensure top-tier protection for your highest-ranking team members.`,
                  },
                  {
                    firstText: "Dark Web Surveillance",
                    secondText: `Stay ahead of cyber threats with our relentless dark web surveillance. We monitor for mentions of your company and sensitive data, track data breaches in real time, and profile threat actors aiming at your business. Ensure your security with proactive intelligence and seamless protection.`,
                  },
                  {
                    firstText: "Data Breach Detection",
                    secondText: `Safeguard your business with our cutting-edge breach detection services. We diligently scour the dark web for any compromised data related to your company, enabling us to swiftly identify and analyze breaches. Our rapid response ensures damage is minimized, keeping your information secure.`,
                  },
                  {
                    firstText: "Threat Actor Profiling",
                    secondText: `We delve deep into the dark web to identify and analyze attackers targeting your company, understanding their tactics, techniques, and procedures (TTPs). Arm your defenses with invaluable insights and stay one step ahead of potential threats.`,
                  },
                  {
                    firstText: "Typosquatting & Homoglyph Attacks",
                    secondText: `Stop phishing threats in their tracks with our advanced detection of deceptive domain names. We identify and neutralize risks from attackers using look-alike characters or subtle misspellings. Protect your employees and customers by preventing malicious campaigns before they strike.`,
                  },
                  {
                    firstText: "Brand Protection",
                    secondText: `We identify and dismantle fake websites, social media profiles, and rogue digital assets, ensuring that your brand and intellectual property remain unblemished and respected.`,
                  },
                ]}
              ></Accordion>
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
                  Digital Protection
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Service
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Personalized Digital Security Solutions",
                    secondText: `Customized security solutions designed to tackle the unique risks each individual faces. Our tailored measures ensure personalized protection that's as distinctive as you are.`,
                  },
                  {
                    firstText: "Comprehensive Protection",
                    secondText: `Comprehensive online investigations and background checks to safeguard your digital assets and ensure your personal safety. Trust us to leave no stone unturned in protecting what matters most.`,
                  },
                  {
                    firstText: "Dark Web Monitoring",
                    secondText: `Protect yourself from identity theft and data breaches with our dark web scanning services. We relentlessly search for exposed information, ensuring your personal and corporate privacy remains intact and secure.`,
                  },
                  {
                    firstText: "Phishing Scams Awareness",
                    secondText: `Stay one step ahead of cybercriminals with our expert phishing scam detection and prevention services. We'll teach you how to spot deceptive schemes and arm you with the tools and knowledge to avoid them, ensuring your digital safety.`,
                  },
                  {
                    firstText: "Securing Your Home Network",
                    secondText: `Transform your home into a digital fortress with our advanced network security services. We update critical settings, activate robust encryption, and ensure timely firmware updates to safeguard your home network against potential threats.`,
                  },
                  {
                    firstText: "Protection Against Stealer Logs",
                    secondText: `Empower yourself with our expert education on stealer logs, round-the-clock monitoring, and robust protection against malicious software. Trust us to keep your digital environment safe and secure.`,
                  },
                  {
                    firstText: "Social Media Privacy Settings",
                    secondText: `Keep your digital life secure with our regular privacy setting reviews, strategies to minimize sharing sensitive information, and advice on managing trusted friend requests. Stay in control and protect what matters most.`,
                  },
                  {
                    firstText: "Software Updates",
                    secondText: `Keep your devices safeguarded and running smoothly with our proactive approach to security patches, performance enhancements, and bug fixes. Automate updates to ensure you're always protected and optimized, without lifting a finger.`,
                  },
                ]}
              ></Accordion>
            </div>
            <div className="order-1 h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px] md:order-2">
              <Image
                src={pic2}
                alt="cybersecurity"
                className="object-cover grayscale"
              ></Image>
            </div>
          </div>
        </div>
        <div id="section3" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic4}
                alt="cybersecurity"
                className="object-cover grayscale"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap justify-center gap-2 md:justify-start">
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-100 ${pop.className} antialiased`}
                >
                  Digital Footprint
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Removal
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Monitor Your Digital Footprint",
                    secondText: `Stay one step ahead with our proactive personal information audits. We scour the internet to identify any publicly accessible data and potential risks, while setting up comprehensive alerts and digital trackers. Remain informed and protected as we monitor new mentions and emerging information about you in real-time.`,
                  },
                  {
                    firstText: "Remove Unwanted Information",
                    secondText: `Protect your privacy with our diligent data removal services. We contact websites, data brokers, and social media platforms to request the thorough deletion of your personal information, ensuring your digital footprint is effectively erased.`,
                  },
                  {
                    firstText: "Manage Your Online Presence",
                    secondText: `We fine-tune your privacy settings, provide guidance on minimizing sensitive information sharing, and implement robust passwords alongside two-factor authentication. Elevate your digital protection to the next level.`,
                  },
                ]}
              ></Accordion>
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
                  Cyber Investigations & Asset{" "}
                  <span
                    className={`text-3xl font-semibold tracking-tight text-zinc-400 md:block ${pop.className} antialiased`}
                  >
                    Recovery
                  </span>
                </h2>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Helping Victims Recover Assets",
                    secondText: `Our expert team identifies the culprits behind your losses and equips you with comprehensive resources and guidance to reclaim your stolen assets. Stand strong with our support as we navigate the complexities of asset recovery together.`,
                  },
                  {
                    firstText: "Exposing Phishing Campaigns",
                    secondText: `Phishing campaigns are becoming alarmingly sophisticated, preying on both individuals and businesses. At NeoSec, we specialize in unraveling these deceptive schemes. Our thorough investigations expose the fraudsters and their tactics, empowering you with the knowledge to defend yourself effectively. Trust NeoSec to reveal the hidden threats and keep you one step ahead.`,
                  },
                  {
                    firstText: "Revealing the Truth Behind Scams",
                    secondText: `We expose the operations and networks of fraudsters, revealing their hidden schemes. Our expert guidance then leads victims through clear and actionable steps to recover their assets, ensuring justice and peace of mind.`,
                  },
                  {
                    firstText: "Your Defense Against Financial Fraud",
                    secondText: `NeoSec is your ultimate shield against financial scams. Armed with our intelligence and unwavering support, you can reclaim what's rightfully yours. We identify and expose the fraudsters, empowering you to regain control and restore your financial security. Trust NeoSec to protect and recover your assets.`,
                  },
                ]}
              ></Accordion>
            </div>
            <div className="order-1 h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px] md:order-2">
              <Image
                src={pic3}
                alt="cybersecurity"
                className="object-cover grayscale"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-700 to-transparent px-8 py-16">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl ${pop.className} antialiased`}
              >
                Fortify Your Digital
              </span>
              <span
                className={`text-3xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className} antialiased`}
              >
                Realm
              </span>
            </div>
            <p className="prose prose-sm px-8 text-center text-zinc-400 md:prose-base md:leading-loose">
              {`Partner with NeoSec for unrivaled cybersecurity solutions and lock down your digital presence today. Experience unparalleled peace of mind with our cutting-edge protection.`}
            </p>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-zinc-400 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-base"
            >
              reach us
            </a>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center bg-black p-8 text-zinc-100">
        <p className="uppercase tracking-widest">Copyright © 2024 NeoSec </p>
      </footer>
    </>
  );
};

export default PageServices;
