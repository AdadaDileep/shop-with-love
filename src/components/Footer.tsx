import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: ["New Arrivals", "Collections", "Accessories", "Sale"],
    Support: ["Contact Us", "FAQs", "Shipping", "Returns"],
    Company: ["About Us", "Careers", "Press", "Sustainability"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  };

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-gradient">LUXE</span>
            </a>
            <p className="font-body text-muted-foreground mt-4 mb-6 max-w-xs">
              Curating timeless elegance for the modern individual. Quality, design, and sustainability in every piece.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-lg font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 LUXE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6 opacity-50 hover:opacity-100 transition-smooth"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6 opacity-50 hover:opacity-100 transition-smooth"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6 opacity-50 hover:opacity-100 transition-smooth"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
