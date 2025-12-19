import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!", {
        description: "You'll be the first to know about new arrivals and exclusive offers."
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Join Our <span className="text-gradient italic">Community</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Subscribe to receive exclusive access to new collections, special offers, and styling inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-card border border-border rounded-full font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              required
            />
            <button
              type="submit"
              className="group px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full transition-smooth hover:shadow-glow hover:scale-105 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
