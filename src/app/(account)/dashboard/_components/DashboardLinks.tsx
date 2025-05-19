import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

import SignOutButton from "@/app/components/button/signout";
import { link } from "fs";

const DashboardLinks = async ({ session }: { session: any }) => {
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
      <div className="flex flex-col justify-center">
        {links.map((link) => (
          <div key={link.title} className="w-full h-[60px]  shadow-md shadow-lightOliveGreen px-3 
                    rounded-lg my-4  flex flex-row justify-start items-center
                    md:w-[200px] md:h-[60px]  bg-white text-center text-midnightBlue text-xl font-subTitle 
                    lg:w-[300px] lg:h-[71px] hover:bg-lightOrange">
            <Image src={link.picto} alt={link.alt} width={60} height={50} />
            {link.title}
            {/* <div className="text-center text-midnightBlue text-xl font-subTitle">
              {link.title}
            </div> */}

          </div>

        ))}


        {/* {links.map((link) => (
        <Link key={link.title}>
          <div
            className={`w-full h-[60px]  shadow-md shadow-lightOliveGreen
                    rounded-lg my-6 md:my-4 flex flex-row md:justify-center md:items-center  items-center
                    md:w-[200px] md:h-[60px]  bg-white
                    lg:w-[300px] lg:h-[71px] md:flex-row md:hover:bg-lightOrange`}
          >
            <Image src={link.picto} alt={link.alt} width={60} height={50} />
            <div className="text-center text-midnightBlue text-xl font-subTitle">
              {link.title}
            </div> 
          </div>
        </Link>
      ))} */}

      </div>
      <div className="flex flex-col justify-center">
        <SignOutButton />
      </div>
    </div>
  );
};

export default DashboardLinks;
