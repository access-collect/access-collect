"use client";
import {
  addCollectedPoint,
  getClientsFromOrganisation,
} from "@/lib/collectedPointQuery";
import { CheckboxDaysOfCollect } from "./CheckboxDaysOfCollect";
import CancelButton from "@/app/components/button/cancelButton";
import { Organisation } from "@/lib/schema/organisation";
import { useEffect, useState } from "react";
import OrangeButton from "@/app/components/button/orangeButton";
import { User } from "@/lib/schema/user";
import { useRouter } from "next/navigation";
import { InputFormRequired } from "@/app/components/inputs/InputFormRequired";
import { errorAlert, successAlert } from "@/app/components/alert";

export const CollectedPointForm = ({
  organisationInfos,
}: {
  organisationInfos: Organisation[];
}) => {
  const [selectedOrga, setSelectedOrga] = useState<string>("");
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [checkDeliveryDay, setCheckDeliveryDay] = useState<string[]>([]);
  const router = useRouter();

  const handleChange = (e: { target: { checked: boolean; value: string } }) => {
    let deliveryDays: string[] = checkDeliveryDay;
    const checked = e.target.checked;
    const value = e.target.value;

    if (checked && !deliveryDays.includes(value)) {
      deliveryDays.push(value);
    }
    if (!checked && deliveryDays.includes(value)) {
      deliveryDays = checkDeliveryDay.filter((day) => day !== value);
    }

    setCheckDeliveryDay(deliveryDays);
  };

  useEffect(() => {
    const fetchClients = async () => {
      if (selectedOrga) {
        try {
          const result = await getClientsFromOrganisation(selectedOrga);
          if (result) {
            setClients(result);
          }
        } catch (error) {
          console.error("Error retrieving clients :", error);
        }
      }
    };
    fetchClients();
  }, [selectedOrga]);

  const handleSubmit = async (formData: FormData) => {
    const result = await addCollectedPoint(formData);

    if (result?.error) {
      errorAlert(
        "Une erreur est survenue lors de l'ajout du point de collecte. Veuillez recommencer.",
      );
      return;
    }

    successAlert("Le point de collecte a bien été ajouté !");
    router.push("/dashboard/collected-point-list");
  };

  return (
    <>
      <form
        action={handleSubmit}
        className="flex flex-col align-center gap-4 px-3 my-4"
      >
        <InputFormRequired
          name={"name"}
          label={"Nom du point de collecte :"}
          placeholder={"Point Exemple"}
        />
        <InputFormRequired
          name={"address"}
          label={"Adresse: "}
          placeholder={"3 rue de l'exemple 01234 Exemple-Ville"}
        />
        <div className="text-oliveGreen uppercase font-title text-sm">
          {"Jour de collecte: "}
        </div>
        <div className="flex flex-row flex-wrap">
          <CheckboxDaysOfCollect
            id="monday"
            label={"Lundi"}
            value={"monday"}
            onChange={handleChange}
          />
          <CheckboxDaysOfCollect
            id="tuesday"
            label={"Mardi"}
            value={"tuesday"}
            onChange={handleChange}
          />
          <CheckboxDaysOfCollect
            id="wednesday"
            label={"Mercredi"}
            value={"wednesday"}
            onChange={handleChange}
          />
          <CheckboxDaysOfCollect
            id="thursday"
            label={"Jeudi"}
            value={"thursday"}
            onChange={handleChange}
          />
          <CheckboxDaysOfCollect
            id="friday"
            label={"Vendredi"}
            value={"friday"}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-oliveGreen uppercase font-title text-sm"
            htmlFor={"organisationId"}
          >
            {"Nom de l'organisation:"}
          </label>
          <select
            data-testid={"select-organisation"}
            value={selectedOrga}
            onChange={(e) => setSelectedOrga(e.target.value)}
            className=" block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange  text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
            name="organisationId"
            required
          >
            <option value="" className="hover:bg-brightOrange">
              --Choisir une option--
            </option>
            {organisationInfos.map((orga: Organisation, index) => (
              <option key={index} value={orga.id}>
                {orga.name}
              </option>
            ))}
            ;
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className="text-oliveGreen uppercase font-title text-sm"
            htmlFor={"clientId"}
          >
            {"Nom du client:"}
          </label>
          <select
            data-testid={"select-client"}
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="block appearance-none bg-transparentLightOrange leading-tight focus:outline-none focus:bg-transparentBrightOrange text-midnightBlue rounded-md text-sm w-72 h-8 md:w-96"
            name="clientId"
            disabled={clients.length === 0}
            required
          >
            <option value="">--Choisir une option--</option>
            {clients.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-around">
          <CancelButton path={"/dashboard/collected-point-list"} />
          <OrangeButton label={"Confirmer"} />
        </div>
      </form>
    </>
  );
};

export default CollectedPointForm;
