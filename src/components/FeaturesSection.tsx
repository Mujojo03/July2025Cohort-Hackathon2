import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Zap, Shield, TrendingUp, Heart } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Food Mapping",
    description: "Live tracking of food donations and pickup points with GPS integration and smart routing.",
    tags: ["GPS", "Live Updates", "Smart Routes"]
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Connect restaurants, grocery stores, food banks, and individuals in a unified ecosystem.",
    tags: ["Social Impact", "Network Effect", "Community"]
  },
  {
    icon: Zap,
    title: "Instant Matching",
    description: "AI-powered algorithm matches food donations with nearby communities in need instantly.",
    tags: ["AI-Powered", "Instant", "Smart Matching"]
  },
  {
    icon: Shield,
    title: "Food Safety Verified",
    description: "Comprehensive safety protocols and verification system for all food donations.",
    tags: ["Safety First", "Verified", "Quality Control"]
  },
  {
    icon: TrendingUp,
    title: "Impact Analytics",
    description: "Track your contribution with detailed analytics on meals saved and environmental impact.",
    tags: ["Analytics", "Impact Tracking", "Transparency"]
  },
  {
    icon: Heart,
    title: "Gamified Experience",
    description: "Earn badges, climb leaderboards, and unlock achievements while fighting hunger.",
    tags: ["Gamification", "Rewards", "Engagement"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Platform Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            How <span className="gradient-text">FoodBridge</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets community action to create the most effective food redistribution platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;