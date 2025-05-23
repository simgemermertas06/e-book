import { navLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Transparan siyah arka kaplama */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* Linkler */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          {
            /* navLinks,constants.tsx(sabitler) dosyasından geliyor */
          }
          return (
            <Link
              href={link.url}
              key={link.id}
              className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
            >
              {link.label}
            </Link>
          );
        })}
        {/* Kapatma ikonu */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
