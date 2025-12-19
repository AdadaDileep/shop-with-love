import { X, Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  description?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-card border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-spring ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-smooth"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                New Arrival
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="font-body text-primary text-xs font-medium tracking-[0.3em] uppercase mb-3">
              {product.category}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
              {product.name}
            </h2>
            <p className="font-display text-2xl text-gradient font-medium mb-6">
              ${product.price.toLocaleString()}
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              {product.description || "A beautifully crafted piece that embodies our commitment to quality and timeless design."}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <p className="font-body text-sm font-medium mb-3">Select Size</p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg font-body text-sm font-medium transition-smooth ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-body text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 bg-secondary rounded-lg text-foreground hover:bg-muted transition-smooth"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-body text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 bg-secondary rounded-lg text-foreground hover:bg-muted transition-smooth"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full transition-smooth hover:shadow-glow hover:scale-[1.02]">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-4 border border-border rounded-full text-foreground hover:bg-secondary transition-smooth">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
