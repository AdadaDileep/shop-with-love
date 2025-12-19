import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections | LUXE</title>
        <meta name="description" content="Explore our curated collections of luxury fashion. From timeless classics to modern essentials." />
        <meta name="keywords" content="fashion collections, luxury clothing, curated styles, designer fashion" />
        <link rel="canonical" href="https://luxe.com/collections" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Collections
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated collections, each telling a unique story of style and sophistication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center"
                    alt="Essential Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Essential Collection</h3>
                <p className="text-muted-foreground">Timeless pieces that form the foundation of every wardrobe.</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop&crop=center"
                    alt="Seasonal Favorites"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seasonal Favorites</h3>
                <p className="text-muted-foreground">Curated selections perfect for the current season.</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=600&fit=crop&crop=center"
                    alt="Limited Edition"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Limited Edition</h3>
                <p className="text-muted-foreground">Exclusive pieces available for a limited time only.</p>
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

export default Collections;
