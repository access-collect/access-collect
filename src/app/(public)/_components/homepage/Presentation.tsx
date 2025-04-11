import Image from "next/image";
import LoginCollectButton from "../LoginCollectButton";
import { TbLoaderQuarter } from "react-icons/tb";
import LogButton from "@/app/components/button/logButton";

const Presentation = () => {
  return (
    <>
      {/* connection section for the collector in mobile version only */}
      <LoginCollectButton />

      <section className="text-midnightBlue lg:bg-[url('/backgroundHomepage.svg')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
        <div className="lg:mx-10 lg:flex lg:items-center xl:mx-24">
          {/* left part */}
          <div className="w-full lg:flex lg:flex-col lg:justify-around ">
            <div className="h-56 mt-10 mb-20 mx-8 flex flex-col lg:h-auto lg:mx-0 ">
              <TbLoaderQuarter className="text-oliveGreen mt-0 ml-0 text-5xl lg:text-7xl lg:ml-2 lg:-mt-4" />
              <p className="relative text-xl ml-0 pl-8 -mt-6 font-section md:absolute md:text-2xl lg:mt-4 lg:ml-16 lg:text-3xl lg:leading-[2] lg:w-1/2 lg:pr-40 xl:max-w-[70%] 2xl:max-w-[90%]">
                {
                  "Optimisez la collecte des déchets en entreprise avec une solution"
                }
                <span className="text-brightOrange">{" inclusive"}</span> {"et"}{" "}
                <span className="text-brightOrange">{"écologique"}</span>
              </p>
            </div>
            <div className="hidden lg:block lg:mt-44 lg:mx-16">
              <LogButton
                label={"Demander une démo"}
                route="/contact"
                padding={4}
              />
            </div>
            <div className="bg-transparentImperialYellow lg:bg-transparent">
              <div className="bg-oliveGreen relative lg:hidden">
                <Image
                  className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] md:w-[70%] lg:w-[80%]"
                  src="/containeurs.svg"
                  alt={"photo de poubelle"}
                  width={1}
                  height={1}
                />
              </div>
              <p className="mx-10 pt-24 relative text-md lg:pt-16 lg:w-full lg:text-2xl lg:max-w-1/2 lg:leading-[2] lg:mx-16 xl:max-w-[70%] 2xl:max-w-[90%]">
                {
                  "Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes en situation de handicap."
                }
              </p>
              <div className="block flex mt-10 pb-10 justify-center lg:hidden">
                <LogButton
                  label={"Demander une démo"}
                  route="/contact"
                  padding={2}
                />
              </div>
            </div>
          </div>

          {/* right part */}

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:mt-12 lg:w-1/2">
            {/* Image of the trash can*/}
            <Image
              className=" max-w-[500px] xl:max-w-[1000px]"
              src="/containeurs.svg"
              alt={"photo de poubelle"}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
