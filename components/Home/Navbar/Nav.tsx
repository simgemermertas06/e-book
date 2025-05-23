"use client";
import React, { useEffect, useState } from "react";
import Logo from "./../../Helper/Logo";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { FiDownloadCloud } from "react-icons/fi";
import ThemeToogle from "@/components/Helper/ThemeToogle";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero"); // ✅ 1. Aktif bölümü tutan state

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler); // Temizlik
    };
  }, []);

  // ✅ 2. Hangi bölüm görünüyorsa onu activeSection'a yazıyoruz
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // %30'ı görünüyorsa aktif say
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white dark:bg-black shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Logo />
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            {
              /* navLinks,constants.tsx(sabitler) dosyasından geliyor */
            }

            const linkId = link.url.replace("#", ""); // ✅ YENİ: url’den id ayıklama
            const isActive = activeSection === linkId; // ✅ YENİ: aktif mi kontrolü
            return (
              <Link
                href={link.url}
                key={link.id}
                className={`transition-all font-semibold text-sm dark:hover:text-orange-500 hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-gray-800 dark:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white z-20 flex items-center text-sm">
              <FiDownloadCloud className="mr-3 w-5 h-5" />
              Download
            </span>
          </a>
          {/* TOOGLE BUTTONS */}
          <ThemeToogle />
          {/* AÇILIR MENÜ */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-orange-500 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
