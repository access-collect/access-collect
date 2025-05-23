"use client";
import OrangeButtonRedirect from "@/app/components/button/orangeButtonRedirect";
import { useRouter } from "next/navigation";

const ForgottenPasswordError = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/forgotten-password");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-brightOrange uppercase">{"Le lien a expiré"}</h1>
      <p className="text-midnightBlue text-center px-6 py-4">
        {
          "Il semblerait que le lien de réinitialisation soit expiré. Si vous souhaitez en générer un nouveau cliquez ici : "
        }
      </p>
      <OrangeButtonRedirect label={"REINITIALISER"} onClick={handleRedirect} />
    </div>
  );
};

export default ForgottenPasswordError;
