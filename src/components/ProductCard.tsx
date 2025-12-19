import { useState } from "react";
import { Heart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gradient-card rounded-2xl overflow-hidden shadow-card transition-smooth group-hover:shadow-hover">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-smooth ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full transition-smooth ${isLiked ? 'bg-primary text-primary-foreground' : 'bg-card/80 text-foreground hover:bg-card'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-3 rounded-full bg-card/80 text-foreground hover:bg-card transition-smooth"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* New Badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-5 space-y-2">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-smooth">
          {product.name}
        </h3>
        <p className="font-body text-foreground font-semibold">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
