import React from "react";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full h-screen flex justify-center flex-col mt-10"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Yazı İçeriği */}
        <div data-aos="fade-up">
          {/* Metin Kutusu */}
          <BoxText text="Digital E-Book" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3rem]">
            Ebooks to Foster Your Personal and Professional{" "}
            <span className="text-orange-500">Development</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            ad nemo ex dolorem iusto explicabo molestiae quam amet quos fugiat
            beatae aliquam accusantium odio, consequuntur optio facilis
            voluptates dolore illum.
          </p>
          {/* Butonlar */}
          <div className="mt-8 flex flex-row w-fit items-center space-x-4">
            {/* Buton 1 */}
            <a
              href="#_"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-orange-600"
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
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Download Now
              </span>
            </a>

            {/* Buton 2 */}
            <a
              href="#_"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-orange-600"
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
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Browse E-book
              </span>
            </a>
          </div>
        </div>
        {/* Resim İçeriği */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block rounded-t-full"
        >
          <Image
            src="/images/hero.jpg"
            width={500}
            height={500}
            alt="heroImg"
            className="rounded-t-full"
          />
        </div>

        {/* Mobilde Resim İçeriği 
        <div className="mx-auto rounded-t-full">
          <Image
            src="/images/hero.jpg"
            width={500}
            height={500}
            alt="heroImg"
            className="rounded-t-full hidden xl:block"
          />
          <Image
            src="/images/hero.jpg"
            width={300}
            height={300}
            alt="heroImg"
            className="rounded-t-full block xl:hidden mt-4"
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default Hero;
