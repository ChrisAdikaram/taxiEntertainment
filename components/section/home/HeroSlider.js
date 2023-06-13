import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

function HeroSlider() {
  return (
    <div className="h-full sm:h-screen " id="hero">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Pagination, Autoplay]}
        effect={"fade"}
        navigation={true}
        className="h-full mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/images/image02.png"}
            alt="description"
            width={1920}
            height={1282}
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/images/image01.png"}
            alt="description"
            width={1920}
            height={1282}
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/images/image10.png"}
            alt="description"
            width={1920}
            height={1282}
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/images/image09.png"}
            alt="description"
            width={1920}
            height={1282}
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
