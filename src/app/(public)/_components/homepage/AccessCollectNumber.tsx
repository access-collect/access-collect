import Image from "next/image";

const AccessCollectNumber = () => {
  return (
    <>
      <section
        className="text-midnightBlue pb-20 max-w-[1200px] md:mx-auto lg:mt-10"
        data-testid={"access-collect-number"}
      >
        <div className="flex justify-center">
          <h1 className="relative text-center text-2xl text-brightOrange font-section pt-8 md:pt-0 md:text-4xl">
            {"AccessCollect en chiffre"}
          </h1>
          <div className="block -mt-4 md:hidden"></div>
        </div>
        <div className="">
          <div className="flex justify-between mt-10 mx-4 md:mx-0 ">
            <div className="flex flex-col items-center w-1/2">
              <Image
                src="/poubelle.svg"
                alt={"image d'une poubelle"}
                width={250}
                height={1}
                className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
              />
              <p className="text-center text-lg md:text-2xl">
                100<span>T</span>
              </p>
              <p className="text-center md:text-lg">de déchets recyclés</p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src="/collecteur.svg"
                alt={"image d'un collecteur"}
                width={250}
                height={1}
                className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
              />
              <p className="text-center mt-2 text-lg md:text-2xl">25</p>
              <p className="text-center md:text-lg">
                collecteurs en situation de handicap engagés et soutenus
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessCollectNumber;
