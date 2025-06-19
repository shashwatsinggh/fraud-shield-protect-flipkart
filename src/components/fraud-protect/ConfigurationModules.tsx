
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings, MapPin, CreditCard, UserCheck, CheckSquare, Star } from "lucide-react";

const ConfigurationModules = () => {
  const configCards = [
    {
      icon: CheckSquare,
      title: "SmartCheck Configuration",
      description: "Define custom return verification checklist",
      status: "3 active rules",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      title: "PIN Blacklist Manager",
      description: "Block high-risk delivery locations",
      status: "7/10 used this quarter",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: CreditCard,
      title: "COD Control Panel",
      description: "Manage cash-on-delivery rules",
      status: "Electronics: Blocked",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: UserCheck,
      title: "Field Executive Manager",
      description: "Request delivery personnel changes",
      status: "1/2 used this quarter",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Settings,
      title: "CX OBD Usage Tracker",
      description: "Monitor open box delivery for orders < ₹800",
      status: "₹450 spent this month",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Star,
      title: "Review Takedown Manager",
      description: "Report and remove fake reviews",
      status: "12 requests pending",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Premium Configuration</h3>
        <p className="text-gray-600">Customize your fraud protection settings and rules</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {configCards.map((card, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {card.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold">{card.title}</h4>
                <p className="text-sm text-gray-600">{card.description}</p>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Configuration Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Settings</CardTitle>
          <CardDescription>Commonly used configuration options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto Order Verification</p>
                  <p className="text-sm text-gray-500">Automatically verify high-risk orders</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Review Monitoring</p>
                  <p className="text-sm text-gray-500">Monitor for fake reviews</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">OBD Threshold (₹)</label>
                <Input type="number" placeholder="800" defaultValue="800" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Daily Fraud Alert Limit</label>
                <Input type="number" placeholder="50" defaultValue="50" />
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button className="w-full md:w-auto">Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigurationModules;
