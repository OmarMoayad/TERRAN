import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BrandStatement from "@/components/home/BrandStatement";
import Packages from "@/components/home/Packages";
import WhyTerran from "@/components/home/WhyTerran";
import BrandVisual from "@/components/home/BrandVisual";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <Packages />
      <WhyTerran />
      <BrandVisual />
      <FinalCTA />
      <Footer />
    </main>
  );
}
