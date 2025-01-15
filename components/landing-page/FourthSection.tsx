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
import ServiceTypesComponent from "../shared/ServiceTypesComponent";

interface Props {
  text: {
    topText: string;
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
    services: {
      title: string;
      description: string;
    }[];
  };
}

const FourthSection = ({ text }: Props) => {
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
            <h6 className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-center sm:text-sm">
              {text.topText}
            </h6>
            <h1 className="space-x-2 whitespace-nowrap text-2xl font-semibold tracking-tight text-zinc-100 sm:text-center sm:text-4xl md:text-5xl lg:space-x-4">
              <span>{text.titleFirst}</span>
              <span className="text-zinc-400">{text.titleSecond}</span>
            </h1>
            <p className="prose prose-base max-w-4xl text-zinc-400 sm:prose-lg sm:text-center">
              {text.paragraph}
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
                title={text.services[0].title}
                description={text.services[0].description}
                Icon={Landmark}
              />
              <ServiceTypesComponent
                title={text.services[1].title}
                description={text.services[1].description}
                Icon={Phone}
              />
              <ServiceTypesComponent
                title={text.services[2].title}
                description={text.services[2].description}
                Icon={Ambulance}
              />
              <ServiceTypesComponent
                title={text.services[3].title}
                description={text.services[3].description}
                Icon={Bitcoin}
              />
            </div>
            <div className="flex w-full basis-1/2 flex-col gap-4">
              <ServiceTypesComponent
                title={text.services[4].title}
                description={text.services[4].description}
                Icon={HandCoins}
              />
              <ServiceTypesComponent
                title={text.services[5].title}
                description={text.services[5].description}
                Icon={Cpu}
              />
              <ServiceTypesComponent
                title={text.services[6].title}
                description={text.services[6].description}
                Icon={BatteryFull}
              />
              <ServiceTypesComponent
                title={text.services[7].title}
                description={text.services[7].description}
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
