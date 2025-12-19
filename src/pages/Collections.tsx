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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collections
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore our carefully curated collections, each telling a unique story of style and sophistication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden rounded-t-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center"
                    alt="Essential Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Essential Collection</h3>
                  <p className="text-slate-600">Timeless pieces that form the foundation of every wardrobe.</p>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden rounded-t-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop&crop=center"
                    alt="Seasonal Favorites"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Seasonal Favorites</h3>
                  <p className="text-slate-600">Curated selections perfect for the current season.</p>
                </div>
              </div>
              
              <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden rounded-t-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=600&fit=crop&crop=center"
                    alt="Limited Edition"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Limited Edition</h3>
                  <p className="text-slate-600">Exclusive pieces available for a limited time only.</p>
                </div>
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
