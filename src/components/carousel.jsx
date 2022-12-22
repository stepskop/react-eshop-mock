import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel(param) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={param.image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={param.image2} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
