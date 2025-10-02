"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Projects() {
  return (
    <section
      className="mx-auto flex max-w-[1440px] flex-col items-center laptopLG:py-[6rem]"
      id="projetos"
    >
      <h2 className="flex items-center justify-center gap-[1.9rem] text-center text-[3.5rem] before:h-[1px] before:w-[3rem] before:bg-white after:h-[1px] after:w-[3rem] after:bg-white laptopSM:text-[6rem]">
        Nossos
      </h2>
      <h3 className="text-[3.6rem] font-bold laptopSM:text-[6rem]">Projetos</h3>

      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        breakpoints={{
          1000: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper mt-[2.5rem]"
      >
        <SwiperSlide className="swiper-slider">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
