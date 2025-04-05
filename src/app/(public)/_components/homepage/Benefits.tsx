import Image from "next/image";
import { PiArrowBendDownRightBold } from "react-icons/pi";

const Benefits = () => {
  return (
    <>
      <section className="text-midnightBlue pt-5 pb-20 mt-24 bg-transparentImperialYellow">
        <div className="flex flex-col items-center">
          <div className="mx-6 mt-2 max-w-screen-xl md:flex md:flex-col md:items-start md:mt-10 ">
            <div className="flex">
              <div className="">
                <h1 className="relative text-center text-brightOrange text-3xl font-section md:text-4xl lg:text-4xl md:text-left md:w-full">
                  {"Les bénéf"}
                  <span className="before:content-[''] before:absolute before:border before:border-oliveGreen before:w-24 before:bottom-0">
                    {"ices"}
                  </span>
                </h1>
              </div>
            </div>

            <div className="ml-0 lg:ml-10">
              {/* COST REDUCTION */}
              <div className="flex mt-12">
                <PiArrowBendDownRightBold className="text-oliveGreen text-4xl" />
                <h2 className="text-xl ml-2 md:text-2xl">
                  {"REDUCTION DES COÛTS"}
                </h2>
              </div>

              <div className="mt-6 flex items-center justify-center gap-x-24">
                <div className="hidden md:block">
                  <Image
                    src="/cout.svg"
                    alt={
                      "image montrant un escalier de cube avec une flèche pour montrer le coût qui diminue"
                    }
                    width={250}
                    height={1}
                    className="w-[180px] h-[180px]"
                  />
                </div>
                <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]">
                  <span className="text-brightOrange text-bold">
                    {"Optimisez"}
                  </span>
                  {" la gestion de vos déchets et "}
                  <span className="text-brightOrange text-bold">
                    {"réduisez vos coûts"}
                  </span>
                  {" opérationnels"}
                </p>
              </div>

              {/* POSITIVE ENVIRONMENTAL IMPACT*/}
              <div className="flex mt-24">
                <PiArrowBendDownRightBold className="text-lightOrange text-4xl" />
                <h2 className="text-xl ml-2 md:text-2xl">
                  {"IMPACT ENVIRONNEMENTAL POSITIF"}
                </h2>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-24">
                <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]">
                  <span className="text-brightOrange text-bold">
                    {"Mesurez"}
                  </span>
                  {" et "}
                  <span className="text-brightOrange text-bold">
                    {"améliorez"}
                  </span>
                  {" votre contribution à la réduction des déchets"}
                </p>
                <div className="hidden md:block">
                  <Image
                    src="/impactEnvironnement.svg"
                    alt={"puce pour liste des différents bénéfices"}
                    width={250}
                    height={1}
                    className="w-[180px] h-[180px]"
                  />
                </div>
              </div>

              {/* IMPROVED BRANDING*/}
              <div className="flex mt-24">
                <PiArrowBendDownRightBold className="text-strongYellow text-4xl" />
                <h2 className="text-xl ml-2 md:text-2xl">
                  {"AMELIORATION DE L’IMAGE DE MARQUE"}
                </h2>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-24">
                <div className="hidden md:block">
                  <Image
                    src="/imageMarque.svg"
                    alt={"puce pour liste des différents bénéfices"}
                    width={250}
                    height={1}
                    className="w-[180px] h-[180px]"
                  />
                </div>
                <p className="text-normal w-full md:text-xl md:w-[600px] md:lg:leading-[2]">
                  <span className="text-brightOrange text-bold">
                    {"Renforcez votre engagement social"}
                  </span>
                  {" et "}
                  <span className="text-brightOrange text-bold">
                    {"écologique"}
                  </span>
                  {" auprès de vos partenaires et clients"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
