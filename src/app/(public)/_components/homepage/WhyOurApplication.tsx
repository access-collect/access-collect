import Image from "next/image";

const WhyOurApplication = () => {
  return (
    <>
      <section className="text-midnightBlue mt-24 mx-auto max-w-screen-xl md:mt-10 lg:mt-12">
        <div className="flex justify-center items-center h-24">
          <h1 className="mx-2 relative text-center text-2xl text-brightOrange font-section md:mx-4 md:text-4xl">
            <span className="before:hidden md:before:block md:before:content-[''] md:before:absolute md:before:border md:before:border-midnightBlue md:before:w-16 md:before:w-24 md:before:bottom-0">
              {"Pourquoi"}
            </span>
            {" choisir notre application ?"}
          </h1>
        </div>

        <div className="mt-10 max-w-[1200px] lg:flex lg:flex-wrap lg:justify-center lg:mx-auto xl:mt-10  ">
          <div className="flex justify-center my-8 lg:mt-12">
            <Image
              src="/mobile.png"
              alt={"exemple d'une vue mobile sur un téléphone"}
              width={180}
              height={300}
              className="w-[180px] h-[300px] lg:w-80 lg:h-[600px]"
            />
          </div>
          <div className="mx-4 pt-10">
            <div className="flex items-start my-4 mx-2 md:mx-10">
              <Image
                className="block -mt-2 md:block lg:hidden"
                src="/puceTri.svg"
                alt={"image puce tri sélectif"}
                width={50}
                height={5}
              />
              <Image
                className="hidden lg:block lg:absolute lg:ml-16  lg:mt-6 lg:z-0 xl:ml-24 xl:mt-20"
                src="/roundedDecoration1.png"
                alt={"élément décoratif jaune"}
                width={180}
                height={130}
              />
              <p className="ml-4 lg:text-xl lg:shadow-md lg:shadow-lightOliveGreen lg:rounded-md lg:px-8 lg:py-4 md:w-[600px] lg:ml-28 lg:mt-24 lg:z-10 lg:bg-white xl:mt-40 xl:ml-36">
                {"Accessible à tous, simple et intuitif"}
              </p>
            </div>
            <div className="flex items-start mt-4 md:mt-8 mx-2 md:mx-10">
              <Image
                className="block -mt-2 md:block lg:hidden"
                src="/puceTri.svg"
                alt={"image puce tri sélectif"}
                width={50}
                height={5}
              />
              <Image
                className="hidden lg:block lg:absolute lg:ml-16 lg:z-0 lg:ml-[600px] xl:mt-20"
                src="/roundedDecoration2.png"
                alt={"élément décoratif jaune"}
                width={200}
                height={200}
              />
              <p className="ml-4 w-80 lg:text-xl lg:shadow-md lg:shadow-lightOliveGreen lg:rounded-md lg:px-8 lg:py-4 lg:w-[600px] lg:mt-12 lg:z-10 lg:bg-white lg:ml-28 xl:mt-32">
                {
                  "Favorisez l’inclusion sociale en collaborant avec des collecteurs en situation de handicap, formés et motivés."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyOurApplication;
