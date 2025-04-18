"use client";
import Image from "next/image";

const OliveGreenButton = ({
  name,
  title,
  svg,
  alt,
  action,
}: {
  name: string;
  title: string;
  svg: string;
  alt: string;
  action?: () => Promise<void>;
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center md:justify-end w-[150px] md:w-[360px] h-[150px] md:h-[68px] shadow-md shadow-lightOliveGreen mx-6 my-1 lg:my-6 rounded-lg">
        <Image
          src={svg}
          alt={alt}
          width={66}
          height={63}
          className="md:w-[46px] md:h-[43px]"
        />
        <button
          type="button"
          name={name}
          className="text-midnightBlue font-title text-2xl mx-20"
          onClick={action}
        >
          {title}
        </button>
      </div>
    </>
  );
};
export default OliveGreenButton;
