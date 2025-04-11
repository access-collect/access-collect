"use client"
import { confirmAlert, errorAlert, successAlert } from "@/app/components/alert";
import OliveGreenButton from "@/app/components/button/OliveGreenButton";
import { deleteOrganisationById, getOrganisation } from "@/lib/organisationQuery";
import { useRouter } from "next/navigation";
import Label from "../../_components/Label";

export default async function OrganisationsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const organisation = await getOrganisation(params.id)

  const deleteOrganisation = async () => {
    const response = await confirmAlert("Suppression de l'organisation", "Veuillez confirmer la suppression de l'organisation svp ?")
    if (response.isConfirmed) {
      const result = await deleteOrganisationById(organisation.id)
      if (result.error) {
        errorAlert("Une erreur s'est produite lors de la suppression")
      }
      successAlert("L'organisation a bien été supprimée")
      router.push('/dashboard/organisation')
    }
    return;
  }
  return (
    <div className="flex gap-y-4 flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
        {"ORGANISATIONS"}
      </div>
      <div className="flex flex-row justify-around justify-center">

        <OliveGreenButton name={"Modifier une organisation"} title={"Modifier"} svg={"/edit.svg"} alt={"pictogramme modifier"} />
        <OliveGreenButton name={"Supprimer une organisation"} title={"Supprimer"} svg={"/delete.svg"} alt={"pictogramme supprimer"} action={deleteOrganisation} />
      </div>
      <div className="flex justify-center">
        <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-54 md:w-2/3">
          <h1 className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">{"INFORMATIONS DE L'ORGANISATION"}</h1>
          <div className="pl-10 last:mb-6">
            <Label label={"NOM"} value={organisation.name} />
            <Label label={"NOM DU CONTACT"} value={organisation.contact} />
            <Label label={"ADRESSE"} value={organisation.address} />
            <Label label={"TELEPHONE"} value={organisation.phoneNumber} />
            <Label label={"N° D'AGREMENT"} value={organisation.agrementNumber} />
          </div>

        </div>
      </div>
    </div>
  )
}