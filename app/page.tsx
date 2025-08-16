import BestSellerOverview from "@/components/BestSellerOverview";
import CategoryOverview from "@/components/CategoryOverview";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <CategoryOverview />
      <BestSellerOverview />
      <Feedback />
    </>
  );
}
