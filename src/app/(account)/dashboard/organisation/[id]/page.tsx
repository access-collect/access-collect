import DeleteButton from "@/app/components/button/deleteButton";
import ModificationButton from "@/app/components/button/modificationButton";
import { deleteOrganisationById, getOrganisation } from "@/lib/organisationQuery";

export default async function OrganisationsPage({
    params,
  }: {
    params: { id: string };
  }) {
    const organisation = await getOrganisation(params.id)

    // const deleteOrganisation = async() => {
    //         const result = await deleteOrganisationById(organisation.id)
    //         if(result.error){
    //             console.log("error")
    //         }
    //         console.log("organisation deleted")
    //     }
    
    return(
        <div className="flex gap-y-4 flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
        {"ORGANISATIONS"}
      </div>
      <div className="flex flex-row justify-around">
      
        <ModificationButton name={"Modifier une organisation"} />
     
   
      <DeleteButton name={"Supprimer une organisation"} organisationId={organisation.id}></DeleteButton>

     
      </div>
      </div>
    )
}