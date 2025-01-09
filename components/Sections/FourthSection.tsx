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
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:px-8">
          <h6 className="text-sm font-bold uppercase tracking-widest text-sky-600">
            Lahendused Kõigile
          </h6>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {`Võimestame`}
            <span className="ml-4 text-white/70">Iga Tööstusharu</span>
          </h1>

          <p className="prose prose-lg max-w-4xl text-center text-white/70">
            {`NeoSec pakub tipptasemel luurelahendusi, mis annavad käegakatsutavaid tulemusi juriidikas, rahanduses, valitsuses, tervishoius, energias, tehnoloogias ja jaekaubanduses. Oleme teie usaldusväärne partner edu saavutamisel ja konkurentsieelise tagamisel. `}
          </p>

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
  );
};

export default FourthSection;
