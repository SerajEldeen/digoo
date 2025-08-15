import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-gray-600">404</h1>
      <h2 className="text-2xl mt-4 font-semibold text-gray-800 bg-[linear-gradient(to_top,_#F7E9DC_50%,_white_50%)]">
        عذرًا! الصفحة غير موجودة
      </h2>
      <p className="mt-2 text-gray-500">
        نأسف! الصفحة التي تبحث عنها غير متاحة حاليًا.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#8B5E3C] text-white rounded-lg shadow hover:opacity-90 transition"
      >
        العودة إلى المتجر
      </Link>
    </div>
  );
}
