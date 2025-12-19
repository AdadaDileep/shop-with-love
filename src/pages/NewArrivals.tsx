import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const NewArrivals = () => {
  return (
    <>
      <Helmet>
        <title>New Arrivals | LUXE</title>
        <meta name="description" content="Discover our latest collection of new arrivals. Shop the freshest styles and trends in luxury fashion." />
        <meta name="keywords" content="new arrivals, latest fashion, new collection, luxury trends" />
        <link rel="canonical" href="https://luxe.com/new-arrivals" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                New Arrivals
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our latest collection of premium fashion pieces. Fresh styles that define the season's hottest trends.
              </p>
            </div>
            <ProductGrid />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewArrivals;
