import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="font-body text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              New Collection 2024
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Timeless
              <br />
              <span className="text-gradient italic">Elegance</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              Discover our curated collection of luxury essentials designed for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <button className="group px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full transition-smooth hover:shadow-glow hover:scale-105">
                Explore Collection
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 border border-border text-foreground font-body font-medium rounded-full transition-smooth hover:bg-secondary hover:border-muted">
                View Lookbook
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative aspect-[3/4] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-card rounded-3xl shadow-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                  alt="Featured luxury product"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-card animate-float" style={{ animationDelay: '-2s' }}>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Starting from</p>
                <p className="font-display text-2xl font-medium text-gradient">$299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
