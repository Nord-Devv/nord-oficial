"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { companiesSlider } from "@/assets/images/companies";

export const PartnerCompanies: React.FC = () => {
  
  return (
    <section className="my-[3rem] flex w-full items-center justify-center py-[2rem] text-center mobileSM:mt-[-100px] tabletLG:mt-[0px]">
      <Swiper
        spaceBetween={0}
        loop={true}
        watchOverflow={true}
        allowTouchMove={false}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4650}
        breakpoints={{
          1440: { slidesPerView: 6 },
          1100: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          425: { slidesPerView: 4 },
          375: { slidesPerView: 3 },
          320: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {companiesSlider.map((empresa, index) => (
          <SwiperSlide key={index}>
            <Image
              src={empresa}
              alt="Empresa Parceira"
              className="object-contain mobileSM:h-[70px] mobileSM:w-[70px] tabletSM:h-[60px] tabletSM:w-[60px] tabletMD:h-[75px] tabletMD:w-[75px] tabletLG:h-[80px] tabletLG:w-[80px] laptopLG:h-[100px] laptopLG:w-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
