"use client";
import { redirectToDashboard } from "@/lib/actions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { InputFormBlue } from "../inputs/InputFormBlue";

export const getLogData = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);

  const logIn = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });

  if (logIn?.error) {
    const warningDiv: HTMLElement | null = document.getElementById("warning");
    const warningMessage: string = "Email ou mot de passe incorrect.";

    if (warningDiv != null) {
      warningDiv.innerHTML += `${warningMessage}`;
    }
  } else {
    redirectToDashboard();
  }
};

const LoginForm = () => {
  return (
    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[300px] shadow-md shadow-lightOliveGreen bg-white rounded-lg flex flex-col justify-center items-center">
      <form
        action={getLogData}
        className="flex flex-col align-center gap-4 px-3 my-4"
      >
        <div id="warning" className="text-red-500"></div>
        <InputFormBlue
          name={"email"}
          label={"Email"}
          placeholder={"Email"}
          type="email"
        />
        <InputFormBlue
          name={"password"}
          label={"Mot de passe"}
          placeholder={"Mot de passe"}
          type="password"
          minLength={8}
        />
        <div className="flex justify-center">
          <button className="bg-lightOrange  text-midnightBlue rounded-full p-2 font-title uppercase mb-4">
            {"CONNEXION"}
          </button>
        </div>
      </form>

      {/* Need to modify the link path */}
      <Link href="/forgotten-password" className="flex justify-start">
        <p className="text-midnightBlue">{"Mot de passe oublié ?"}</p>
      </Link>
    </div>
  );
};

export default LoginForm;
