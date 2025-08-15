"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

function ShowFooter() {
  const hiddenRoutes = ["/products/id", "/cart"];
  const pathname = usePathname();
  const hideLayout = hiddenRoutes.includes(pathname);

  return <>{!hideLayout && <Footer />}</>;
}

export default ShowFooter;
