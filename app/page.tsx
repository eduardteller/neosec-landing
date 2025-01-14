import CustomDivider from "@/components/CustomDivider";
import FifthSection from "@/components/landing-page/FifthSection";
import FirstSection from "@/components/landing-page/FirstSection";
import FourthSection from "@/components/landing-page/FourthSection";
import Heading from "@/components/landing-page/Heading";
import SecondSection from "@/components/landing-page/SecondSection";
import ThirdSection from "@/components/landing-page/ThirdSection";
import Footer from "@/components/shared/Footer";
import { landingPage } from "@/helpers/est";

export default function Home() {
  return (
    <>
      <Heading text={landingPage.heading} />
      <FirstSection text={landingPage.firstSection} />
      <CustomDivider />
      <SecondSection text={landingPage.secondSection} />
      <CustomDivider />
      <ThirdSection text={landingPage.thirdSection} />
      <CustomDivider />
      <FourthSection text={landingPage.fourthSection} />
      <FifthSection text={landingPage.fifthSection} />
      <Footer />
    </>
  );
}
