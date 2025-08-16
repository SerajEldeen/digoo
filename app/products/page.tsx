"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FilterSortPanel from "@/components/FilterSortPanel";
import products from "@/app/data/products.json";
import categories from "@/app/data/categories.json";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import { sessionStorageUtil } from "@/utils/sessionStorage";

function Page() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [showPanel, setShowPanel] = useState(false);
  const [n, setN] = useState(6);
  type Category = (typeof categories)[number]["id"];
  const [filterCategory, setFilterCategory] = useState<Category>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sessionStorageUtil.get("filterCategory", "all") as any
  );
  const [sortOption, setSortOption] = useState(
    sessionStorageUtil.get("sortOption", "featured")!
  );

  useEffect(() => {
    sessionStorageUtil.set("filterCategory", filterCategory);
  }, [filterCategory]);

  useEffect(() => {
    sessionStorageUtil.set("sortOption", sortOption);
  }, [sortOption]);

  // 1️⃣ Filtering
  let filteredProducts = products;
  if (filterCategory !== "all") {
    filteredProducts = products.filter((p) => p.category === filterCategory);
  }

  // 2️⃣ Sorting
  let sortedProducts = [...filteredProducts];
  if (sortOption === "best_seller") {
    sortedProducts = filteredProducts.filter((e) => e.isBestSeller);
  } else if (sortOption === "price_low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price_high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // 3️⃣ Apply pagination
  const shownProducts = sortedProducts.slice(0, n);

  const handleShownProducts = () => {
    setN((e) => {
      if (e >= sortedProducts.length) return e;
      const newCount = e + 6;
      return newCount > sortedProducts.length
        ? sortedProducts.length
        : newCount;
    });
  };

  return (
    <section className="pt-30">
      <h1 className="text-center font-bold text-3xl mb-5">جميع المنتجات</h1>

      {/* Mobile filter button */}
      <div
        className="flex justify-center items-center hover:opacity-60 cursor-pointer sm:hidden"
        onClick={() => setShowPanel(true)}
      >
        <h3 className="text-center text-lg">التصفيه و الترتيب</h3>
        <Image src="/images/sort.png" width={25} height={25} alt="Sort" />
      </div>

      <div className="min-h-screen flex mt-5 text-right">
        {/* Filter sidebar */}
        <aside className="w-60 p-4 shadow-md sm:block hidden">
          <h2 className="font-semibold text-xl pb-2">التصفيه:</h2>
          <form className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center space-x-reverse space-x-2"
              >
                <input
                  type="radio"
                  name="filter"
                  value={cat.id}
                  checked={filterCategory === cat.id}
                  onChange={(e) => setFilterCategory(e.target.value as any)}
                />
                <span className="px-1">{cat.label}</span>
              </label>
            ))}
          </form>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4">
          {/* Sorting */}
          <div className="mb-6 justify-center hidden sm:flex">
            <label htmlFor="sort" className="font-medium ml-2">
              ترتيب حسب:
            </label>
            <select
              id="sort"
              className="border border-gray-400"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured" hidden>
                الميزة
              </option>
              <option value="best_seller">الأكثر مبيعا</option>
              <option value="price_low">السعر: من الأقل إلى الأعلى</option>
              <option value="price_high">السعر: من الأعلى إلى الأقل</option>
            </select>
          </div>

          {/* Products */}
          <div className="flex flex-wrap justify-center">
            {shownProducts.map((e) => (
              <div
                className="flex flex-col justify-center items-center p-4 min-w-[300px]"
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
            ))}
          </div>

          {/* Load more */}
          <div className="mt-10">
            <p className="text-center font-semibold text-xl">
              انت تشاهد {shownProducts.length} من {sortedProducts.length} منتج
            </p>
            <div className="flex justify-center mt-5">
              {n < sortedProducts.length && (
                <button
                  type="button"
                  className="text-white bg-black px-6 py-2.5 rounded-md cursor-pointer
                  hover:text-black hover:bg-white border-black border-2"
                  onClick={handleShownProducts}
                >
                  حمل المزيد
                </button>
              )}
            </div>
          </div>
        </main>
      </div>

      {showPanel && <FilterSortPanel onClose={() => setShowPanel(false)} />}
    </section>
  );
}

export default Page;
