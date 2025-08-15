"use client";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import products from "@/app/data/products.json";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

function BestSellerOverview() {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <section className="px-4 py-7">
      <h2 className="font-medium text-2xl pb-2.5">الأكثر مبيعا</h2>
      <p>اكتشف منتجاتنا الجلدية الأكثر تفضيلاً، والمصممة لإثارة الإعجاب.</p>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        className="p-4"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map(
          (e) =>
            e.isBestSeller && (
              <SwiperSlide key={e.id}>
                <div
                  className="flex flex-col justify-center items-center p-4 min-w-[300px] "
                  key={e.id}
                >
                  <Link
                    href="/products/id"
                    className="relative w-full h-[250px] group cursor-pointer"
                  >
                    {/* Default Image */}
                    <Image
                      src={e.productImages[0]}
                      alt="Product Front"
                      fill
                      className="rounded-lg object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                    />
                    {/* Hover Image */}
                    <Image
                      src={e.productImages[1]}
                      alt="Product Back"
                      fill
                      className="rounded-lg object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    />
                  </Link>
                  <p className="mt-4 text-lg font-semibold text-center">
                    {e.name}
                  </p>
                  <span className="text-xl font-extrabold italic text-[#8B5E3C] mt-1">
                    EGP {e.price}
                  </span>
                  <button
                    type="button"
                    className="mt-4 w-full text-white py-2 rounded bg-black hover:opacity-85 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      addToCart({
                        id: e.id,
                        name: e.name,
                        price: e.price,
                        image: e.productImages[0],
                        quantity: 1,
                      })
                    }
                  >
                    أضف إلى العربة
                  </button>
                </div>
              </SwiperSlide>
            )
        )}

        {/* <SwiperSlide>
          <Product />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default BestSellerOverview;
