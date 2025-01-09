import CustomDivider from "@/components/CustomDivider";
import FifthSection from "@/components/Sections/FifthSection";
import FirstSection from "@/components/Sections/FirstSection";
import FourthSection from "@/components/Sections/FourthSection";
import Heading from "@/components/Sections/Heading";
import SecondSection from "@/components/Sections/SecondSection";
import ThirdSection from "@/components/Sections/ThirdSection";

export default function Home() {
  return (
    <>
      <Heading />
      <FirstSection />
      <CustomDivider />
      <SecondSection />
      <CustomDivider />
      <ThirdSection />
      <CustomDivider />
      <FourthSection />
      <FifthSection />
      <footer className="flex items-center justify-center bg-zinc-950 p-8 text-white">
        <p className="uppercase tracking-widest">Copyright © 2025 NeoSec </p>
      </footer>
    </>
  );
}
