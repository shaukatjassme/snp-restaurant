// components/LogoCarousel.jsx
import React from "react";
import Slider from "react-slick";

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="logo-carousel  py-5 overflow-hidden bg-black">
      <Slider {...settings}>
        <div className="p-2">
          <img src="/images/c1.jpg" alt="Logo 1" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c2.jpg" alt="Logo 2" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c3.jpg" alt="Logo 3" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c4.jpg" alt="Logo 4" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c5.jpg" alt="Logo 5" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c6.jpg" alt="Logo 5" className="mx-auto " />
        </div>
        <div className="p-2">
          <img src="/images/c7.jpg" alt="Logo 5" className="mx-auto " />
        </div>
        {/* Add more logos as needed */}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
