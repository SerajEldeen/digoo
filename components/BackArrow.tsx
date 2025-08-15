import Link from "next/link";

function BackArrow() {
  return (
    <>
      <Link
        href="/products"
        className="absolute top-4 left-6 z-50 w-12 h-12 flex justify-center items-center
        rounded-full border border-black bg-white text-black text-xl
        shadow-md transition-all duration-300 ease-in-out cursor-pointer
        hover:bg-gray-500 hover:scale-110"
      >
        ←
      </Link>
    </>
  );
}

export default BackArrow;
