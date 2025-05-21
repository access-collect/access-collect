import { getOrganisations } from "@/lib/organisationQuery";
import { Organisation } from "@/lib/schema/organisation";
import Link from "next/link";
import Image from "next/image";
import CreateButton from "@/app/components/button/CreateButton";

export default async function OrganisationsPage() {
  const dataOrganisations = await getOrganisations();

  return (
    <div className="flex gap-y-4 flex-col w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-4">
        {"ORGANISATIONS"}
      </div>

      <CreateButton path={"/dashboard/add-organisation"} />

      <div className="mx-4 flex justify-center flex-col">
        <h1 className="text-2xl font-title text-oliveGreen text-center">
          {"Liste des organisations : "}
        </h1>
        <div className="max-sm:hidden mt-6 text-midnightBlue flex justify-center mb-6">
          <table className="border border-oliveGreen">
            <thead>
              <tr className="border border-oliveGreen text-center">
                <th className="px-8">{"Nom"}</th>
                <th className="px-8">{"Contact"}</th>
                <th className="px-8">{"Numéro de téléphone"}</th>
                <th className="px-8">{"Consulter"}</th>
              </tr>
            </thead>
            <tbody>
              {dataOrganisations.map((organisation: Organisation, index) => (
                <tr
                  className={`border border-oliveGreen ${
                    index % 2 === 0 ? "bg-transparentOliveGreen" : "bg-white"
                  }`}
                  key={organisation.id}
                >
                  <td
                    className="px-8"
                    data-testid={`name-${organisation.name}`}
                  >
                    {organisation.name}
                  </td>
                  <td
                    className="px-8"
                    data-testid={`contact-${organisation.name}`}
                  >
                    {organisation.contact}
                  </td>
                  <td
                    className="px-8"
                    data-testid={`phone-${organisation.name}`}
                  >
                    {organisation.phoneNumber}
                  </td>
                  <td className=" flex justify-center">
                    <Link
                      href={`/dashboard/organisation/${organisation.id}`}
                      data-testid={`link-to-organisation/id-${organisation.name}`}
                    >
                      <Image
                        src="/consulter.svg"
                        alt="voir l'organisation en détail"
                        width={40}
                        height={80}
                        className=""
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden ">
          {dataOrganisations.map((organisation: Organisation) => (
            <div
              key={organisation.id}
              className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6"
            >
              <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
                {organisation.name}
              </div>
              <div className="flex items-center p-2">
                <div className="text-midnightBlue w-72">
                  {organisation.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
