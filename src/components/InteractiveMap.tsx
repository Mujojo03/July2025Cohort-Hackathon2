import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Apple } from "lucide-react";

interface FoodPoint {
  id: string;
  name: string;
  location: string;
  type: "donation" | "pickup";
  foodType: string;
  quantity: string;
  time: string;
  distance: string;
  status: "available" | "reserved" | "completed";
}

const mockFoodPoints: FoodPoint[] = [
  {
    id: "1",
    name: "Green Valley Restaurant",
    location: "Downtown District",
    type: "donation",
    foodType: "Prepared Meals",
    quantity: "50 portions",
    time: "2 hours ago",
    distance: "0.3 miles",
    status: "available"
  },
  {
    id: "2",
    name: "Community Food Bank",
    location: "West Side",
    type: "pickup",
    foodType: "Fresh Produce",
    quantity: "20 lbs",
    time: "1 hour ago",
    distance: "0.8 miles",
    status: "available"
  },
  {
    id: "3",
    name: "Metro Grocery",
    location: "City Center",
    type: "donation",
    foodType: "Packaged Goods",
    quantity: "30 items",
    time: "4 hours ago",
    distance: "1.2 miles",
    status: "reserved"
  },
  {
    id: "4",
    name: "Local Bakery",
    location: "Arts Quarter",
    type: "donation",
    foodType: "Baked Goods",
    quantity: "15 items",
    time: "30 minutes ago",
    distance: "0.5 miles",
    status: "available"
  }
];

const InteractiveMap = () => {
  const [selectedPoint, setSelectedPoint] = useState<FoodPoint | null>(null);
  const [filter, setFilter] = useState<"all" | "donation" | "pickup">("all");

  const filteredPoints = mockFoodPoints.filter(point => 
    filter === "all" || point.type === filter
  );

  const getStatusColor = (status: FoodPoint["status"]) => {
    switch (status) {
      case "available": return "bg-success text-success-foreground";
      case "reserved": return "bg-warning text-warning-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: FoodPoint["type"]) => {
    return type === "donation" ? <Users className="h-4 w-4" /> : <Apple className="h-4 w-4" />;
  };

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live Food Map</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time food donations and pickup points in your community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area (Placeholder) */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] overflow-hidden">
              <div className="relative h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Live map showing all food donation and pickup points
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    {mockFoodPoints.slice(0, 4).map((point, index) => (
                      <div
                        key={point.id}
                        className={`absolute w-4 h-4 rounded-full animate-pulse-glow cursor-pointer
                          ${point.type === 'donation' ? 'bg-primary' : 'bg-secondary'}
                        `}
                        style={{
                          top: `${30 + index * 15}%`,
                          left: `${25 + (index % 2) * 50}%`,
                          animationDelay: `${index * 0.5}s`
                        }}
                        onClick={() => setSelectedPoint(point)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar with Filters and List */}
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filter Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className="w-full justify-start"
                >
                  All Points ({mockFoodPoints.length})
                </Button>
                <Button
                  variant={filter === "donation" ? "default" : "outline"}
                  onClick={() => setFilter("donation")}
                  className="w-full justify-start"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Donations ({mockFoodPoints.filter(p => p.type === "donation").length})
                </Button>
                <Button
                  variant={filter === "pickup" ? "default" : "outline"}
                  onClick={() => setFilter("pickup")}
                  className="w-full justify-start"
                >
                  <Apple className="mr-2 h-4 w-4" />
                  Pickups ({mockFoodPoints.filter(p => p.type === "pickup").length})
                </Button>
              </CardContent>
            </Card>

            {/* Food Points List */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {filteredPoints.map((point) => (
                <Card
                  key={point.id}
                  className={`cursor-pointer transition-all card-hover ${
                    selectedPoint?.id === point.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedPoint(point)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(point.type)}
                        <h3 className="font-semibold">{point.name}</h3>
                      </div>
                      <Badge className={getStatusColor(point.status)}>
                        {point.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{point.location}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Food Type:</span>
                        <span className="font-medium">{point.foodType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span className="font-medium">{point.quantity}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {point.time}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {point.distance}
                        </span>
                      </div>
                    </div>
                    {point.status === "available" && (
                      <Button size="sm" className="w-full mt-3">
                        {point.type === "donation" ? "Reserve" : "Claim"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;