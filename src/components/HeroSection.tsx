import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-food-sharing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Bridge the Gap Between
            <span className="gradient-text block mt-2">Food Waste & Hunger</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Connect communities, reduce waste, and fight hunger through our intelligent food redistribution platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-4 button-glow">
              Find Food Near You
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
              Donate Food
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border animate-float">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">People Fed</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary">1M+</div>
              <div className="text-muted-foreground">Meals Rescued</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-muted-foreground">Partner Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;