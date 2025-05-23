import { title } from "process";
import React from "react";
import { MdEco } from "react-icons/md";
import { BiBook, BiVideo, BiLink } from "react-icons/bi";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const benefits = [
  {
    title: "Cost-Effective Option",
    description:
      "Ebooks typically come at a lower price point compared to printed books, making them accessible to a broader audience of readers.",
    icon: <BiVideo className="w-6 h- text-white" />,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Ebooks can be effortlessly searched and shared across the internet, enabling readers to discover new books more readily.",
    icon: <BiBook className="w-6 h- text-white" />,
  },
  {
    title: "Eco-Conscious Choice",
    description:
      "Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and sustainable option compared to print books.",
    icon: <MdEco className="w-6 h- text-white" />,
  },
  {
    title: "Enhanced Convenience",
    description:
      "Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overall reading experience.",
    icon: <BiLink className="w-6 h- text-white" />,
  },
];

const Benefits = () => {
  return (
    <div id="benefits" className="pt-16 pb-16">
      <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Benefits" />
        </div>
        <h2 className="text-xl md:text-3xl font-bold">
          Discover your Benefits
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Plus, enjoy the convenience of offline access to our ebooks, allowing
          you to read at your convenience, anytime, and anywhere.
        </p>
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center">
          {/* SOL KARTLAR */}
          <div className="grid gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={index * 100}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          {/* ORTA RESİM */}
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <Image
              src="/images/b.jpg"
              alt="benefits"
              width={900}
              height={900}
              className="rounded-xl shadow-md"
            />
          </div>
          {/* SAG KARTLAR */}
          <div className="grid gap-6">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay={300 + index * 100}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Buton */}
        <div className="mt-8">
          <div className="flex justify-center items-center">
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
  );
};

export default Benefits;
