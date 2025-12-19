import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Silk Evening Dress",
    category: "Dresses",
    price: 899,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    isNew: true,
    description: "Crafted from the finest Italian silk, this evening dress embodies timeless sophistication. Perfect for galas and formal occasions."
  },
  {
    id: 2,
    name: "Cashmere Overcoat",
    category: "Outerwear",
    price: 1299,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    description: "Premium Mongolian cashmere meets exceptional tailoring. A statement piece that transcends seasons."
  },
  {
    id: 3,
    name: "Leather Tote Bag",
    category: "Accessories",
    price: 549,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
    isNew: true,
    description: "Hand-stitched from full-grain leather, this tote combines functionality with understated luxury."
  },
  {
    id: 4,
    name: "Wool Blend Blazer",
    category: "Jackets",
    price: 799,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    description: "Modern silhouette meets classic craftsmanship. Italian wool blend with silk lining."
  },
  {
    id: 5,
    name: "Suede Ankle Boots",
    category: "Footwear",
    price: 459,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    description: "Buttery soft suede with a sculpted heel. Handcrafted in Portugal."
  },
  {
    id: 6,
    name: "Gold Chain Necklace",
    category: "Jewelry",
    price: 299,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
    isNew: true,
    description: "18k gold-plated chain with adjustable length. Minimal design for everyday elegance."
  },
  {
    id: 7,
    name: "Linen Midi Skirt",
    category: "Bottoms",
    price: 349,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1g?w=600&h=800&fit=crop",
    description: "European linen in a flattering A-line silhouette. Breathable luxury for warm days."
  },
  {
    id: 8,
    name: "Merino Wool Sweater",
    category: "Knitwear",
    price: 429,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    description: "Extra-fine merino wool from New Zealand. Lightweight warmth with exceptional softness."
  },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Featured <span className="text-gradient italic">Products</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Each piece is carefully selected to embody our commitment to quality, design, and timeless appeal.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProductCard product={product} onQuickView={setSelectedProduct} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-up">
          <button className="px-10 py-4 border border-border text-foreground font-body font-medium rounded-full transition-smooth hover:bg-secondary hover:border-muted">
            View All Products
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductGrid;
