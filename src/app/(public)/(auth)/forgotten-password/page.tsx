"use client";
import { errorAlert, successAlert } from "@/app/components/alert";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/inputs/InputForm";
import { sendResetPasswordEmailIfUserExists } from "@/lib/userQuery";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ForgottenPasswordPage = () => {
  const router = useRouter();

  const handleEmailSending = async (formData: FormData) => {
    const email = Object.fromEntries(formData);
    console.log("forgotten", email.email);
    const sendEmail = await sendResetPasswordEmailIfUserExists(
      email.email as string,
    );
    if (sendEmail?.error) {
      errorAlert("Oups.. Une erreur est survenue");
      return;
    }

    successAlert("Un mail de réinitialisation, vous a été envoyé.");
    router.push("/login");
  };
  return (
    <div>
      <h1 className="text-center text-2xl mt-10 text-midnightBlue font-bold">
        {"Bienvenue sur AccessCollect"}
      </h1>
      <div className="flex flex-wrap gap-x-4 justify-around gap-y-8 mb-8 mt-8">
        <div>
          <Image
            src="/tri.svg"
            alt="Illustration bacs de tri"
            width={500}
            height={1}
          />
        </div>
        <div>
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] shadow-md shadow-lightOliveGreen rounded-lg flex flex-col justify-center items-center gap-4">
            <h2 className="text-brightOrange uppercase">
              {"Mot de passe oublié ?"}
            </h2>
            <p className="text-midnightBlue text-center mx-2">
              {
                "Pas de panique ! Remplissez le formulaire ci-dessous et nous vous enverrons par mail les informations pour créer un nouveau mot de passe."
              }
            </p>
            <form
              action={handleEmailSending}
              className="flex flex-col align-center gap-4 px-3 my-4"
            >
              <InputForm
                name={"email"}
                label={"Email"}
                placeholder={"Email*"}
              />
              <OrangeButton label={"REINITIALISATION"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPasswordPage;
