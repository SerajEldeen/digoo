"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

function ShowNavBar() {
  const pathname = usePathname();
  const hideLayout = pathname === "/cart" || /^\/products\/\d+$/.test(pathname);

  return <>{!hideLayout && <Navbar />}</>;
}

export default ShowNavBar;
