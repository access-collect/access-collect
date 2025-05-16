import {
  deleteOrganisationById,
  getOrganisation,
} from "@/lib/organisationQuery";
import Label from "../../_components/Label";
import DeleteButton from "@/app/components/button/DeleteButton";
import EditButton from "@/app/components/button/EditButton";

export default async function OrganisationPage({
  params,
}: {
  params: { id: string };
}) {
  const organisation = await getOrganisation(params.id);
  if (!organisation) {
    return;
  }

  return (
    <div className="flex gap-y-4 flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
        {"ORGANISATION"}
      </div>
      <div className="flex flex-row justify-around justify-center">
        <EditButton/>
        <DeleteButton
          action={deleteOrganisationById}
          id={organisation.id}
          path={"/dashboard/organisation"}
        />
      </div>
      <div className="flex justify-center">
        <div className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-54 md:w-2/3">
          <h1 className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
            {"INFORMATIONS DE L'ORGANISATION"}
          </h1>
          <div className="pl-10 last:mb-6">
            <Label label={"NOM"} value={organisation.name} />
            <Label label={"NOM DU CONTACT"} value={organisation.contact} />
            <Label label={"ADRESSE"} value={organisation.address} />
            <Label label={"TELEPHONE"} value={organisation.phoneNumber} />
            <Label
              label={"N° D'AGREMENT"}
              value={organisation.agrementNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
