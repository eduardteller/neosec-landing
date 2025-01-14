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
import ServiceTypesComponent from "../ServiceTypesComponent";

const FourthSection = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-5xl py-24">
        <div className="flex w-full flex-col justify-center gap-16 px-8">
          <div
            className="space-y-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <h6 className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
              Lahendused Kõigile
            </h6>
            <h1 className="space-x-2 text-xl font-semibold tracking-tight text-zinc-100 sm:space-x-4 sm:text-center sm:text-4xl md:text-5xl">
              <span>Võimestame</span>
              <span className="text-zinc-400">Iga Tööstusharu</span>
            </h1>
            <p className="prose prose-base max-w-4xl text-zinc-400 sm:prose-lg sm:text-center">
              {`NeoSec pakub tipptasemel luurelahendusi, mis annavad käegakatsutavaid tulemusi juriidikas, rahanduses, valitsuses, tervishoius, energias, tehnoloogias ja jaekaubanduses. Oleme teie usaldusväärne partner edu saavutamisel ja konkurentsieelise tagamisel. `}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
            className="flex w-full flex-row gap-4 max-sm:flex-col"
          >
            <div className="flex w-full basis-1/2 flex-col gap-4">
              <ServiceTypesComponent
                title="Valitsus"
                description="Aidates valitsusasutustel  ennetada riske kriitilistes otsustusprotsessides."
                Icon={Landmark}
              />
              <ServiceTypesComponent
                title="telekommunikatsioon"
                description="Täpne ülevaade ohustsenaariumidest ja andmekaitse tugevdamiseks."
                Icon={Phone}
              />
              <ServiceTypesComponent
                title="tervishoid"
                description="Patsiendiandmete turvalisus ja tervishoiuteenuste tõrgeteta toimimine."
                Icon={Ambulance}
              />
              <ServiceTypesComponent
                title="krüpto"
                description="Krüptovaluutade turvalisuse ja vastavuse tugevdamine."
                Icon={Bitcoin}
              />
            </div>
            <div className="flex w-full basis-1/2 flex-col gap-4">
              <ServiceTypesComponent
                title="rahandus"
                description="Tugimeetmed turvalise andmeanalüüsi ja finantskuritegude ennetamiseks."
                Icon={HandCoins}
              />
              <ServiceTypesComponent
                title="fintech"
                description="Innovaatilised lahendused finantstehnoloogia ettevõtete turvalisuse tagamiseks."
                Icon={Cpu}
              />
              <ServiceTypesComponent
                title="energia"
                description="Energiasektori kriitilise infrastruktuuri kaitsmine tänapäevaste ohtude eest."
                Icon={BatteryFull}
              />
              <ServiceTypesComponent
                title="õigusvaldkond"
                description="Toetame õiguskaitse ja vastavusnõuete täitmist kaasaegsete tehnoloogiatega."
                Icon={Scale}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
