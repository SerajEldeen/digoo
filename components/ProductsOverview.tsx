"use client";
import Link from "next/link";
import Image from "next/image";
import products from "@/app/data/products.json";
import useCartStore from "@/store/cartStore";
function ProductsOverview() {
  const addToCart = useCartStore((state) => state.addToCart);
  const myProducts = products.slice(0, 6);

  return (
    <section className="px-4 py-7 text-center">
      <h1 className="font-bold text-xl">جلد مميز , جوده لا مثيل لها </h1>
      <p className="font-medium">
        استكشف منتجات الجلود الفاخرة المصنوعة يدويًا والمصممة للأناقة والمتانة.
      </p>
      <main className="flex justify-center items-center gap-10 mt-10 md:flex-row flex-col flex-wrap">
        {myProducts.map((e) => (
          <div
            className="flex flex-col justify-center items-center p-6 rounded-xl shadow-lg bg-white w-72 sm:w-80"
            key={e.id}
          >
            <Link
              href={`/products/${e.id}`}
              className="relative w-full h-[300px] group cursor-pointer"
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
                  price: e.price,
                  image: e.productImages[0],
                  quantity: 1,
                })
              }
            >
              أضف إلى العربة
            </button>
          </div>
        ))}
      </main>
      <Link
        href="/products"
        className="mt-4 inline-block text-center p-5 text-white py-2 rounded bg-black hover:bg-white hover:text-black border transition-all duration-300 cursor-pointer"
      >
        اظهر الكل
      </Link>
    </section>
  );
}

export default ProductsOverview;
