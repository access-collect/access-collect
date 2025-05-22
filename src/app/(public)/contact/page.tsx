import ContactForm from "@/app/components/form/contactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - Access Collect",
  description: "Access Collect - Contactez-nous",
};

const ContactPage = () => {
  return (
    <>
      <div className="relative min-h-screen ">
        <div className="absolute inset-0 ">
          <Image
            src="/backgroundContact.jpg"
            alt="background"
            layout="fill"
          ></Image>

          <div className="relative">
            <h1 className="text-brightOrange text-center text-xl mt-8 font-title font-bold tracking-widest">
              {"FORMULAIRE DE CONTACT"}
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
