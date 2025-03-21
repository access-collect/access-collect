"use client"
import { deleteOrganisationById } from "@/lib/organisationQuery";
import Image from "next/image";

const DeleteButton = ({ name, organisationId }: { name: string, organisationId: string }) => {
    
    const deleteOrganisation = async(organisationId: string) => {
        const result = await deleteOrganisationById(organisationId)
        if(result.error){
            console.log("error")
        }
        console.log("organisation deleted")
    }

  return (
    <>
      <div className="w-[150px] h-[150px] shadow-md shadow-lightOliveGreen mx-6 rounded-lg  my-1 lg:my-6 flex flex-col justify-center items-center md:w-[360px] md:h-[68px] md:flex-row-reverse md:justify-end">
        <Image
          src="/delete.svg"
          alt={"pictogramme supprimer"}
          width={66}
          height={63}
          className="md:w-[46px] md:h-[43px]"
        />
        <button
          name={name}
          className="text-midnightBlue font-title text-2xl mx-20"
          onClick={() => deleteOrganisation(organisationId)}
        >
          {"Supprimer"}
        </button>
      </div>
    </>
  );
};
export default DeleteButton;