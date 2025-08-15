"use client";
import Image from "next/image";
import products from "@/app/data/products.json";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
function Product() {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <>
      {products.map((e) => (
        <div
          className="flex flex-col justify-center items-center p-4 min-w-[300px] "
          key={e.id}
        >
          <Link
            href={`/products/${e.id}`}
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
    </>
  );
}

export default Product;
