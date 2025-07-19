"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import banner from "@/app/data/banner.json";

function Banner() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] mt-0"
    >
      {banner.map((e) => (
        <SwiperSlide key={e.id}>
          <div className="relative w-full h-full">
            <Image
              src={e.image}
              alt={e.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
