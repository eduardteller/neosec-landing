import FifthSection from "@/components/landing-page/FifthSection";
import FirstSection from "@/components/landing-page/FirstSection";
import FourthSection from "@/components/landing-page/FourthSection";
import Heading from "@/components/landing-page/LandingHeading";
import SecondSection from "@/components/landing-page/SecondSection";
import ThirdSection from "@/components/landing-page/ThirdSection";
import CustomDivider from "@/components/shared/CustomDivider";
import Footer from "@/components/shared/Footer";
import { landingPage } from "@/helpers/en";

export default function Home() {
  return (
    <>
      <Heading lang={"eng"} text={landingPage.heading} />
      <FirstSection text={landingPage.firstSection} />
      <CustomDivider />
      <SecondSection text={landingPage.secondSection} />
      <CustomDivider />
      <ThirdSection text={landingPage.thirdSection} />
      <CustomDivider />
      <FourthSection text={landingPage.fourthSection} />
      <FifthSection lang={"eng"} text={landingPage.fifthSection} />
      <Footer />
    </>
  );
}
