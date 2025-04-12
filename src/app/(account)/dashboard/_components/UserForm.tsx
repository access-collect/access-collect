"use client";
import { errorAlert, successAlert } from "@/app/components/alert";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputForm } from "@/app/components/inputs/InputForm";
import { Organisation } from "@/lib/schema/organisation";
import { addUser } from "@/lib/userQuery";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = ({
  organisationInfos,
}: {
  organisationInfos: Organisation[];
}) => {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedOrga, setSelectedOrga] = useState("");

  const handleFormAction = async (formData: FormData) => {
    const result = await addUser(formData);
    if (result?.error) {
      errorAlert(
        "Une erreur est survenue lors de l'ajout de l'utilisateur. Veuillez recommencer.",
      );
      return;
    }
    successAlert("L'utilisateur a bien été ajouté !");
    router.push("/dashboard/user");
  };

  return (
    <form
      action={handleFormAction}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputForm
        name={"name"}
        type="text"
        label={"Nom: "}
        placeholder={"Nom"}
      />
      <InputForm
        name={"email"}
        label={"Email: "}
        type="email"
        placeholder={"Email"}
      />
      <InputForm
        name={"password"}
        label={"Mot de passe: "}
        placeholder={"Mot de passe*"}
        type="password"
        minLength={8}
      />
      <InputForm
        name={"phone"}
        type="tel"
        label={"N° de téléphone: "}
        placeholder={"Téléphone"}
        minLength={10}
      />

      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor="role"
        >
          {"Rôle: "}
        </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          id="grid-state"
          name="role"
          required
        >
          <option value="" className="hover:bg-brightOrange">
            {"--Choisir une option--"}
          </option>
          <option value="superAdmin">{"superadmin"}</option>
          <option value="admin">{"admin"}</option>
          <option value="client">{"client"}</option>
          <option value="collector">{"collector"}</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label
          className="text-oliveGreen uppercase font-title text-sm"
          htmlFor="organisation"
        >
          {"Organisation: "}
        </label>
        <select
          value={selectedOrga}
          onChange={(e) => setSelectedOrga(e.target.value)}
          className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
          id="grid-state"
          data-testid="organisation-select"
          name="organisationId"
          required
        >
          <option value="" className="hover:bg-brightOrange">
            {"--Choisir une option--"}
          </option>
          {organisationInfos.map((orga: Organisation, index) => (
            <option key={index} value={orga.id} data-testid={orga.name}>
              {orga.name}
            </option>
          ))}
          ;
        </select>
      </div>
      <div className="flex justify-around">
        <CancelButton path={"/dashboard/user"} />
        <OrangeButton label={"Confirmer"} />
      </div>
    </form>
  );
};

export default UserForm;
