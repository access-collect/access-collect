import SliderTrustHome from "../slider/sliderTrust/Slider";

const TrustUs = () => {
  return (
    <>
      <section
        className="text-midnightBlue pb-20 bg-transparentOliveGreen"
        data-testid={"trust-us"}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <h1 className="relative mx-4 text-2xl font-section mt-8 md:text-4xl">
              {"Ils nous ont fait "}
              <span className=" relative text-brightOrange inline-block after:absolute after:content-[''] after:border after:border-oliveGreen after:w-24 after:right-0 after:bottom-0">
                {"confiance"}
              </span>
            </h1>
          </div>
          <div className="mt-14 md:mt-28">
            <SliderTrustHome />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustUs;
