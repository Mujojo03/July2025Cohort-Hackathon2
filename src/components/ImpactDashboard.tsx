import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, MapPin, Award, TrendingUp, Clock } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    label: "People Fed Today",
    value: "1,247",
    change: "+23%",
    color: "text-primary"
  },
  {
    icon: Leaf,
    label: "CO2 Saved (lbs)",
    value: "8,532",
    change: "+18%",
    color: "text-accent"
  },
  {
    icon: MapPin,
    label: "Active Locations",
    value: "89",
    change: "+12%",
    color: "text-secondary"
  },
  {
    icon: Award,
    label: "Community Score",
    value: "4.9/5",
    change: "+0.2",
    color: "text-info"
  }
];

const achievements = [
  { title: "Hunger Hero", description: "Fed 1000+ people", progress: 85 },
  { title: "Waste Warrior", description: "Saved 500 lbs of food", progress: 92 },
  { title: "Community Builder", description: "Connected 50+ partners", progress: 67 },
  { title: "Planet Protector", description: "Reduced 1 ton CO2", progress: 78 }
];

const recentActivity = [
  {
    type: "donation",
    user: "Green Valley Restaurant",
    action: "donated 50 meals",
    time: "2 min ago",
    impact: "+150 lbs saved"
  },
  {
    type: "pickup",
    user: "Community Center",
    action: "picked up fresh produce",
    time: "15 min ago",
    impact: "+75 people fed"
  },
  {
    type: "achievement",
    user: "Maria Santos",
    action: "earned Hunger Hero badge",
    time: "1 hour ago",
    impact: "Level up!"
  }
];

const ImpactDashboard = () => {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Real Impact
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Community Impact <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the real-time impact of our community fighting hunger together
          </p>
        </div>

        <div className="grid gap-8">
          {/* Key Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                      <Badge variant="outline" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Community Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Community Achievements</span>
                </CardTitle>
                <CardDescription>
                  Progress towards our collective goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                      <Badge variant="secondary">{achievement.progress}%</Badge>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>Live Activity Feed</span>
                </CardTitle>
                <CardDescription>
                  Real-time community actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'donation' ? 'bg-primary' :
                      activity.type === 'pickup' ? 'bg-secondary' : 'bg-accent'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                        <Badge variant="outline" className="text-xs">
                          {activity.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;