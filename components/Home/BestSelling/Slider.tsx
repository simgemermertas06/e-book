"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 }, // resmin genislikleri
    items: 3, //aynı anda 3 öge gösterilecek
    slidesToSlide: 1, // Kullanıcı her seferinde 1 slide gösterilsin
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg"];

const Slider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[500px] m-3 relative overflow-hidden rounded-3xl "
        >
          <Image
            src={`/images/${image}`}
            alt="slider"
            fill={true}
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 p-4 text-white text-lg font-bold bg-orange-500 w-full">
            Book Name: Book {index + 1}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
