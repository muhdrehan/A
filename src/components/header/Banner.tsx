import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "@/images/slider/sliderImg_1.jpg";
import Slider2 from "@/images/slider/sliderImg_2.jpg";
import Slider3 from "@/images/slider/sliderImg_3.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className=" relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2500}
      >
        <div>
          <Image priority src={Slider1} alt="Slider" />
        </div>
        <div>
          <Image src={Slider2} alt="Slider" />
        </div>
        <div>
          <Image src={Slider3} alt="Slider" />
        </div>
        
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-2 00 to-transparent absolute bottom-0 z-0 " ></div> 
    </div>
  );
};

export default Banner;
