
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, Eye, RotateCcw, CreditCard, DollarSign, Lock, Crown } from "lucide-react";

interface ProtectionMetricsProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

const ProtectionMetrics = ({ isPremium, onUpgrade }: ProtectionMetricsProps) => {
  const metrics = [
    {
      title: "Fraud Orders Protected",
      icon: Shield,
      basic: "1,234",
      premium: "2,847",
      description: "Orders automatically verified and protected",
      locked: false
    },
    {
      title: "Fake Ratings & Reviews Taken Down",
      icon: Star,
      basic: "67 reviews",
      premium: "156 reviews, 89 ratings",
      description: "Fraudulent reviews and ratings removed",
      locked: false
    },
    {
      title: "Customer Doorstep Verifications",
      icon: Eye,
      basic: "89",
      premium: "245",
      description: "Orders verified at customer doorstep",
      locked: false
    },
    {
      title: "Return Frauds Caught",
      icon: RotateCcw,
      basic: "12",
      premium: "43",
      description: "Fraudulent returns prevented",
      locked: false
    },
    {
      title: "Part Payment Orders",
      icon: CreditCard,
      basic: "156",
      premium: "389",
      description: "Orders with partial payment protection",
      locked: false
    },
    {
      title: "SPF Payout",
      icon: DollarSign,
      basic: "₹23,450",
      premium: "₹67,890",
      description: "Enhanced ceiling protection",
      locked: false
    }
  ];

  const premiumOnlyFeatures = [
    {
      title: "Pincode Serviceability Blocks",
      icon: Lock,
      count: "7/10 used",
      description: "Block high-risk delivery locations"
    },
    {
      title: "Field Executive Change Requests",
      icon: Lock,
      count: "1/2 used",
      description: "Request delivery personnel changes"
    },
    {
      title: "Review Takedown Requests",
      icon: Lock,
      count: "12 pending",
      description: "Manual review takedown requests"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Protection Impact Metrics</h3>
        <p className="text-gray-600">Compare your current protection with premium benefits</p>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <metric.icon className="w-5 h-5 text-blue-600" />
                </div>
                {!isPremium && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                    <Crown className="w-3 h-3 inline mr-1" />
                    {metric.premium}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{metric.title}</h4>
                <div className="text-2xl font-bold text-blue-600">
                  {isPremium ? metric.premium : metric.basic}
                </div>
                <p className="text-xs text-gray-500">{metric.description}</p>
                {!isPremium && (
                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs">
                      Current: {metric.basic}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Premium Only Features */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          Premium Exclusive Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {premiumOnlyFeatures.map((feature, index) => (
            <Card key={index} className={`${!isPremium ? 'opacity-60' : ''} border-yellow-200`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <feature.icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
                </div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <div className="text-lg font-bold text-yellow-600 mb-1">
                  {isPremium ? feature.count : '---'}
                </div>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {!isPremium && (
        <div className="text-center mt-6">
          <Button 
            onClick={onUpgrade}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          >
            <Crown className="w-4 h-4 mr-2" />
            Unlock All Premium Metrics
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProtectionMetrics;
