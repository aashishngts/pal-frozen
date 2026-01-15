import Hero from "../components/Hero";
import AboutSection from "../components/palfresh/AboutSection";
import StrengthGrid from "../components/palfresh/StrengthGrid";
import StorySection from "../components/palfresh/StorySection";
import GoodnessSection from "../components/palfresh/GoodnessSection";
import ProductsSection from "../components/palfresh/ProductsSection";
import Footer from "../components/Footer";
import ProductRenderer from "../components/palfresh/ProductRenderer";

export default function PalFresh() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StrengthGrid />
      <StorySection />
      <GoodnessSection />
      <ProductsSection />

      <ProductRenderer/>
    </>
  );
}
