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
import Accordion from "../../components/Accordion";
import pic4 from "../../public/digital-footprint.webp";
import pic2 from "../../public/digital-protection-concierge-service.webp";
import pic3 from "../../public/pexels-alesiakozik-6765371.jpg";
import pic1 from "../../public/pexels-pixabay-207580.jpg";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["700", "100", "200", "300", "400", "500", "600", "800", "900"],
});

const PageServices = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black text-zinc-100">
        {/* <div
          className="breathe absolute inset-0 z-0"
          style={{
            backgroundImage: bgImageData,
          }}
        ></div> */}
        <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
          <div>
            <Link
              href={"/"}
              className="text-xl font-bold uppercase tracking-tight text-zinc-100/60 antialiased duration-300 hover:text-zinc-100 md:text-3xl"
            >
              <span>NEO</span>
              <span className="text-zinc-100/40">SEC</span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-lg font-medium text-zinc-100/60">
              <Link
                className="tracking-tight duration-300 hover:text-zinc-100"
                href={"/en/services"}
              >
                ENG
              </Link>
              <span> | </span>
              <Link className="text-zinc-100" href={"/services"}>
                EST
              </Link>
            </div>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-zinc-400 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-sm"
            >
              KONTAKT
            </a>
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="w-fit border border-white/20 bg-black p-2 text-xs uppercase tracking-widest text-zinc-100 duration-300 hover:bg-transparent hover:text-zinc-100/60">
            teenused{" "}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-100 md:whitespace-nowrap md:text-5xl ${pop.className}`}
            >
              Avasta Meie
            </span>
            <span
              className={`text-4xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className}`}
            >
              Teenused
            </span>
          </div>
          <p className="prose prose-base max-w-3xl px-8 text-center leading-loose text-zinc-400">
            {`Saavuta Täielik Küberturbe Meisterlikkus meie kõikehõlmavate lahendustega. Alates digitaalse jalajälje eemaldamisest ja eritellimusel valmistatud digitaalse kaitse teenustest kuni arenenud küberohtude luureandmeteni - me tagame, et teie organisatsiooni digitaalne kindlus on läbimatu.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <EarthLock size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Küberohtude <br /> Luure
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section1"
              >
                Loe Lähemalt <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Shield size={36} className="text-zinc-100/40" />
              <p className="text-center text-lg font-medium">
                Digitaalse Kaitse Concierge-teenus
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section2"
              >
                Loe Lähemalt <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Fingerprint size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Digitaalse Jalajälje Eemaldamine
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section3"
              >
                Loe Lähemalt <ArrowUpRight />
              </a>
            </div>
            <div className="flex h-64 w-60 flex-col items-center gap-4 border-2 border-zinc-700 bg-gradient-to-b from-white/20 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-white hover:shadow-2xl">
              <Bitcoin size={36} className="text-zinc-100/40" />

              <p className="text-center text-lg font-medium">
                Küberuurimised ja Vara Tagasisaamine
              </p>
              <a
                className="flex items-center justify-center text-sm uppercase"
                href="#section4"
              >
                Loe Lähemalt <ArrowUpRight />
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
                  Küberohtude
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Luure
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Ettevõtte Kohaloleku Analüüs",
                    secondText: `Tuvastame turvameetmete vananenud nõrkused, lekkinud tundliku teabe ja potentsiaalsed ründevektorid, tagades teie digitaalse kindluse jäämise läbimatuks.`,
                  },
                  {
                    firstText: "Kokkupuute Hinnang",
                    secondText: `Kaitse oma juhtkonda SIM-kaardi vahetuse ja kommunikatsiooni ülevõtmise rünnakute eest. Meie ekspertide hinnang uurib põhjalikult avalikult kättesaadavat teavet ja tuvastab potentsiaalsed haavatavused, tagades, et teie kõrgemad ametnikud püsiksid sihitud ohtude eest kaitstud.`,
                  },
                  {
                    firstText: "Kõrgemate Ametnike Turvakontroll",
                    secondText: `Kaitske oma kõrgemaid ametnikke meie põhjalike kontode turvakontrollidega. Rakendame tugevaid meetmeid, nagu kahefaktoriline autentimine, kontrollime vananenud taastamisvõimalusi ja hindame parooli terviklikkust. Lisaks uurime häkkitud andmete otsingumootoreid, et avastada ja turvata lekkinud teavet. Tagage kõrgeima taseme kaitse oma kõrgeimatele meeskonnaliikmetele.`,
                  },
                  {
                    firstText: "Dark Webi Järelevalve",
                    secondText: `Ole küberohtudest sammu võrra ees meie kompromissitu dark webi järelevalvega. Jälgime mainimisi teie ettevõttest ja tundlikest andmetest, tuvastame andmelekked reaalajas ning profiilime ohutegijaid, kes teie ettevõtet sihivad. Tagage oma turvalisus proaktiivse luure ja sujuva kaitse abil.`,
                  },
                  {
                    firstText: "Andmelekkete Tuvastamine",
                    secondText: `Kaitske oma ettevõtet meie tipptasemel lekete tuvastamise teenustega. Uurime põhjalikult dark webi, et avastada teie ettevõttega seotud kompromiteeritud andmeid, võimaldades lekkeid kiirelt tuvastada ja analüüsida. Meie kiire reageerimine tagab kahju minimeerimise, hoides teie teabe turvalisena.`,
                  },
                  {
                    firstText: "Ohutegijate Profiilide Loomine",
                    secondText: `Sukeldume sügavale dark webi, et tuvastada ja analüüsida teie ettevõtet sihtivaid ründajaid, saades aru nende taktikast, tehnikatest ja protseduuridest (TTP). Varustage oma kaitset hindamatute teadmistega ja püsige potentsiaalsetest ohtudest sammu võrra ees.`,
                  },
                  {
                    firstText:
                      "Kirjavigade Kuritarvitused ja Homoglüüfi Rünnakud",
                    secondText: `Peatage andmepüügiohud nende tekkimisel meie arenenud petlike domeeninimede tuvastamise abil. Tuvastame ja neutraliseerime riske, mis tulenevad ründajatest, kes kasutavad sarnaseid tähemärke või peeneid kirjavigu. Kaitske oma töötajaid ja kliente, ennetades pahatahtlikke kampaaniaid enne, kui need ründavad.`,
                  },
                  {
                    firstText: "Brändi Kaitse",
                    secondText: `Tuvastame ja kõrvaldame võltsveebisaidid, sotsiaalmeedia profiilid ja ohtlikud digitaalsed ressursid, tagades, et teie bränd ja intellektuaalomand jäävad laitmatuks ja austatud.`,
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
                  Digitaalse Kaitse
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Concierge-teenus
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Personaalne Digitaalne Turvalisus",
                    secondText: `Kohandatud turvalahendused, mis on loodud iga inimese unikaalsete riskidega toimetulekuks. Meie mõõtmed tagavad isikliku kaitse, mis on sama eriline kui teie ise.`,
                  },
                  {
                    firstText: "Terviklik Kaitse",
                    secondText: `Ulatuslikud veebiuurimised ja taustakontrollid, et kaitsta teie digitaalseid varasid ja tagada teie isiklik turvalisus. Usaldage meid, et kaitsta seda, mis on teie jaoks kõige olulisem, jättes ühegi kivi pööramata.`,
                  },
                  {
                    firstText: "Dark Webi Jälgimine",
                    secondText: `Kaitske end identiteedivarguste ja andmelekete eest meie dark webi skaneerimisteenustega. Otsime väsimatult lekkinud teavet, et tagada teie isiklik ja ettevõtte privaatsus jääks puutumatuks ja turvaliseks.`,
                  },
                  {
                    firstText: "Teadlikkus Andmepüügipettustest",
                    secondText: `Ole küberkurjategijatest sammu võrra ees meie ekspertide andmepüügipettuste tuvastamise ja ennetamise teenustega. Me õpetame teile, kuidas petlikke skeeme tuvastada ning varustame teid tööriistade ja teadmistega nende vältimiseks, tagades teie digitaalse turvalisuse.`,
                  },
                  {
                    firstText: "Kodu Võrgu Turvamine",
                    secondText: `Muutke oma kodu digitaalseks kindluseks meie täiustatud võrgu turvateenustega. Me uuendame kriitilisi seadeid, aktiveerime tugeva krüptimise ja tagame õigeaegsed püsivara uuendused, et kaitsta teie koduvõrku võimalike ohtude eest.`,
                  },
                  {
                    firstText: "Kaitse Varastamislogide Vastu",
                    secondText: `Varustage ennast teadmistega varastamislogide kohta, ööpäevaringse jälgimise ja tõhusa kaitsega pahavara vastu. Usaldage meid oma digitaalse keskkonna turvalisuse tagamisel.`,
                  },
                  {
                    firstText: "Sotsiaalmeedia Privaatsusseaded",
                    secondText: `Hoia oma digitaalne elu turvalisena meie regulaarsete privaatsusseadete ülevaatuste, strateegiatega tundliku teabe jagamise vähendamiseks ja nõuannetega usaldusväärsete sõbrakutsete haldamiseks. Jää kontrolli alla ja kaitse seda, mis on sulle olulisim.`,
                  },
                  {
                    firstText: "Tarkvara Uuendused",
                    secondText: `Kaitse ja hoia oma seadmeid sujuvalt töötamas meie proaktiivse lähenemisega turvapaikadele, jõudluse parandustele ja veaparandustele. Automatiseeri uuendused, et olla alati kaitstud ja optimeeritud, ilma midagi ise tegemata.`,
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
                  Digitaalse Jalajälje
                </span>
                <span
                  className={`text-3xl font-semibold tracking-tight text-zinc-400 ${pop.className} antialiased`}
                >
                  Eemaldamine
                </span>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Jälgi Oma Digitaalset Jalajälge",
                    secondText: `Püsi sammu võrra ees meie ennetavate isikuandmete audititega. Me uurime internetti, et tuvastada kõik avalikult kättesaadavad andmed ja võimalikud ohud, luues samal ajal terviklikud teavitused ja digitaalsed jälgijad. Jää informeerituks ja kaitstuks, kui me jälgime uusi mainimisi ja ilmuvat teavet sinu kohta reaalajas.`,
                  },
                  {
                    firstText: "Eemalda Soovimatu Teave",
                    secondText: `Kaitse oma privaatsust meie põhjalike andmete eemaldamisteenustega. Me kontakteerume veebisaitide, andmemüüjate ja sotsiaalmeedia platvormidega, et taotleda sinu isikuandmete täielikku kustutamist, tagades, et sinu digitaalne jalajälg on tõhusalt kustutatud.`,
                  },
                  {
                    firstText: "Halda Oma Veebikuvandit",
                    secondText: `Me seadistame sinu privaatsussätteid, anname juhiseid tundliku teabe jagamise vähendamiseks ja rakendame tugevaid paroole koos kahefaktorilise autentimisega. Tõsta oma digitaalne kaitse järgmisele tasemele.`,
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
                  Küberuurimised ja Vara{" "}
                  <span
                    className={`text-3xl font-semibold tracking-tight text-zinc-400 md:block ${pop.className} antialiased`}
                  >
                    Tagasisaamine
                  </span>
                </h2>
              </div>
              <Accordion
                items={[
                  {
                    firstText: "Aitame Ohvritel Varasid Tagasi Saada",
                    secondText: `Meie ekspertide tiim tuvastab kahjude põhjustajad ja varustab teid tervikliku ressursi- ja juhendite paketiga, et nõuda tagasi teie varastatud varad. Seiske kindlalt koos meie toetusega, kui me üheskoos navigeerime vara tagasisaamise keerukustes.`,
                  },
                  {
                    firstText: "Andmepüügikampaaniate Paljastamine",
                    secondText: `Andmepüügikampaaniad muutuvad murettekitavalt keerukaks, sihiks nii eraisikud kui ka ettevõtted. NeoSecis oleme spetsialiseerunud nende petlike skeemide paljastamisele. Meie põhjalikud uurimised paljastavad petturid ja nende taktikad, andes teile teadmised, kuidas end tõhusalt kaitsta. Usaldage NeoSeci, et tuvastada varjatud ohud ja püsida sammu võrra ees.`,
                  },
                  {
                    firstText: "Pettuste Tõe Paljastamine",
                    secondText: `Me paljastame petturite operatsioonid ja võrgustikud, tuues päevavalgele nende varjatud skeemid. Meie ekspertide juhendamine viib ohvrid selgete ja praktiliste sammudeni oma varade taastamiseks, tagades õigluse ja meelerahu.`,
                  },
                  {
                    firstText: "Teie Kaitse Finantspettuste Vastu",
                    secondText: `NeoSec on teie parim kaitse finantspettuste vastu. Meie teadmiste ja kindla toetusega saate tagasi nõuda, mis kuulub õigustatult teile. Me tuvastame ja paljastame petturid, andes teile võimaluse taastada kontroll ja taastada oma finantsturvalisus. Usaldage NeoSeci oma varade kaitsmiseks ja taastamiseks.`,
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
                Kindlusta Oma Digitaalne
              </span>
              <span
                className={`text-3xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className} antialiased`}
              >
                Kuningriik
              </span>
            </div>
            <p className="prose prose-sm px-8 text-center text-zinc-400 md:prose-base md:leading-loose">
              {`Tehke koostööd NeoSeciga, et saada ületamatuid küberturvalisuse lahendusi ja kindlustage oma digitaalne kohalolek juba täna. Kogege meie tipptasemel kaitsega võrdlematut meelerahu.`}
            </p>
            <a
              href="mailto:info@neosec.tech"
              className="border border-white/20 bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-zinc-400 duration-300 hover:bg-white hover:text-black md:px-12 md:py-6 md:text-base"
            >
              Võta Meiega Ühendust
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
