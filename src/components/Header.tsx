import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
            <span className="text-gradient">LUXE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/new-arrivals"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              New Arrivals
            </Link>
            <Link
              to="/collections"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Collections
            </Link>
            <Link
              to="/accessories"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-smooth">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-smooth relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-up">
            <Link
              to="/new-arrivals"
              className="block py-3 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth border-b border-border/50"
            >
              New Arrivals
            </Link>
            <Link
              to="/collections"
              className="block py-3 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth border-b border-border/50"
            >
              Collections
            </Link>
            <Link
              to="/accessories"
              className="block py-3 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth border-b border-border/50"
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className="block py-3 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
