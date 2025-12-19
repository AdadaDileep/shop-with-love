import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Accessories = () => {
  return (
    <>
      <Helmet>
        <title>Accessories | LUXE</title>
        <meta name="description" content="Discover our exclusive collection of luxury accessories. From handbags to jewelry, find the perfect finishing touch." />
        <meta name="keywords" content="luxury accessories, designer bags, fine jewelry, fashion accessories" />
        <link rel="canonical" href="https://luxe.com/accessories" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Accessories
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete your look with our curated selection of luxury accessories. From statement pieces to everyday essentials.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-3"></div>
                <h4 className="font-medium text-sm">Bags</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-3"></div>
                <h4 className="font-medium text-sm">Jewelry</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-3"></div>
                <h4 className="font-medium text-sm">Watches</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-3"></div>
                <h4 className="font-medium text-sm">Scarves</h4>
              </div>
            </div>
            
            <ProductGrid />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Accessories;
