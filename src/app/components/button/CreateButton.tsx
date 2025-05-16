"use client";
import Image from "next/image";
import Link from "next/link";

const CreateButton = ({ path }: { path: string }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center md:justify-end w-[150px] md:w-[360px] h-[150px] md:h-[68px] shadow-md shadow-lightOliveGreen mx-6 my-1 lg:my-6 rounded-lg">
        <Link href={path}>
          <Image
            src={"/create.svg"}
            alt={"Pictogramme rond avec +"}
            width={66}
            height={63}
            className="md:w-[46px] md:h-[43px]"
          />
          <button
            type="button"
            name={"createButton"}
            className="text-midnightBlue font-title text-2xl mx-20"
          >
            {"Créer"}
          </button>
        </Link>
      </div>
    </>
  );
};
export default CreateButton;
