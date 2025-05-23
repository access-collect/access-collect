import { getCollectedPoints } from "@/lib/collectedPointQuery";
import { daysEnum } from "@/lib/schema/collectPoint";
import Image from "next/image";
import Link from "next/link";

export default async function CollectedPointList() {
  const data = await getCollectedPoints();

  const dictionnaryDays: { [key in typeof daysEnum as string]: string } = {
    monday: "Lundi",
    tuesday: "Mardi",
    wednesday: "Mercredi",
    thursday: "Jeudi",
    friday: "Vendredi",
    saturday: "Samedi",
  };

  return (
    <>
      <div className="max-sm:hidden mt-6 mx-6 text-midnightBlue flex justify-center mb-6">
        <table className="border border-oliveGreen ">
          <thead>
            <tr className="border border-oliveGreen text-center">
              <th className="px-8">Nom</th>
              <th className="px-8">Adresse</th>
              <th className="px-8">Jour de collecte</th>
              <th className="px-8">Consulter</th>
            </tr>
          </thead>
          <tbody>
            {data.map((collectedPoint, index) => (
              <tr
                className={`border border-oliveGreen ${
                  index % 2 === 0 ? "bg-transparentOliveGreen" : "bg-white"
                }`}
                key={index}
              >
                <td
                  className="pl-4"
                  data-testid={`name-${collectedPoint.name}`}
                >
                  {collectedPoint.name}
                </td>
                <td
                  className="pl-8"
                  data-testid={`address-${collectedPoint.name}`}
                >
                  {collectedPoint.address}
                </td>
                <td
                  className="pl-8"
                  data-testid={`days-${collectedPoint.name}`}
                >
                  {collectedPoint.daysOfCollect.map(
                    (day) => dictionnaryDays[day] + " ",
                  )}
                </td>
                <td className=" flex justify-center">
                  <Link
                    href={`/dashboard/collected-point/${collectedPoint.id}`}
                  >
                    <Image
                      src="/consulter.svg"
                      alt="voir point de collecte en détail"
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
        {data.map((collectedPoint, index) => (
          <div
            key={index}
            className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6"
          >
            <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
              {collectedPoint.name}
            </div>
            <div className="flex items-center p-2">
              <div className="text-midnightBlue w-72">
                {collectedPoint.address}
              </div>
              <div>
                <Link href={`/dashboard/collected-point/${collectedPoint.id}`}>
                  <Image
                    src="/consulter.svg"
                    alt="voir point de collecte en détail"
                    width={80}
                    height={120}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
