"use client";

import React from "react";
import Slider from "react-slick";
import dataSliderTrust from "./dataSliderTrust";
import Image from "next/image";

function SliderTrustHome() {
  const settings = {
    className: "center",
    autoplay: true,
    dots: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <div className="slider-container">
        <Slider {...settings}>
          {dataSliderTrust.map((data) => (
            <div key={data.id} className="slide px-10">
              <a href={data.url} target="_blank">
                {/* <img
                  src={data.image}
                  alt={data.alt}
                  className="w-[250px] h-[150px] md:w-[450px] md:h-[250px] object-contain rounded-lg mx-auto"
                /> */}
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={250}
                  height={150}
                  className="w-[250px] h-[150px] md:w-[450px] md:h-[250px] object-contain rounded-lg mx-auto"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderTrustHome;
