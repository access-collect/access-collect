"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import LogButton from "@/app/components/button/logButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden md:hidden bg-white block absolute  rounded-md shadow-sm shadow-imperialYellow top-12 right-3 w-48 h-48">
        <ul className="">
          <li className="flex items-start space-x-2 p-2">
            <FiHome className="text-2xl text-lightOrange" />
            <Link
              href="/"
              onClick={handleClick}
              className="text-midnightBlue text-xl "
            >
              Accueil
            </Link>
          </li>
          <li className="flex items-start space-x-2 p-2">
            <BsTelephone className="text-2xl text-lightOrange" />
            <Link
              href="/contact"
              onClick={handleClick}
              className="text-midnightBlue text-xl"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-start space-x-2 p-2">
            <GoQuestion className="text-2xl text-lightOrange" />
            <Link
              href="/faq"
              onClick={handleClick}
              className="text-midnightBlue text-xl"
            >
              FAQ
            </Link>
          </li>
          <li>
            <LogButton label={"SE CONNECTER"} route="/login" padding={1} />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-midnightBlue flex justify-between items-center h-24">
      {/* Logo à gauche  */}
      <div>
        <Image
          src="/logo.svg"
          alt="logo accessCollect"
          width={200}
          height={120}
          className="ml-3"
        />
      </div>

      {/* Navigation à droite */}
      <div className="lg:flex md:flex md:flex-1 lg:flex-1 justify-end mr-3 md:items-center lg:items-center hidden space-x-10 font-title ">
        <Link href="/" className="text-white hover:text-darkGrey">
          Accueil
        </Link>
        <Link href="/faq" className="text-white hover:text-darkGrey ">
          FAQ
        </Link>
        <Link href="/contact" className="text-white hover:text-darkGrey ">
          Contact
        </Link>
        <li className="list-none">
          <LogButton label={"SE CONNECTER"} route="/login" padding={2} />
        </li>
      </div>
      <div>{click && content}</div>
      <button
        className="block md:hidden transition text-2xl"
        type="button"
        name="menu de la navbar"
        onClick={handleClick}
      >
        {click ? (
          <FaTimes className="mr-3 text-imperialYellow" />
        ) : (
          <RxHamburgerMenu className="text-2xl text-imperialYellow mr-3" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
