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
import pic3 from "../../public/cyber-investigations-and-asset-recovery.webp";
import pic1 from "../../public/digital-footprint-removal.webp";
import pic4 from "../../public/digital-footprint.webp";
import pic2 from "../../public/digital-protection-concierge-service.webp";
import Accordion from "../Accordion";
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
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="w-fit border border-white/20 bg-black p-2 text-xs uppercase tracking-[0.2em] text-white duration-300 hover:bg-transparent hover:text-white/60 md:p-4">
            null services{" "}
          </div>
          <div className="flex gap-2 md:gap-4">
            <span
              className={`whitespace-nowrap text-4xl font-semibold tracking-tight text-white md:text-5xl ${pop.className}`}
            >
              Services We
            </span>
            <span
              className={`text-4xl font-semibold tracking-tight text-white/70 md:text-5xl ${pop.className}`}
            >
              Offer
            </span>
          </div>
          <p className="prose prose-base max-w-3xl px-8 text-center leading-loose text-white/70">
            {`Comprehensive cybersecurity solutions, including Digital Footprint Removal, Digital Protection Concierge Services, and Cyber Threat Intelligence, to safeguard your organization's digital presence.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <EarthLock size={36} className="text-white/40" />

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
              <Shield size={36} className="text-white/40" />
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
              <Fingerprint size={36} className="text-white/40" />

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
              <Bitcoin size={36} className="text-white/40" />

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
                className="object-cover"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap gap-2">
                <span
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white ${pop.className} antialiased`}
                >
                  Cyber Threat
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-white/70 ${pop.className} antialiased`}
                >
                  Intelligence
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Company Presence Analysis",
                    secondText: `We analyze your company's online presence to identify vulnerabilities such as outdated security practices, publicly accessible sensitive information, and potential attack vectors.`,
                  },
                  {
                    firstText: "Exposure Assessment",
                    secondText: `We assess the likelihood of senior officials being targeted by SIM-swap or communications takeover attacks, evaluating their publicly available information and potential vulnerabilities.`,
                  },
                  {
                    firstText: "Senior Official Security Review",
                    secondText: `We review senior officials' accounts to ensure robust security, including 2FA verification, checking for outdated recovery options, and evaluating password hygiene. We also identify exposed information in hacked-data search engines.`,
                  },
                  {
                    firstText: "Dark Web Surveillance",
                    secondText: `We continuously monitor the dark web for mentions of your company and sensitive data, track data breaches, and profile threat actors targeting your business.`,
                  },
                  {
                    firstText: "Data Breach Detection",
                    secondText: `We'll detect any data breaches involving your company's information. This involves identifying and analyzing any compromised data that appears on the dark web, allowing us to take swift action to mitigate the impact.`,
                  },
                  {
                    firstText: "Threat Actor Profiling",
                    secondText: `We'll profile threat actors who are discussing or targeting your company on the dark web. This includes understanding their tactics, techniques, and procedures (TTPs) to better defend against potential attacks.`,
                  },
                  {
                    firstText: "Typosquatting & Homoglyph Attacks",
                    secondText: `We identify and mitigate risks from attackers using visually similar characters or slight misspellings to create deceptive domain names. We prevent phishing campaigns designed to deceive your employees and customers.`,
                  },
                  {
                    firstText: "Brand Protection",
                    secondText: `We monitor unauthorized use of your brand and intellectual property online, identifying fake websites, social media profiles, and other digital assets that could harm your brand's reputation.`,
                  },
                ]}
              ></Accordion>
            </div>
          </div>
        </div>
        <div id="section2" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap gap-2 md:flex-col">
                <span
                  className={`text-3xl font-semibold tracking-tight text-white ${pop.className} antialiased`}
                >
                  Digital Protection Concierge
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-white/70 ${pop.className} antialiased`}
                >
                  Service
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Personalized Digital Security Solutions",
                    secondText: `Tailored security measures that address unique risks faced by individuals.`,
                  },
                  {
                    firstText: "Comprehensive Protection",
                    secondText: `Extensive online searches and background checks to secure your digital assets and personal safety.`,
                  },
                  {
                    firstText: "Dark Web Monitoring",
                    secondText: `We scan the dark web for exposed information to protect against identity theft and address data breaches.`,
                  },
                  {
                    firstText: "Phishing Scams Awareness",
                    secondText: `We help you recognize phishing scams and provide preventive measures to avoid them.`,
                  },
                  {
                    firstText: "Securing Your Home Network",
                    secondText: `We enhance home network security by updating settings, enabling encryption, and ensuring firmware updates.`,
                  },
                  {
                    firstText: "Protection Against Stealer Logs",
                    secondText: `We educate on stealer logs, provide continuous monitoring, and protect against malicious software.`,
                  },
                  {
                    firstText: "Social Media Privacy Settings",
                    secondText: `Regularly review and update privacy settings, minimize sharing of sensitive info, and advise on trusted friend requests.`,
                  },
                  {
                    firstText: "Software Updates",
                    secondText: `Ensure regular updates for security patches, performance enhancements, and bug fixes, and automate updates to keep your devices secure.`,
                  },
                ]}
              ></Accordion>
            </div>
            <div className="h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic2}
                alt="cybersecurity"
                className="object-cover"
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
                className="object-cover"
              ></Image>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap gap-2">
                <span
                  className={`text-3xl font-semibold tracking-tight text-white ${pop.className} antialiased`}
                >
                  Digital Footprint
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-white/70 ${pop.className} antialiased`}
                >
                  Removal
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Monitor Your Digital Footprint",
                    secondText: `We regularly search the internet for your personal information to identify publicly accessible data and potential risks. We set up comprehensive alerts and digital trackers to keep you informed about new mentions and emerging information related to you.`,
                  },
                  {
                    firstText: "Remove Unwanted Information",
                    secondText: `We reach out to websites, data brokers, and social media platforms to request the removal of your personal data, ensuring it is thoroughly deleted.`,
                  },
                  {
                    firstText: "Manage Your Online Presence",
                    secondText: `We adjust your privacy settings, advise on minimizing sensitive information sharing, and implement strong passwords and two-factor authentication to enhance your account security.`,
                  },
                ]}
              ></Accordion>
            </div>
          </div>
        </div>
        <div id="section4" className="mx-auto max-w-6xl py-24">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
            <div className="flex-1">
              <div className="mb-4 flex w-full flex-wrap gap-2 md:flex-col">
                <span
                  className={`text-3xl font-semibold tracking-tight text-white ${pop.className} antialiased`}
                >
                  Cyber Investigations & Asset
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-white/70 ${pop.className} antialiased`}
                >
                  Recovery
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Helping Victims Recover Assets",
                    secondText: `We assist scam victims by identifying the fraudsters responsible for their losses. Our team provides comprehensive resources and guidance to help victims recover their stolen assets. We stand by your side, offering the expertise needed to navigate the complexities of asset recovery.`,
                  },
                  {
                    firstText: "Exposing Phishing Campaigns",
                    secondText: `Phishing campaigns are increasingly sophisticated, targeting unsuspecting individuals and businesses. At NeoSec, we specialize in exposing these fraudulent schemes. Our investigations reveal the culprits and their methods, ensuring you know exactly who's behind the scam and how to protect yourself.`,
                  },
                  {
                    firstText: "Revealing the Truth Behind Scams",
                    secondText: `Through meticulous investigation and advanced hacking, we uncover the truth behind financial scams. Our approach reveals the hidden operations and networks of fraudsters. We then guide victims through the process of recovering their assets, providing clear and actionable steps.`,
                  },
                  {
                    firstText: "Your Defense Against Financial Fraud",
                    secondText: `NeoSec is your defense against financial scams. We deliver the intelligence and support necessary to reclaim what's rightfully yours. By identifying and exposing fraudsters, we help you take back control and restore your financial security.`,
                  },
                ]}
              ></Accordion>
            </div>
            <div className="h-fit w-full border border-white/80 p-8 sm:h-[456px] sm:w-[456px]">
              <Image
                src={pic3}
                alt="cybersecurity"
                className="object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-700 to-transparent px-8 py-16">
            <div className="flex flex-wrap gap-2">
              <span
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white ${pop.className}`}
              >
                Protect Your Digital
              </span>
              <span
                className={`text-3xl font-semibold tracking-tight text-white/70 ${pop.className}`}
              >
                World
              </span>
            </div>
            <p className="prose prose-base px-8 text-center text-white/70">
              {`Engage with NeoSec for unparalleled cybersecurity solutions. Secure your digital presence today.`}
            </p>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-base"
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
