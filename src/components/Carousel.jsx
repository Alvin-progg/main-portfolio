import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 2 seconds
    pauseOnHover: true, // Pauses auto-scroll when hovering over a slide
  };

  return (
    <Slider {...settings} className='lg:w-[700px] lg:h-[400px] mt-36 absolute overflow-hidden lg:overflow-visible'>
      {data.map((project) => (
        <div key={project.id} className="flex justify-center">
          <div className="w-3/4 m-auto border-white border rounded-xl  p-4 gap-4 ">
            <div className="flex-col gap-10 p-3 ">
              <span className="text-2xl lg:text-4xl text-white mb-6">{project.title}</span>
              <p className="text-gray-500 text-xl lg:3xl">{project.disc}</p>
            </div>
            <div className="gap-6 flex text-white mt-5">
              <a href={project.demo} className="border hover:bg-white hover:text-black border-white rounded-lg m-2 p-2">Demo</a>
              <a href={project.code} className="border hover:bg-white hover:text-black border-white rounded-lg m-2 p-2">Code</a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
