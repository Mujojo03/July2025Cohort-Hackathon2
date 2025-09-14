import { Heart, MapPin, Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary animate-pulse-glow" />
              <span className="text-2xl font-bold gradient-text">FoodBridge</span>
            </div>
            <p className="text-muted-foreground">
              Bridging the gap between food waste and hunger through community-driven technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#map" className="hover:text-primary transition-colors">Find Food</a></li>
              <li><a href="#donate" className="hover:text-primary transition-colors">Donate Food</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Track Impact</a></li>
              <li><a href="#learn" className="hover:text-primary transition-colors">Learn More</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@foodbridge.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-FOOD-BRIDGE</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Hackathon 2024<br />Zero Hunger Initiative</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 FoodBridge. Built for Zero Hunger Hackathon. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>Supporting UN SDG 2:</span>
            <span className="font-semibold text-primary">Zero Hunger</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;