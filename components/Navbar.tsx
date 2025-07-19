"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  interface Navlinks {
    href: string;
    label: string;
  }

  const navlinks: Navlinks[] = [
    { href: "/", label: "الرئيسية" },
    { href: "/products", label: "المنتجات" },
    { href: "/bestseller", label: "الأكثر مبيعا" },
    { href: "/policy", label: "السياسه" },
  ];

  const pathname = usePathname();
  const [isopen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-[#D2691E]  "
      : "text-black border-b-2 border-b-transparent hover:text-white hover:border-b-white  transition-all duration-300";

  return (
    <nav className="bg-gray-500 md:px-20 px-5 py-6">
      <div className="flex justify-between items-center">
        {/* Hamburger or Close */}
        <button
          type="button"
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isopen)}
          aria-label={isopen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <Image
            src={isopen ? "/images/close.png" : "/images/hamburger.png"}
            width={30}
            height={30}
            alt={isopen ? "Close Menu" : "Open Menu"}
          />
        </button>

        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" width={70} height={70} alt="logo" />
        </Link>

        {/* List */}
        <div className="hidden sm:block">
          <ul className="flex gap-10">
            {navlinks.map((e) => (
              <li
                key={e.label}
                className={`pb-2 cursor-pointer ${isActive(e.href)}`}
              >
                <Link href={e.href}>{e.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className="relative">
          <Link href="/cart">
            <span className="absolute bg-[#8B5E3C] text-white text-xs px-2 rounded-xl -top-2 -right-2">
              3
            </span>
            <Image src="/images/cart.png" width={30} height={30} alt="cart" />
          </Link>
        </div>
      </div>

      {/* Nav Links when open */}
      {isopen && (
        <div className="mt-4 py-4 border-t border-t-[#1C1E21] sm:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navlinks.map((e) => (
              <li
                key={e.label}
                className={`w-full text-center border-b-2 pb-2 cursor-pointer  ${isActive(
                  e.href
                )}  `}
                onClick={() => setIsOpen(false)}
              >
                <Link href={e.href}>{e.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
