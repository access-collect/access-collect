"use client";

import Link from "next/link";

const CancelButton = ({ path }: { path: string }) => {
  return (
    <>
      <Link
        href={path}
        className="border border-lightOrange text-midnightBlue  p-2 font-title uppercase mb-4"
      >
        {"ANNULER"}
      </Link>
    </>
  );
};
export default CancelButton;
