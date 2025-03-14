"use client";
import CancelButton from "@/app/components/button/cancelButton";
import OrangeButton from "@/app/components/button/orangeButton";
import { InputFormRequired } from "@/app/components/inputs/InputFormRequired";
import { addOrganisation } from "@/lib/organisationQuery";
import { useRouter } from "next/navigation";
const OrgaForm = () => {
  const router = useRouter() ;
  const handleRedirect = () => {
    router.push("/dashboard/organisation")}
  return (
    <form
      action={addOrganisation}
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
        <CancelButton />
        <OrangeButton label={"Confirmer"} onClick={handleRedirect} />
      </div>
    </form>
  );
};

export default OrgaForm;
