import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../styles/App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { client, urlFor } from "../lib/client.js";

export default function Carousel(param) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      const result = await client.fetch('*[_type == "product" && slug.current == "black-t"][0]')
      setProducts(result)
    }
    fetchdata()
  }, [])

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
        {products.image ? (products.image.map(element => <SwiperSlide key={products.image.indexOf(element)}><img src={urlFor(element).url()} alt="" /></SwiperSlide>)) : (<></>)}
      </Swiper>
    </>
  );
}
