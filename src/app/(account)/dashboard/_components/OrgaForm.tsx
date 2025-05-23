"use client";
import { errorAlert, successAlert } from "@/app/components/alert";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputFormRequired } from "@/app/components/inputs/InputFormRequired";
import { addOrganisation } from "@/lib/organisationQuery";
import { useRouter } from "next/navigation";
const OrgaForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const result = await addOrganisation(formData);

    if (result?.error) {
      errorAlert(
        "Une erreur est survenue lors de l'ajout de l'organisation. Veuillez recommencer.",
      );
    }
    successAlert("L'organisation a bien été ajouté !");
    router.push("/dashboard/organisation");
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col align-center gap-4 px-3 my-4"
    >
      <InputFormRequired name={"name"} label={"Nom: "} placeholder={"Nom"} />
      <InputFormRequired
        name={"address"}
        label={"Adresse: "}
        placeholder={"Adresse"}
      />
      <InputFormRequired
        name={"phone"}
        label={"N° de téléphone: "}
        placeholder={"Téléphone"}
      />
      <InputFormRequired
        name={"contact"}
        label={"Nom du contact: "}
        placeholder={"Contact"}
      />
      <InputFormRequired
        name={"agrement"}
        label={"N° d'agrément: "}
        placeholder={"N° d'agrément"}
      />
      <div className="flex justify-around">
        <CancelButton path={"/dashboard/organisation"} />
        <OrangeButton label={"Confirmer"} />
      </div>
    </form>
  );
};

export default OrgaForm;
