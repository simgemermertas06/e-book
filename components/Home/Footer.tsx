import React from "react";
import Logo from "../Helper/Logo";
import { FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="pt-16 pb-16 dark:bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1. Kolon */}
        <div>
          <Logo />
          <p className="mt-5 font-semibold text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            officia modi laboriosam a perferendis unde iure aliquid maxime
            recusandae omnis.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="cursor-pointer text-orange-500 w-5 h-5 hover:text-black dark:hover:text-white" />
            <FaTwitter className="cursor-pointer text-orange-500 w-5 h-5 hover:text-black dark:hover:text-white" />
            <FaDribbble className="cursor-pointer text-orange-500 w-5 h-5 hover:text-black dark:hover:text-white" />
            <FaYoutube className="cursor-pointer text-orange-500 w-5 h-5 hover:text-black dark:hover:text-white" />
          </div>
        </div>
        {/* 2. Kolon */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Services
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Portfolio
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
        </div>
        {/* 3. Kolon */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        {/* 4. Kolon */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Mobile Number
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              +90 555 555 55 55
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our E-mail Address
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-[80%] mx-auto mt-16 border-t border-orange-500 pt-8 flex justify-center text-gray-600 text-sm">
        <p className="text-center">Copyright © 2025 FSM. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
