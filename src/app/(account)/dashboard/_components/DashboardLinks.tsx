import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

import SignOutButton from "@/app/components/button/signout";


const DashboardLinks = async () => {
  const headersList = headers();
  const activePath: string | null = headersList.get("x-invoke-path");

  const links = [
    {
      title: "Utilisateurs",
      path: "/dashboard/user",
      picto: "/dashboard.svg",
      alt: "Accéder à la page dashboard/utilisateur",
      name: "userLink",
    },
    {
      title: "Organisations",
      path: "/dashboard/organisation",
      picto: "/dashboard.svg",
      alt: "Accéder à la page dashboard/organisation",
      name: "organisationLink",
    },
    {
      title: "Points de collecte",
      path: "/dashboard/collected-point-list",
      picto: "/collectPoint.svg",
      alt: "Accéder à la page dashboard/point de collecte",
      name: "collectPointLink",
    },
  ];
  return (
    <div
      className="w-full md:w-1/3 h-screen md:h-screen flex flex-wrap justify-center md:justify-start md:flex-col md:items-center 
      bg-transparentLightOrange"
    >
      <div className="">
        <h1 className="text-midnightBlue">{"Bonjour Super Admin,"}</h1>
      </div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          <div
            className={`w-[160px] h-[160px] mx-6 shadow-md shadow-lightOliveGreen 
                    rounded-lg my-6 md:my-4 flex flex-col justify-center items-center 
                    ${activePath && link.path.includes(activePath) ? "bg-lightOrange" : "bg-white"}
                    md:w-[200px] md:h-[60px] 
                    lg:w-[300px] lg:h-[71px] md:flex-row md:hover:bg-lightOrange`}
          >
            <Image src={link.picto} alt={link.alt} width={70} height={100} />
            <div className="text-center text-midnightBlue text-xl font-subTitle">
              {link.title}
            </div>
          </div>
        </Link>

      ))}
      <div className="flex flex-col justify-center">
        <SignOutButton />
      </div>
    </div>

  );
};



export default DashboardLinks;
