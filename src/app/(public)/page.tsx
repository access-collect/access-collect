import { Metadata } from "next";
import WhyOurApplication from "./_components/homepage/WhyOurApplication";
import Presentation from "./_components/homepage/Presentation";
import Features from "./_components/homepage/Features";
import Benefits from "./_components/homepage/Benefits";
import AccessCollectNumber from "./_components/homepage/AccessCollectNumber";
import TrustUs from "./_components/homepage/TrustUs";
import ContactUs from "./_components/homepage/ContactUs";

export const metadata: Metadata = {
  title: "Access Collect",
  description: "Access Collect - votre outil pour gérer vos collectes",
};

export default function Home() {
  return (
    <>
      <Presentation />
      <WhyOurApplication />
      <Features />
      <Benefits />
      <AccessCollectNumber />
      <TrustUs />
      <ContactUs />
    </>
  );
}
