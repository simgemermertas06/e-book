"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import BestSelling from "./BestSelling/BestSelling";
import Price from "./Price/Price";
import Review from "./Review/Review";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div id="home" className="overflow-hidden">
      <Hero />
      <About />
      <Benefits />
      <BestSelling />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
