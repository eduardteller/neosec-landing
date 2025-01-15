import Heading from "@/components/contact-page/ContactHeading";
import ContactSection from "@/components/contact-page/ContactSection";
import Footer from "@/components/shared/Footer";
import { contactPage } from "@/helpers/est";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeoSec - Kontakt",
  description: "Küberturbelahendused tulevikule",
  keywords: [
    "cybersecurity",
    "infosec",
    "neosec",
    "future",
    "defence",
    "offence",
    "security",
    "secure",
    "securely",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  const heading = contactPage.heading;
  const mainSection = contactPage.mainSection;
  const form = contactPage.form;

  return (
    <>
      <Heading text={heading} />
      <ContactSection main={mainSection} form={form} />
      <Footer />
    </>
  );
};

export default page;
