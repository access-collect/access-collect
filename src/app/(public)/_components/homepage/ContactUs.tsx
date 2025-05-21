import LogButton from "@/app/components/button/logButton";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section
        className="text-midnightBlue pb-20 flex flex-col items-center justify-center"
        data-testid={"contact-us"}
      >
        <Image
          src="/arrowAnimate.gif"
          alt={"flèche animée insistant sur la phrase n'hésitez plus!"}
          width={200}
          height={1}
          className="flex justify-center w-[100px] md:w-[200px] "
        />
        <div className="shadow-lg rounded-lg shadow-transparentMidnightBlue -mt-12 mx-6 md:mx-20 ">
          <h1 className="text-center flex items-center justify-center relative text-2xl font-section py-10 bg-transparentLightOrange mb-10 md:text-6xl before:absolute before:content-[''] before:w-24 before:border before:border-oliveGreen before:bottom-8">
            {"N'hésitez plus!"}
          </h1>
          <div className="h-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-normal md:justify-center md:mx-auto  md:max-w-6xl">
            <p className="w-[80%] tracking-widest text-lg mb-10 md:text-3xl relative lg:leading-[2] ">
              {
                "Dynamiser la gestion de votre collecte de déchets grâce à notre solution simple, fiable et flexible"
              }
            </p>
            <div className="mt-0 mb-10">
              <LogButton
                label={"NOUS CONTACTER"}
                route="/contact"
                padding={5}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
