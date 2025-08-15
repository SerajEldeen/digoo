import BestSellerOverview from "@/components/BestSellerOverview";
import CategoryOverview from "@/components/CategoryOverview";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";
// import ScrollingMarquee from "@/components/ScrollingMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ScrollingMarquee /> */}
      <ProductsOverview />
      <CategoryOverview />
      <BestSellerOverview />
      <Feedback />
    </>
  );
}
