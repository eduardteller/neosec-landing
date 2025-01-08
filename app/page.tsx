import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import pic2 from "../public/pexels-saksham-choudhary-109710-2036656.jpg";
// import pic2 from "../public/pexels-pixabay-60504.jpg";
import CustomDivider from "@/components/CustomDivider";
import LoopingSlider from "@/components/LoopingSlider";
import ServiceTypesComponent from "@/components/ServiceTypesComponent";
import {
  Ambulance,
  BatteryFull,
  Bitcoin,
  Cpu,
  HandCoins,
  Landmark,
  Phone,
  Scale,
} from "lucide-react";
import pic2 from "../public/blurface.jpg";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});
export const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23040404' width='11' height='11'/%3E%3Crect fill='%23050506' x='10' width='11' height='11'/%3E%3Crect fill='%23050608' y='10' width='11' height='11'/%3E%3Crect fill='%2306070a' x='20' width='11' height='11'/%3E%3Crect fill='%2306080b' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23070a0d' y='20' width='11' height='11'/%3E%3Crect fill='%23070b0f' x='30' width='11' height='11'/%3E%3Crect fill='%23080c10' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23090d11' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23090e13' y='30' width='11' height='11'/%3E%3Crect fill='%230a0f14' x='40' width='11' height='11'/%3E%3Crect fill='%230a0f15' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%230b1016' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%230b1117' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%230c1218' y='40' width='11' height='11'/%3E%3Crect fill='%230c1319' x='50' width='11' height='11'/%3E%3Crect fill='%230d131a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%230d141b' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%230d151c' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%230e151d' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%230e161e' y='50' width='11' height='11'/%3E%3Crect fill='%230e171f' x='60' width='11' height='11'/%3E%3Crect fill='%230f1720' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%230f1821' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%230f1922' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%230f1923' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%230f1a24' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%230f1a25' x='70' width='11' height='11'/%3E%3Crect fill='%230f1b26' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%230f1c27' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%230f1c29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%230f1d2a' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%230f1d2b' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%230f1e2c' x='80' width='11' height='11'/%3E%3Crect fill='%230f1f2d' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%230f1f2e' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%230f202f' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230f2130' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230f2131' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230f2232' x='90' width='11' height='11'/%3E%3Crect fill='%230e2333' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230e2334' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230e2436' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230e2437' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230e2538' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230e2639' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230d263a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230d273b' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%230d283c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230d283d' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%230c293f' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%230c2a40' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%230c2a41' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230b2b42' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230b2c43' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%230a2c44' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%230a2d46' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23092e47' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23092e48' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23082F49' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`;
export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-zinc-950 text-white">
        <div
          className="breathe absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: svgBackground,
          }}
        />
        {/* <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div> */}
        <div className="flex h-screen flex-col">
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
            <div className="flex items-center gap-8">
              <div className="text-lg font-medium text-white/60">
                <Link
                  className="tracking-tight duration-300 hover:text-white"
                  href={"/en"}
                >
                  ENG
                </Link>
                <span> | </span>
                <Link className="text-white" href={"/"}>
                  EST
                </Link>
              </div>
              <a
                href="mailto:info@neosec.tech"
                className="rounded-md border border-white/40 bg-transparent px-8 py-4 text-xs font-bold uppercase text-white/70 duration-300 hover:bg-white hover:text-black md:text-sm"
              >
                KONTAKT
              </a>
            </div>
          </div>
          <div className="container relative z-10 mx-auto flex w-full flex-1 flex-col items-center gap-14 px-4 pt-32 [@media(max-height:768px)]:gap-8 [@media(max-height:768px)]:pt-16">
            <div className="flex flex-col items-center">
              <h1
                className={`${pop.className} inline-block bg-gradient-to-r from-white via-sky-400 to-white bg-clip-text text-xl font-semibold uppercase tracking-tight text-transparent antialiased sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
              >
                Kindlusta Oma Tulevik: Alusta Täna
              </h1>

              <h1
                className={`${pop.className} mt-2 text-xl font-semibold uppercase tracking-tight text-white/70 antialiased sm:text-3xl md:mt-4 md:whitespace-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl`}
              >
                Purunematu küberturvalisus.
              </h1>
            </div>
            <p className="prose prose-base max-w-none text-base leading-loose tracking-wider text-white/70 lg:prose-lg max-lg:mx-32 max-md:mx-16">
              Kaitseme teie digimaailma seal, kus teised ebaõnnestuvad—pakume
              turvalisust, mis toimib ka kõige keerulisemates tingimustes.{" "}
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="rounded-md border border-white/40 bg-sky-600 px-16 py-4 text-xs font-semibold uppercase text-white/70 duration-300 hover:bg-white hover:text-black md:text-sm"
              >
                ALUSTA TÄNA
              </Link>
            </div>
            <LoopingSlider />
          </div>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 md:items-center md:px-8">
          <div className="text-sm font-bold uppercase tracking-widest text-sky-600">
            Võimatust reaalsuseks{" "}
          </div>
          <div className="space-y-2 text-center">
            <h1
              className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${pop.className}`}
            >
              Täpsus tegudes
            </h1>
            <h2
              className={`whitespace-nowrap text-center text-3xl font-semibold tracking-tight text-white/70 sm:text-4xl md:text-5xl ${pop.className}`}
            >
              Võimsus globaalses ulatuses
            </h2>
          </div>
          <div className="prose prose-lg flex max-w-4xl flex-col justify-center leading-loose text-white/80">
            <p>
              {`NeoSec on ekspert kõrge panusega uurimistes, digitaalsetes ohuluureteenustes, jalajälgede kustutamises ja vara taastamises. Meie eliitspetsialistid ja tipptasemel tehnoloogia leiavad tõendid, mida teised ei näe. Kohandatud strateegiad, globaalne asjatundlikkus ja ulatuslik võrgustik tagavad teile kriitilised teadmised ja edu. Valige NeoSec – võimatu on meie standard!`}
            </p>
          </div>
        </div>
      </section>
      <CustomDivider />
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-8">
          <div className="flex w-full flex-col justify-center rounded-md lg:flex-row">
            <div className="flex w-full p-4">
              <Image
                src={pic2}
                className="rounded-md border border-zinc-800 object-cover grayscale"
                alt="neosec"
              ></Image>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 px-8 py-8 md:px-24 lg:items-start lg:py-0">
              <div className="mx-auto text-sm font-bold uppercase tracking-widest text-sky-600 lg:mx-0">
                Kuldstandardi kehtestamine{" "}
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-center lg:flex-col lg:text-left">
                <h1
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-4xl ${pop.className}`}
                >
                  Tõestatud Asjatundlikkus
                </h1>
                <h2
                  className={`text-3xl font-semibold tracking-tight text-white/70 md:text-4xl lg:text-4xl ${pop.className}`}
                >
                  Milles Võid Kindel Olla
                </h2>
              </div>
              <p className="prose prose-base text-left leading-loose text-white/70">
                {`NeoSec on küberturbe esirinnas, arendades väsimatult oma meetodeid, et edestada tekkivaid ohte. Meie pühendumus uuendustegevusele tagab, et teie organisatsioon püsib kaitstuna tänapäevaseima tehnoloogiaga.`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CustomDivider />
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl py-24">
          <div className="flex w-full flex-col items-center justify-center gap-12 px-4 md:px-8">
            <div className="space-y-8">
              <div className="space-y-2 text-start">
                <h1
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white sm:text-4xl ${pop.className}`}
                >
                  Mitmekesised Tööstusharud
                </h1>
                <h2
                  className={`text-3xl font-semibold tracking-tight text-white/70 sm:text-4xl ${pop.className}`}
                >
                  Kohandatud Lahendused
                </h2>
              </div>
              <p className="prose prose-base text-white/70">
                {`NeoSec pakub tipptasemel luurelahendusi, mis annavad käegakatsutavaid tulemusi juriidikas, rahanduses, valitsuses, tervishoius, energias, tehnoloogias ja jaekaubanduses. Oleme teie usaldusväärne partner edu saavutamisel ja konkurentsieelise tagamisel. `}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CustomDivider />
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-5xl py-24">
          <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:px-8">
            <h6 className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Võimatust reaalsuseks
            </h6>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {`Võimestame`}
              <span className="ml-4 text-white/70">Iga Tööstusharu</span>
            </h1>

            <div className="flex w-full flex-col gap-4 py-8">
              <ServiceTypesComponent
                title="Valitsus"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Landmark}
              />
              <ServiceTypesComponent
                title="telekommunikatsioon"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Phone}
              />
              <ServiceTypesComponent
                title="tervishoid"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Ambulance}
              />
              <ServiceTypesComponent
                title="krüpto"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Bitcoin}
              />
              <ServiceTypesComponent
                title="rahandus"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={HandCoins}
              />
              <ServiceTypesComponent
                title="fintech"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Cpu}
              />
              <ServiceTypesComponent
                title="energia"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={BatteryFull}
              />
              <ServiceTypesComponent
                title="õigusvaldkond"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ipsa placeat officia fugit possimus vero at exercitationem eaque consectetur, unde, quaerat ex reiciendis maxime voluptates praesentium accusamus ullam deleniti a! Commodi, rerum doloremque incidunt assumenda similique, error nostrum culpa dolorum, eligendi temporibus nulla sint officia voluptatum debitis molestias inventore!"
                Icon={Scale}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <section className="bg-gradient-to-br from-sky-950/80 to-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 md:gap-8">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-2">
                <span
                  className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-5xl ${pop.className}`}
                >
                  Avasta Ülim
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-white/70 md:text-5xl ${pop.className}`}
                >
                  Kaitse
                </span>
              </div>
              <p className="prose prose-base px-8 text-center text-white/70 md:prose-lg md:leading-loose">
                {`Kaitse oma kõige väärtuslikumaid varasid NeoSeci eliitluureteenustega. Võta meiega ühendust juba täna, et tagada ületamatu kaitse!`}
              </p>

              <a
                href="mailto:info@neosec.tech"
                className="rounded-md border border-white/40 bg-sky-600 px-16 py-4 text-sm font-bold uppercase text-white/70 duration-300 hover:bg-white hover:text-black md:text-lg"
              >
                KONTAKT
              </a>
            </div>
          </div>
        </section>
      </section>
      <footer className="flex items-center justify-center bg-zinc-950 p-8 text-white">
        <p className="uppercase tracking-widest">Copyright © 2025 NeoSec </p>
      </footer>
    </>
  );
}
