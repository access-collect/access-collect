"use client"
import { confirmAlert, errorAlert, successAlert } from "@/app/components/alert";
import DeleteButton from "@/app/components/button/deleteButton";
import ModificationButton from "@/app/components/button/modificationButton";
import { deleteOrganisationById, getOrganisation } from "@/lib/organisationQuery";
import { useRouter } from "next/navigation";

export default async function OrganisationsPage({
    params,
  }: {
    params: { id: string };
  }) {
    const router = useRouter();
    const organisation = await getOrganisation(params.id)
    
    const deleteOrganisation = async() => {
     const response = await confirmAlert("Suppression de l'organisation", "Veuillez confirmer la suppression de l'organisation svp ?")
         if(response.isConfirmed){
           const result = await deleteOrganisationById(organisation.id)
           if(result.error){
               errorAlert("Une erreur s'est produite lors de la suppression")
           }
           successAlert("L'organisation a bien été supprimée")
           router.push('/dashboard/organisation')
           
           
         }
   
         return;
       }
    
    return(
        <div className="flex gap-y-4 flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
        {"ORGANISATIONS"}
      </div>
      <div className="flex flex-row justify-around">
      
        <ModificationButton name={"Modifier une organisation"} />
     
   
        <DeleteButton name={"Supprimer une organisation"} action={deleteOrganisation}></DeleteButton>

     
      </div>
      </div>
    )
}