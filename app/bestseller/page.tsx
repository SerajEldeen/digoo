"use client";
import products from "@/app/data/products.json";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import { useState } from "react";

export default function Page() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [n, setN] = useState(6);
  const isBestSeller = products.filter((e) => e.isBestSeller);
  const shownProducts = isBestSeller.slice(0, n);
  console.log(shownProducts);
  const handleShownProducts = () => {
    setN((e) => {
      if (e >= isBestSeller.length) return isBestSeller.length;
      const newCount = e + 6;
      return newCount > isBestSeller.length ? isBestSeller.length : newCount;
    });
  };
  return (
    <section className="pt-30 ">
      <h1 className="text-center text-3xl text-gray-800 leading-tight">
        المنتجات الأكثر مبيعا عند{" "}
        <span className="font-extrabold text-[#8B5E3C]">Digoo</span>
      </h1>
      <main className="py-5">
        <div className="flex flex-wrap justify-center items-center">
          {shownProducts.map((e) => (
            <div
              className=" p-4 min-w-[300px] flex flex-col justify-center items-center"
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
              <p className="mt-4 text-lg font-semibold text-center">{e.name}</p>
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
                    image: e.productImages[0],
                    price: e.price,
                    quantity: 1,
                  })
                }
              >
                أضف إلى العربة
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-center font-semibold text-xl">
            انت تشاهد {n} من {isBestSeller.length} منتج
          </p>
          <div className="flex justify-center mt-5 ">
            {n < isBestSeller.length && (
              <button
                type="button"
                className=" text-white bg-black px-6 py-2.5 rounded-md cursor-pointer
              transition-colors duration-400 hover:text-black hover:bg-white border-black border-2 "
                onClick={handleShownProducts}
              >
                حمل المزيد
              </button>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
