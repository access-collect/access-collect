"use client"
import { confirmAlert, errorAlert, successAlert } from "@/app/components/alert"
import OliveGreenButton from "@/app/components/button/OliveGreenButton"
import { deleteOrganisationById } from "@/lib/organisationQuery"
import { useRouter } from "next/navigation";

export const DeleteOrganisation = ({organisationId }: {organisationId : string}) => {
    const router = useRouter();
    const deleteOrganisation = async () => {
        const response = await confirmAlert("Suppression de l'organisation", "Veuillez confirmer la suppression de l'organisation svp ?")
        if (response.isConfirmed) {
          const result = await deleteOrganisationById(organisationId)
          if (result.error) {
            errorAlert("Une erreur s'est produite lors de la suppression")
            return
          }
          
          successAlert("L'organisation a bien été supprimée")
          router.push('/dashboard/organisation')
          return
          
        }
        
    }
    return(
<OliveGreenButton name={"Supprimer une organisation"} title={"Supprimer"} svg={"/delete.svg"} alt={"pictogramme supprimer"} action={deleteOrganisation} />
    )
}




