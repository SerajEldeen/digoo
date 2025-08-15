"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import hero from "@/app/data/hero.json";

function Hero() {
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
      className="w-full min-h-[200px] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] max-h-[600px] mt-0"
    >
      {hero.map((e) => (
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

export default Hero;
