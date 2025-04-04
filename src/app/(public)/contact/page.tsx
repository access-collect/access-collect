import FormContact from "@/app/components/form/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Access Collect",
  description: "Access Collect - Contactez-nous",
};

const ContactPage = () => {
  return (
    <>
      <h1 className="text-brightOrange text-center text-xl mt-14 font-title font-bold tracking-widest">
        FORMULAIRE DE CONTACT
      </h1>
      <FormContact />
    </>
  );
};
export default ContactPage;
