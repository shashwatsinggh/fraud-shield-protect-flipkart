
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, AlertTriangle, CheckCircle, Lock } from "lucide-react";

interface FraudImpactDashboardProps {
  isPremium: boolean;
}

const FraudImpactDashboard = ({ isPremium }: FraudImpactDashboardProps) => {
  const stats = [
    {
      title: "Money Saved",
      value: isPremium ? "₹1,24,680" : "₹45,230",
      change: "+23%",
      icon: TrendingUp,
      description: "Total fraud prevention savings",
      premium: false
    },
    {
      title: "Orders Protected",
      value: isPremium ? "2,847" : "1,234",
      change: "+15%",
      icon: Shield,
      description: "Auto-verified and flagged orders",
      premium: false
    },
    {
      title: "Fake Reviews Blocked",
      value: isPremium ? "156" : "0",
      change: "New",
      icon: CheckCircle,
      description: "Rating manipulation prevented",
      premium: true
    },
    {
      title: "Return Frauds Stopped",
      value: isPremium ? "43" : "12",
      change: "+8%",
      icon: AlertTriangle,
      description: "SmartCheck interventions",
      premium: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Protection Impact</h3>
        <p className="text-gray-600">Your fraud protection performance over the last 30 days</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className={`relative ${stat.premium && !isPremium ? 'opacity-60' : ''}`}>
            {stat.premium && !isPremium && (
              <div className="absolute top-2 right-2">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-100 rounded-lg w-fit">
                  <stat.icon className="w-4 h-4 text-blue-600" />
                </div>
                <Badge variant={stat.change.includes('+') ? 'default' : 'secondary'} className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="text-2xl font-bold">
                  {stat.premium && !isPremium ? '---' : stat.value}
                </div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Recent Protection Activity
            {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
          </CardTitle>
          <CardDescription>
            {isPremium 
              ? "Latest fraud prevention actions taken on your behalf"
              : "Upgrade to Premium to see detailed protection activity"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isPremium ? (
            <div className="space-y-3">
              {[
                { time: "2 hours ago", action: "Auto-verified high-risk order", amount: "₹4,560", type: "success" },
                { time: "5 hours ago", action: "Blocked fake review attempt", amount: "Rating protected", type: "warning" },
                { time: "1 day ago", action: "SmartCheck prevented return fraud", amount: "₹2,340", type: "success" },
                { time: "2 days ago", action: "OBD verification completed", amount: "₹1,200", type: "info" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Badge variant={activity.type === 'success' ? 'default' : 'secondary'}>
                    {activity.amount}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Lock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Detailed activity logs are available with Premium</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FraudImpactDashboard;
