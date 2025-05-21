import CreateButton from "@/app/components/button/CreateButton";
import { getUsersWithOrganisationName } from "@/lib/userQuery";

export default async function UsersPage() {
  const dataUsers = await getUsersWithOrganisationName();

  return (
    <div className="flex gap-y-4 flex-col  w-full">
      <div className="text-midnightBlue font-title font-bold  text-2xl text-center mt-6">
        {"UTILISATEURS"}
      </div>
      <CreateButton path={"/dashboard/add-user"} />
      <div className="mx-4 flex justify-center flex-col">
        <h1 className="text-2xl font-title text-oliveGreen text-center">
          {"Liste des utilisateurs :"}
        </h1>
        <div className="max-sm:hidden mt-6 text-midnightBlue flex justify-center mb-6">
          <table className="border border-oliveGreen">
            <thead>
              <tr className="border border-oliveGreen text-center">
                <th className="px-8">{"Nom"}</th>
                <th className="px-8">{"Email"}</th>
                <th className="px-8">{"Rôle"}</th>
                <th className="px-8">{"Entreprise"}</th>
              </tr>
            </thead>
            <tbody>
              {dataUsers.map((data, index) => (
                <tr
                  className={`border border-oliveGreen ${
                    index % 2 === 0 ? "bg-transparentOliveGreen" : "bg-white"
                  }`}
                  key={data.user.id}
                >
                  <td className="px-8" data-testid={`name-${data.user.name}`}>
                    {data.user.name}
                  </td>

                  <td className="px-8" data-testid={`email-${data.user.name}`}>
                    {data.user.email}
                  </td>
                  <td className="px-8" data-testid={`role-${data.user.name}`}>
                    {data.user.role}
                  </td>
                  <td
                    className="px-8"
                    data-testid={`orga-name-${data.user.name}`}
                  >
                    {data.organisation?.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden ">
          {dataUsers.map((data) => (
            <div
              key={data.user.id}
              className="shadow-md shadow-lightOliveGreen mx-6 rounded-b-lg my-6 w-72"
            >
              <div className="bg-transparentImperialYellow p-2 text-oliveGreen text-center uppercase font-title">
                {data.user.name}
              </div>
              <div className="flex flex-col items-center p-2">
                <div className="text-midnightBlue">{data.user.email}</div>
                <div className="text-midnightBlue">{data.user.role}</div>
                <div className="text-midnightBlue">
                  {data.organisation?.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
