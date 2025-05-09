"use client";
import OrangeButton from "@/app/components/button/orangeButton";
import { redirectToHomepage } from "@/lib/actions";

const ForgottenPasswordError = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-brightOrange uppercase">{"Oups.. "}</h1>
      <p className="text-midnightBlue text-center px-6 py-4">
        {"Il semblerait qu'un problème soit survenu."}
      </p>
      <OrangeButton label={"ACCUEIL"} onClick={redirectToHomepage} />
    </div>
  );
};

export default ForgottenPasswordError;
