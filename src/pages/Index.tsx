import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LUXE | Premium Fashion & Lifestyle</title>
        <meta name="description" content="Discover our curated collection of luxury fashion essentials. Shop timeless elegance designed for the modern individual." />
        <meta name="keywords" content="luxury fashion, premium clothing, designer accessories, sustainable fashion" />
        <link rel="canonical" href="https://luxe.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProductGrid />
          <Features />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
