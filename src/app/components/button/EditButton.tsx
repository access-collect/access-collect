"use client";
import Image from "next/image";

const EditButton = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center md:justify-end w-[150px] md:w-[360px] h-[150px] md:h-[68px] shadow-md shadow-lightOliveGreen mx-6 my-1 lg:my-6 rounded-lg">
        <Image
          src={"/edit.svg"}
          alt={"Pictogramme avec crayon"}
          width={66}
          height={63}
          className="md:w-[46px] md:h-[43px]"
        />
        <button
          type="button"
          name={"editButton"}
          className="text-midnightBlue font-title text-2xl mx-20"
        >
          {"Modifier"}
        </button>
      </div>
    </>
  );
};
export default EditButton;
