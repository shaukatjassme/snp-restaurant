// components/Carousel.jsx

import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  // Slider settings
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
    responsive: [
      {
        breakpoint: 768, // For tablet devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container overflow-hidden"> {/* Ensure no overflow */}
      <Slider {...settings}>
        <div>
          <img src="/images/slide-1.jpg" alt="Slide 1" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/images/slide-2.jpg" alt="Slide 2" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/images/slide-3.jpg" alt="Slide 3" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/images/slide-4.jpg" alt="Slide 4" className="w-full h-auto object-cover" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
