import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { servicesSVG2 } from "@/helpers/constants";
import {
  ArrowUpRight,
  Bitcoin,
  EarthLock,
  Fingerprint,
  Shield,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
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
      <section className="relative min-h-screen bg-zinc-950 text-zinc-100">
        <div
          className="breathe absolute inset-0 z-0 bg-contain blur-sm"
          style={{
            backgroundImage: servicesSVG2,
          }}
        />
        <Navbar />
        <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
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
          <p className="prose prose-lg max-w-3xl px-8 text-center leading-loose text-zinc-400 max-md:prose-base">
            {`Terviklikud küberlahendused teie ettevõtte kaitsmiseks ja tugevdamiseks.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <EarthLock
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

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
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Shield
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />
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
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Fingerprint
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

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
            <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
              <Bitcoin
                size={36}
                className="text-zinc-500 duration-300 group-hover:text-sky-600"
              />

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
                  Kindlusta Oma Digitaalne
                </span>
                <span
                  className={`font-semibold tracking-tight text-zinc-400 ${pop.className}`}
                >
                  Kuningriik
                </span>
              </div>
              <p className="prose prose-base px-8 text-center text-zinc-400 md:prose-lg md:leading-loose">
                {`Tehke koostööd NeoSeciga, et saada ületamatuid küberturvalisuse lahendusi ja kindlustage oma digitaalne kohalolek juba täna. Kogege meie tipptasemel kaitsega võrdlematut meelerahu.`}
              </p>

              <a
                href="mailto:info@neosec.tech"
                className="rounded-md bg-sky-600 px-16 py-4 text-sm font-bold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950 md:text-lg"
              >
                Võta Meiega Ühendust
              </a>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default PageServices;
