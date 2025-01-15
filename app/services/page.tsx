import FifthSection from "@/components/landing-page/FifthSection";
import SectionComponent from "@/components/services-page/SectionComponent";
import ServicesHeading from "@/components/services-page/ServicesHeading";
import Footer from "@/components/shared/Footer";
import { servicesPage } from "@/helpers/est";
import pic4 from "../../public/digital-footprint.webp";
import pic2 from "../../public/digital-protection-concierge-service.webp";
import pic3 from "../../public/pexels-alesiakozik-6765371.jpg";
import pic1 from "../../public/pexels-pixabay-207580.jpg";

const PageServices = () => {
  return (
    <>
      <ServicesHeading
        heading={servicesPage.heading}
        services={servicesPage.services}
        servicesButton={servicesPage.servicesButton}
        lang="est"
      />
      <section className="relative bg-zinc-950">
        <div className="absolute right-0 top-0 h-2 w-full bg-zinc-950" />

        <SectionComponent
          id="section1"
          text={servicesPage.firstSection}
          image={{ data: pic1, alt: "cybersecurity" }}
        />
        <SectionComponent
          id="section2"
          text={servicesPage.secondSection}
          image={{ data: pic2, alt: "cybersecurity" }}
          reverse={true}
        />
        <SectionComponent
          id="section3"
          text={servicesPage.thirdSection}
          image={{ data: pic4, alt: "cybersecurity" }}
        />
        <SectionComponent
          id="section4"
          text={servicesPage.fourthSection}
          image={{ data: pic3, alt: "cybersecurity" }}
          reverse={true}
        />
      </section>

      <FifthSection lang="est" text={servicesPage.finalSection} />

      <Footer />
    </>
  );
};

export default PageServices;
