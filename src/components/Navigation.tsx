import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-2xl font-bold gradient-text">FoodBridge</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#map" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Find Food</span>
            </a>
            <a href="#donate" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Users className="h-4 w-4" />
              <span>Donate</span>
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">
              Impact
            </a>
            <a href="#learn" className="text-foreground hover:text-primary transition-colors">
              Learn
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground button-glow">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <a href="#map" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <MapPin className="h-4 w-4" />
                <span>Find Food</span>
              </a>
              <a href="#donate" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <Users className="h-4 w-4" />
                <span>Donate</span>
              </a>
              <a href="#impact" className="text-foreground hover:text-primary transition-colors py-2 block">
                Impact
              </a>
              <a href="#learn" className="text-foreground hover:text-primary transition-colors py-2 block">
                Learn
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Sign In
                </Button>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;