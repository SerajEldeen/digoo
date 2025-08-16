"use client";
import BackArrow from "@/components/BackArrow";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "next/navigation";
import products from "@/app/data/products.json";
import useCartStore from "@/store/cartStore";
import { useState } from "react";

function Page() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  // const quantity = useCartStore((state) => {
  //   const item = state.cartItems.find((item) => item.id === product?.id);
  //   return item?.quantity || 1;
  // });
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);
  const images = product?.productImages.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  if (!product) {
    return (
      <section className="min-h-screen flex justify-center items-center px-4 py-7">
        <BackArrow />
        <div className="text-center text-amber-600 font-bold text-xl">
          المنتج غير متاح
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-7">
      <BackArrow />
      <div className="absolute top-6 right-6 z-50 ">
        <Link href="/cart">
          <span className="absolute bg-[#8B5E3C] text-white text-xs px-2 rounded-xl -top-2 -right-2">
            {cartItems.length}
          </span>
          <Image src="/images/cart.png" width={30} height={30} alt="cart" />
        </Link>
      </div>

      <div className="flex justify-center items-center md:flex-row flex-col-reverse gap-8">
        <div className="p-8  space-y-8 w-full max-w-lg ">
          <ul className="space-y-4 text-right text-gray-800">
            <li>
              <strong>الاسم:</strong> {product.name}
            </li>
            <li>
              <strong>السعر:</strong> {product.price}
            </li>
            <li className="flex items-center gap-3">
              <span>
                <strong>الكمية:</strong>
              </span>
              <div className="flex items-center gap-2 border px-3 py-1 rounded">
                <button
                  type="button"
                  className="px-3 py-1 rounded bg-[#6B7280] text-white hover:opacity-80"
                  onClick={() => {
                    // incrementQuantity(product.id);
                    setQuantity((e) => e + 1);
                  }}
                >
                  +
                </button>
                <span className="px-2">{quantity}</span>
                <button
                  type="button"
                  className="px-3 py-1 rounded bg-[#6B7280] text-white hover:opacity-80"
                  onClick={() => {
                    // decrementQuantity(product.id);
                    if (quantity > 1) setQuantity((e) => e - 1);
                  }}
                >
                  -
                </button>
              </div>
            </li>
          </ul>

          <div className="flex justify-center md:justify-start items-center">
            <button
              className="
      bg-[#8B5E3C] text-white px-6 py-2 rounded 
      w-full md:w-[60%] max-w-xs
      inline-flex items-center justify-center gap-2
      hover:opacity-90
      group
      transition duration-300 ease-in-out
      shake-once
    "
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.productImages[0],
                  quantity: quantity,
                })
              }
            >
              اضف الى العربة
              <span
                className="
        inline-block
        transform transition-transform duration-300
        group-hover:-translate-x-2.5 group-hover:scale-110
      "
              >
                ←
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-3xl w-full pt-10">
          <ImageGallery
            items={images ?? []}
            showPlayButton={false}
            showNav={false}
            isRTL={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Page;
