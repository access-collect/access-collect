"use client";
import Image from "next/image";
import { confirmAlert, errorAlert, successAlert } from "../alert";
import { useRouter } from "next/navigation";

const DeleteButton = ({
  action,
  id,
  path,
}: {
  action: (id: string) => Promise<
    | {
        result: {
          deleted: string;
        }[];
        error?: undefined;
      }
    | {
        error: string;
        result?: undefined;
      }
  >;
  id: string;
  path: string;
}) => {
  const router = useRouter();
  const deleteOrganisation = async () => {
    const response = await confirmAlert(
      "Suppression de l'organisation",
      "Veuillez confirmer la suppression de l'organisation svp ?",
    );
    if (response.isConfirmed) {
      const result = await action(id);
      if (result.error) {
        errorAlert("Une erreur s'est produite lors de la suppression");
        return;
      }

      successAlert("L'organisation a bien été supprimée");
      router.push(path);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center md:justify-end w-[150px] md:w-[360px] h-[150px] md:h-[68px] shadow-md shadow-lightOliveGreen mx-6 my-1 lg:my-6 rounded-lg">
        <Image
          src={"/delete.svg"}
          alt={"pictogramme poubelle"}
          width={66}
          height={63}
          className="md:w-[46px] md:h-[43px]"
        />
        <button
          type="button"
          name={"deleteOrganisation"}
          className="text-midnightBlue font-title text-2xl mx-20"
          onClick={deleteOrganisation}
        >
          {"Supprimer"}
        </button>
      </div>
    </>
  );
};

export default DeleteButton;
