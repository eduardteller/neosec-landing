import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import pic2 from "../public/pexels-saksham-choudhary-109710-2036656.jpg";
// import pic2 from "../public/pexels-pixabay-60504.jpg";
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
// export const bgImageData = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23333333' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23555555'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`;
export const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23040404' width='11' height='11'/%3E%3Crect fill='%23050506' x='10' width='11' height='11'/%3E%3Crect fill='%23050608' y='10' width='11' height='11'/%3E%3Crect fill='%2306070a' x='20' width='11' height='11'/%3E%3Crect fill='%2306080b' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23070a0d' y='20' width='11' height='11'/%3E%3Crect fill='%23070b0f' x='30' width='11' height='11'/%3E%3Crect fill='%23080c10' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23090d11' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23090e13' y='30' width='11' height='11'/%3E%3Crect fill='%230a0f14' x='40' width='11' height='11'/%3E%3Crect fill='%230a0f15' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%230b1016' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%230b1117' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%230c1218' y='40' width='11' height='11'/%3E%3Crect fill='%230c1319' x='50' width='11' height='11'/%3E%3Crect fill='%230d131a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%230d141b' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%230d151c' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%230e151d' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%230e161e' y='50' width='11' height='11'/%3E%3Crect fill='%230e171f' x='60' width='11' height='11'/%3E%3Crect fill='%230f1720' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%230f1821' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%230f1922' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%230f1923' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%230f1a24' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%230f1a25' x='70' width='11' height='11'/%3E%3Crect fill='%230f1b26' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%230f1c27' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%230f1c29' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%230f1d2a' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%230f1d2b' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%230f1e2c' x='80' width='11' height='11'/%3E%3Crect fill='%230f1f2d' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%230f1f2e' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%230f202f' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230f2130' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230f2131' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230f2232' x='90' width='11' height='11'/%3E%3Crect fill='%230e2333' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230e2334' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230e2436' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230e2437' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230e2538' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230e2639' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230d263a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230d273b' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%230d283c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230d283d' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%230c293f' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%230c2a40' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%230c2a41' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230b2b42' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230b2c43' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%230a2c44' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%230a2d46' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23092e47' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23092e48' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23082F49' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`;
// export const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23020617' width='11' height='11'/%3E%3Crect fill='%23030718' x='10' width='11' height='11'/%3E%3Crect fill='%23040819' y='10' width='11' height='11'/%3E%3Crect fill='%23040919' x='20' width='11' height='11'/%3E%3Crect fill='%23050a1a' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23060b1b' y='20' width='11' height='11'/%3E%3Crect fill='%23060c1c' x='30' width='11' height='11'/%3E%3Crect fill='%23070d1c' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23080e1d' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23080f1e' y='30' width='11' height='11'/%3E%3Crect fill='%2309101f' x='40' width='11' height='11'/%3E%3Crect fill='%23091020' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%230a1120' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%230a1221' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%230a1322' y='40' width='11' height='11'/%3E%3Crect fill='%230b1323' x='50' width='11' height='11'/%3E%3Crect fill='%230b1424' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%230b1524' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%230c1525' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%230c1626' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%230c1727' y='50' width='11' height='11'/%3E%3Crect fill='%230c1728' x='60' width='11' height='11'/%3E%3Crect fill='%230c1829' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%230c1829' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%230c192a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%230c1a2b' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%230d1a2c' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%230d1b2d' x='70' width='11' height='11'/%3E%3Crect fill='%230d1b2e' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%230d1c2f' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%230d1d2f' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%230d1d30' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%230d1e31' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%230d1e32' x='80' width='11' height='11'/%3E%3Crect fill='%230d1f33' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%230d2034' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%230d2035' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230d2136' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230d2136' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230d2237' x='90' width='11' height='11'/%3E%3Crect fill='%230d2338' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230d2339' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230d243a' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230c253b' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230c253c' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230c263d' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230c263d' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230c273e' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%230c283f' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230b2840' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%230b2941' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%230b2a42' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%230b2a43' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230a2b44' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230a2c45' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%230a2c45' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23092d46' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23092e47' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23082e48' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23082F49' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`;
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
              {/* <h1
                className={`${pop.className} text-2xl font-semibold uppercase tracking-tight antialiased sm:text-3xl md:text-5xl lg:text-7xl`}
              >
                Kindlusta Oma Tulevik: Alusta Täna
              </h1> */}
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
              {/* <Link
                href="/services"
                className="border border-white/20 bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-sm"
              >
                teenused
              </Link> */}
              {/* <a
            href="mailto:info@neosec.tech"
            className="bg-transparent px-12 py-6 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black"
          >
            <span className="">services</span>
          </a> */}
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
          <div className="prose prose-lg mt-8 flex flex-col justify-center leading-loose text-white/80 md:mt-12">
            <p>
              {`NeoSec on ekspert kõrge panusega uurimistes, digitaalsetes ohuluureteenustes, jalajälgede kustutamises ja vara taastamises. Meie eliitspetsialistid ja tipptasemel tehnoloogia leiavad tõendid, mida teised ei näe. Kohandatud strateegiad, globaalne asjatundlikkus ja ulatuslik võrgustik tagavad teile kriitilised teadmised ja edu. Valige NeoSec – võimatu on meie standard!`}
            </p>
            {/* <p>
              {`NeoSec õnnestub seal, kus teised ebaõnnestuvad. Meie spetsialiseerumisvaldkondadeks on kõrge panusega valgekraede uurimised, digitaalsed ohuluureteenused, digitaalsete jalajälgede eemaldamine ja vara taastamine - saavutame seda, mida enamik peab võimatuks. Tipptasemel tehnoloogia ja eliitspetsialistide abil leiame üles kriitilised tõendid, mida teised lihtsalt ei suuda leida. Meie kohandatud strateegiad ühendavad põhjalikud tööstusalased teadmised, globaalse asjatundlikkuse ja rahvusvahelise võrgustiku, et paljastada varjatud tõed ning pakkuda vajalikke teostatavaid teadmisi, mis aitavad teil edu saavutada.`}
            </p> */}
          </div>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-8">
          <div className="flex w-full flex-col justify-center rounded-md border-2 border-white/60 lg:flex-row">
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

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-5xl py-24">
          <div className="flex w-full flex-col items-center justify-center gap-12 px-4 md:px-8">
            <h6 className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Võimatust reaalsuseks
            </h6>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {`Võimestame`}
              <span className="ml-4 text-white/70">Iga Tööstusharu</span>
            </h1>

            <div className="flex w-full flex-col gap-4">
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
              {/* <a
                href="mailto:info@neosec.tech"
                className="border border-white/20 bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-base"
              >
                võta meiega ühendust
              </a> */}
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
