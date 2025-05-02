"use client";
import { errorAlert, successAlert } from "@/app/components/alert";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputPasswordHome } from "@/app/components/inputs/InputPasswordHome";
import { redirectToLogin } from "@/lib/actions";
import { updatePassword } from "@/lib/userQuery";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const key = searchParams.get("userKey");

  const handleSubmitNewPassword = async (formData: FormData) => {
    const { newPassword, newPasswordRepeat } = Object.fromEntries(formData);
    if (newPassword != newPasswordRepeat) {
      const warningDiv: HTMLElement | null = document.getElementById("warning");
      const warningMessage: string =
        "Veuillez renseigner 2 mots de passe identiques, s'il vous plait.";
      if (warningDiv != null) {
        warningDiv.innerHTML += `${warningMessage}`;
      }
      return;
    }
    if (userId && key) {
      const resultUpdate = await updatePassword(
        newPassword as string,
        userId,
        key,
      );
      if (resultUpdate.error) {
        errorAlert(
          "Erreur lors de la réinitialisation de mot de passe. Veuillez recommencer.",
        );
        return;
      }
      successAlert(
        "Votre mot de passe a bien été mis à jour. Vous avez été redirigé vers la page de connexion.",
      );
      redirectToLogin();
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-10 text-midnightBlue font-bold">
        {"Bienvenue sur AccessCollect"}
      </h1>
      <div className="flex flex-wrap gap-x-4 justify-around gap-y-8 mb-8 mt-8 lg:mt-24">
        <div>
          <Image
            src="/tri.svg"
            alt="Illustration bacs de tri"
            width={500}
            height={1}
          />
        </div>

        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[350px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center gap-4">
          <h1 className="text-brightOrange uppercase">
            {"Réinitialisez votre mot de passe"}
          </h1>
          <form
            action={handleSubmitNewPassword}
            className="flex flex-col align-center gap-4 px-3 my-4"
          >
            <div id="warning" className="text-red-500 text-xs font-title"></div>
            <InputPasswordHome
              name="newPassword"
              label={"Entrez votre nouveau mot de passe :"}
            />
            <InputPasswordHome
              name="newPasswordRepeat"
              label={"Confirmez votre nouveau mot de passe :"}
            />

            <OrangeButton
              onClick={redirectToLogin}
              label={"REINITIALISATION"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
