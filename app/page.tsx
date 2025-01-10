import CustomDivider from "@/components/CustomDivider";
import FifthSection from "@/components/landing-page/FifthSection";
import FirstSection from "@/components/landing-page/FirstSection";
import FourthSection from "@/components/landing-page/FourthSection";
import Heading from "@/components/landing-page/Heading";
import SecondSection from "@/components/landing-page/SecondSection";
import ThirdSection from "@/components/landing-page/ThirdSection";

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
      <footer className="flex items-center justify-center bg-zinc-950 p-8 text-zinc-100">
        <p className="uppercase tracking-widest">Copyright © 2025 NeoSec </p>
      </footer>
    </>
  );
}
