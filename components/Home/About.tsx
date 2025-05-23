import React from "react";
import Image from "next/image";
import BoxText from "../Helper/BoxText";
import { BiCheck } from "react-icons/bi";

const About = () => {
  return (
    <div id="about" className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center">
        {/* Resim İçeriği */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="xl:col-span-2"
        >
          <Image
            src="/images/about.jpg"
            alt="about"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        {/* Text İçeriği */}
        <div className="xl:col-span-3">
          {/* Text Box */}
          <BoxText text="About Us" />
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 mb-6 text-gray-800 dark:text-white font-semibold">
            About Us About This Best Selling Book
          </h1>
          <p className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea,
            magnam ratione amet magni voluptatem perferendis vero dignissimos
            praesentium aut.
          </p>
          {/* Listeler */}
          <div className="mt-8 space-y-5">
            <div className="flex items-center space-x-2">
              <BiCheck className="w-7 h-7 text-orange-500" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="w-7 h-7 text-orange-500" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="w-7 h-7 text-orange-500" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="w-7 h-7 text-orange-500" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* Buton */}
            <div className="mt-14">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Read More
                </span>
                <span className="relative invisible">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
