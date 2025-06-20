
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, Eye, RotateCcw, CreditCard, DollarSign, Lock, Crown, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProtectionMetricsProps {
  isPremium: boolean;
  timeFrame: string;
  onUpgrade: () => void;
}

const ProtectionMetrics = ({ isPremium, timeFrame, onUpgrade }: ProtectionMetricsProps) => {
  const multiplier = timeFrame === "30" ? 1 : timeFrame === "90" ? 3 : 12;

  const metrics = [
    {
      title: "Fraud Orders Protected",
      icon: Shield,
      basic: (1234 * multiplier).toLocaleString(),
      premium: (2847 * multiplier).toLocaleString(),
      description: isPremium ? "All orders automatically scanned" : "Orders verified on request only",
      basicDesc: "Manual verification when requested",
      premiumDesc: "Automatic scanning of all orders",
      locked: false
    },
    {
      title: "Fake Ratings & Reviews Protected",
      icon: Star,
      basic: `${67 * multiplier} reviews`,
      premium: `${156 * multiplier} reviews, ${89 * multiplier} ratings`,
      description: isPremium ? "Network + sabotage protection active" : "Network-level fraud protection only",
      basicDesc: "Network-level fraud detection",
      premiumDesc: "Network + competitor sabotage protection",
      locked: false
    },
    {
      title: "Customer Doorstep Verifications",
      icon: Eye,
      basic: (89 * multiplier).toLocaleString(),
      premium: (245 * multiplier).toLocaleString(),
      description: isPremium ? "Configurable for all product values" : "Only for non-sensitive products >₹800",
      basicDesc: "Non-sensitive products >₹800 only",
      premiumDesc: "Configurable for products <₹800 too",
      locked: false
    },
    {
      title: "Return Frauds Caught",
      icon: RotateCcw,
      basic: (12 * multiplier).toLocaleString(),
      premium: (43 * multiplier).toLocaleString(),
      description: isPremium ? "Custom SmartCheck lists active" : "Basic fraud signals detected",
      basicDesc: "Clear fraud signals detected",
      premiumDesc: "Custom brand x vertical checks",
      locked: false
    },
    {
      title: "Part Payment Orders",
      icon: CreditCard,
      basic: (156 * multiplier).toLocaleString(),
      premium: (389 * multiplier).toLocaleString(),
      description: isPremium ? "Seller-configurable rules" : "Platform-driven protection",
      basicDesc: "Platform sets partial payments",
      premiumDesc: "Seller-configurable payment rules",
      locked: false
    },
    {
      title: "SPF Payout",
      icon: DollarSign,
      basic: `₹${(23450 * multiplier).toLocaleString()}`,
      premium: `₹${(67890 * multiplier).toLocaleString()}`,
      description: isPremium ? "Enhanced ceiling (1% higher)" : "Standard ceiling limits",
      basicDesc: "Standard SPF ceiling",
      premiumDesc: "Enhanced ceiling (1% higher)",
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
    <TooltipProvider>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Protection Impact Metrics</h3>
          <p className="text-gray-600">Your current protection capabilities vs premium features</p>
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
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          {metric.premium}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{metric.premiumDesc}</p>
                      </TooltipContent>
                    </Tooltip>
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
        {!isPremium && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              Premium Exclusive Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {premiumOnlyFeatures.map((feature, index) => (
                <Card key={index} className="opacity-60 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <feature.icon className="w-5 h-5 text-yellow-600" />
                      </div>
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <div className="text-lg font-bold text-yellow-600 mb-1">
                      {feature.count}
                    </div>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default ProtectionMetrics;
