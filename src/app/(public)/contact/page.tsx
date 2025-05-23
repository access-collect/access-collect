import ContactForm from "@/app/components/form/contactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Access Collect",
  description: "Access Collect - Contactez-nous",
};

const ContactPage = () => {
  return (
    <>
      <div
        data-testid={"contactFormPage"}
        className="bg-transparentBrightOrange min-h-screen"
      >
        <h1 className="text-brightOrange text-center text-xl md:text-2xl lg:text-5xl pt-8 lg:pt-40 font-title font-bold tracking-widest">
          {"FORMULAIRE DE CONTACT"}
        </h1>
        <ContactForm />
      </div>
    </>
  );
};
export default ContactPage;
