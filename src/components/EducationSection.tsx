import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Users, ArrowRight, PlayCircle } from "lucide-react";

const educationalContent = [
  {
    type: "article",
    icon: FileText,
    title: "The Global Food Waste Crisis",
    description: "Understanding the scale of food waste and its impact on hunger worldwide",
    readTime: "5 min read",
    category: "Research",
    difficulty: "Beginner"
  },
  {
    type: "video",
    icon: Video,
    title: "How to Start a Community Food Program",
    description: "Step-by-step guide to launching food redistribution in your neighborhood",
    readTime: "12 min watch",
    category: "How-to",
    difficulty: "Intermediate"
  },
  {
    type: "interactive",
    icon: Users,
    title: "Food Security Quiz",
    description: "Test your knowledge about food security and earn community points",
    readTime: "10 min quiz",
    category: "Interactive",
    difficulty: "All Levels"
  },
  {
    type: "guide",
    icon: BookOpen,
    title: "Safe Food Handling Guidelines",
    description: "Essential safety protocols for food donation and distribution",
    readTime: "8 min read",
    category: "Safety",
    difficulty: "Essential"
  }
];

const sdgFacts = [
  {
    fact: "828 million people faced hunger in 2021",
    source: "UN World Food Programme"
  },
  {
    fact: "1/3 of food produced globally is wasted",
    source: "Food and Agriculture Organization"
  },
  {
    fact: "Food waste generates 8-10% of global greenhouse gases",
    source: "IPCC Report 2022"
  }
];

const EducationSection = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "article": return "text-primary border-primary";
      case "video": return "text-secondary border-secondary";
      case "interactive": return "text-accent border-accent";
      case "guide": return "text-info border-info";
      default: return "text-muted-foreground border-muted";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Essential": return "bg-destructive/10 text-destructive";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-info border-info">
            Education Hub
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Learn About <span className="gradient-text">Zero Hunger</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the science behind food security, learn best practices, and become an expert in fighting hunger
          </p>
        </div>

        <div className="grid gap-8">
          {/* SDG Facts Banner */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">SDG 2: Zero Hunger Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {sdgFacts.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{item.fact}</div>
                    <div className="text-sm text-muted-foreground">— {item.source}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Educational Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {educationalContent.map((content, index) => {
              const Icon = content.icon;
              return (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon className={`h-5 w-5 ${getTypeColor(content.type).split(' ')[0]}`} />
                        <Badge variant="outline" className={getTypeColor(content.type)}>
                          {content.category}
                        </Badge>
                      </div>
                      <Badge className={getDifficultyColor(content.difficulty)}>
                        {content.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
                    <CardDescription className="text-base">
                      {content.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        {content.type === "video" && <PlayCircle className="h-4 w-4" />}
                        <span>{content.readTime}</span>
                      </div>
                      <Button size="sm" variant="outline" className="group">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of community members already using FoodBridge to fight hunger and reduce waste in their neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Join the Movement
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Watch Demo
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;