"use client";
import OrangeButtonRedirect from "@/app/components/button/orangeButtonRedirect";
import { useRouter } from "next/navigation";

const ForgottenPasswordError = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-brightOrange uppercase">{"Oups.. "}</h1>
      <p className="text-midnightBlue text-center px-6 py-4">
        {"Il semblerait qu'un problème soit survenu."}
      </p>
      <OrangeButtonRedirect label={"ACCUEIL"} onClick={handleRedirect} />
    </div>
  );
};

export default ForgottenPasswordError;
