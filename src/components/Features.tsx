import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $200"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are protected with 256-bit encryption"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy on all items"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service available around the clock"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
