"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import feedbacks from "@/app/data/feedback.json";

import "swiper/css";
import "swiper/css/navigation";

function Feedback() {
  return (
    <section className="px-4 py-7">
      <h2 className="font-medium text-4xl text-center">
        اسمع الأراء من عملائنا
      </h2>
      <main className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          loop
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              navigation: false,
            },
            640: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 3,
            },
          }}
        >
          {feedbacks.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="flex flex-col justify-center items-center pt-20">
                <p className="text-xl max-w-[250px] pb-0.5 text-center">
                  {e.description}
                </p>
                <span className="block text-[#8B5E3C] pb-0.5">{e.name}</span>
                <Image src={e.images} width={40} height={40} alt={e.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}

export default Feedback;
