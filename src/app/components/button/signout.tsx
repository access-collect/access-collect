"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className=" rounded-lg my-6 md:my-4 flex flex-col justify-center items-center bg-white hover:ease-in-out hover:transition md:hover:bg-lightOrange w-[78px] h-[69px] "
    >
      <Image src="/deconnexion.svg" alt="deconnexion" width={50} height={50} />
    </button>
  );
};

export default SignOutButton;
