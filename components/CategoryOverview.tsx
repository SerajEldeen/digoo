import Link from "next/link";
import products from "@/app/data/products.json";

function CategoryOverview() {
  const myProducts = Array.from(
    new Map(products.map((e) => [e.category, e])).values()
  );
  return (
    <main className="flex flex-col justify-center items-center w-full py-10  bg-black">
      <h2 className="text-white text-3xl pb-10">تسوق حسب الفئة</h2>
      <section className=" flex justify-center items-center flex-wrap md:flex-row flex-col gap-6">
        {myProducts.map((e) => (
          <div
            className="relative w-[250px] h-[300px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${e.categoryImg})` }}
            key={e.categoryId}
          >
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center gap-4 text-center px-4">
              <p className="text-white text-lg font-semibold">{e.category}</p>
              <Link
                href="/products"
                className="px-6 py-2 text-white bg-black/80 border border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                تسوق الآن
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default CategoryOverview;
