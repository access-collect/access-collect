import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="text-midnightBlue mt-24">
        <div className="flex justify-center items-center -ml-2 bg-transparentOliveGreen rounded-r-[50px] w-[90%] rotate-6 md:rotate-3 md:-ml-4">
          <h1 className="text-center text-2xl text-brightOrange font-section py-10 -rotate-6 md:py-10 md:text-4xl md:-rotate-3">
            {"Les fonctionnalités"}
          </h1>
        </div>

        <div className="-mt-6 mx-auto max-w-screen-xl md:mt-10 lg:mt-12 ">
          <div className="flex-none gap-x-0 md:flex md:justify-between md:gap-x-20">
            {/* Plan */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="mt-10 flex justify-start md:mt-auto">
                  <Image
                    src="/planifier.svg"
                    alt={
                      "image représentant une personne qui planifie ses tâches"
                    }
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] relative -ml-8 mb-auto md:ml-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className=" absolute top-20 left-40 bg-white text-center text-lightOrange text-2xl shadow-md shadow-lightOrange w-44 h-11 pt-1 mt-0 md:static">
                    {"PLANIFIER"}
                  </h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">
                  {
                    "Planifiez et anticipez vos collectes avec une gestion centralisée"
                  }
                </p>
              </div>
            </div>

            {/* Write*/}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="relative flex justify-end">
                  <Image
                    src="/saisir.svg"
                    alt={
                      "image représentant une personne qui saisie sur un ordinateur portable"
                    }
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] mb-auto -mr- md:mr-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className="absolute top-28 left-10 bg-white text-center text-oliveGreen text-2xl shadow-md shadow-oliveGreen w-44 h-11 pt-1 mt-0 md:static">
                    {"SAISIR"}
                  </h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">
                  {
                    "Gagnez du temps sur la collecte et la saisie de vos données"
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="flex-none gap-x-0 md:flex md:justify-center md:gap-x-20">
            {/* Client Access */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="mt-10 flex justify-start md:mt-auto">
                  <Image
                    src="/accesClient.svg"
                    alt={
                      "image représentant une personne qui tourne une horloge pour représenter le temps qui passe"
                    }
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] relative -ml-8 mb-auto md:ml-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className=" absolute top-28 left-36 bg-white text-center text-strongYellow text-2xl shadow-md shadow-imperialYellow w-52 h-11 pt-1 mt-0 md:static md:mt-2">
                    {"ACCES CLIENT"}
                  </h2>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">
                  {
                    "Offrez à vos clients une vision en temps réel des collectes grâce à un tableau de bord intuitif."
                  }
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <div className="relative md:flex md:flex-col md:items-center">
                <div className="flex justify-end">
                  <Image
                    src="/statistiques.svg"
                    alt={
                      "image représentant une personne qui saisie sur un ordinateur portable"
                    }
                    width={250}
                    height={1}
                    className="w-[300px] h-[280px] mb-auto -mr-8 md:mr-0 md:-mb-14"
                  />
                </div>
                <div>
                  <h2 className="absolute top-28 left-6 bg-white text-center text-midnightBlue text-2xl shadow-md shadow-transparentMidnightBlue w-52 h-11 pt-1 mt-0 md:static">
                    {"STATISTIQUES"}
                  </h2>
                </div>
              </div>
              <div className="">
                <p className="text-midnightBlue mx-4 -mt-12 md:mt-4">
                  {
                    "Recevez des rapports détaillés sur vos activités de recyclage et votre impact écologique"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
