
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, Eye, RotateCcw, CreditCard, DollarSign, Lock, Crown, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProtectionMetricsProps {
  isPremium: boolean;
  timeFrame: string;
  onUpgrade: () => void;
  sellerName: string;
}

const ProtectionMetrics = ({ isPremium, timeFrame, onUpgrade, sellerName }: ProtectionMetricsProps) => {
  const multiplier = timeFrame === "30" ? 1 : timeFrame === "90" ? 3 : 12;

  const metrics = [
    {
      title: "Fraud Orders Protected",
      icon: Shield,
      basic: `${(14000 * multiplier).toLocaleString()}`,
      premium: `${(20000 * multiplier).toLocaleString()}`,
      description: isPremium ? "All orders automatically scanned" : "Manual verification when requested",
      basicDesc: "Manual verification when requested by seller",
      premiumDesc: "Automatic scanning of all orders",
      premiumFeature: "Automatic scanning of all orders",
      locked: false
    },
    {
      title: "Fake Reviews Protected",
      icon: Star,
      basic: `${100 * multiplier} reviews taken down`,
      premium: `${200 * multiplier} reviews taken down`,
      description: isPremium ? "Network + sabotage protection active" : "Network-level fraud protection only",
      basicDesc: "Network-level fraud detection only",
      premiumDesc: "Network + competitor sabotage protection",
      premiumFeature: "Network + competitor sabotage protection",
      locked: false
    },
    {
      title: "Customer Doorstep Verifications",
      icon: Eye,
      basic: `${(27000 * multiplier).toLocaleString()} orders`,
      premium: `${(32000 * multiplier).toLocaleString()} orders`,
      description: isPremium ? "Configurable for all product values" : "Only for non-sensitive products >₹800",
      basicDesc: "Non-sensitive products >₹800 only. First 100 free, then ₹10/order",
      premiumDesc: "Configurable for products <₹800 too",
      premiumFeature: "Configurable for products <₹800 too",
      locked: false
    },
    {
      title: "Return Frauds Caught",
      icon: RotateCcw,
      basic: `${700 * multiplier}`,
      premium: `${800 * multiplier}`,
      description: isPremium ? "Custom SmartCheck lists active" : "Basic fraud signals detected",
      basicDesc: "Clear fraud signals detected only",
      premiumDesc: "Custom brand x vertical checks (2 per quarter)",
      premiumFeature: "Custom brand x vertical checks (2 per quarter)",
      locked: false
    },
    {
      title: "COD Advance Collection",
      icon: CreditCard,
      basic: `${(54000 * multiplier).toLocaleString()}`,
      premium: `${(60000 * multiplier).toLocaleString()}`,
      description: isPremium ? "Seller-configurable rules" : "Platform-driven protection",
      basicDesc: "Platform sets partial digital payments for COD",
      premiumDesc: "Seller-configurable advance collection rules",
      premiumFeature: "Seller-configurable advance collection rules",
      locked: false
    },
    {
      title: "SPF Payout",
      icon: DollarSign,
      basic: `₹${(2000000 * multiplier).toLocaleString()}/month`,
      premium: `₹${(2020000 * multiplier).toLocaleString()}/month`,
      description: isPremium ? "Enhanced ceiling (extra ₹20,000)" : "Standard ceiling limits",
      basicDesc: "Standard SPF ceiling",
      premiumDesc: "Enhanced ceiling (extra ₹20,000)",
      premiumFeature: "Enhanced ceiling (extra ₹20,000)",
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
          <h3 className="text-xl font-semibold mb-2">Protection Impact Metrics for {sellerName}</h3>
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
                          {metric.premiumFeature}
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
                  <div className="text-lg font-bold text-blue-600">
                    {isPremium ? metric.premium : metric.basic}
                  </div>
                  <p className="text-xs text-gray-500">{metric.description}</p>
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
              Premium Exclusive Features for {sellerName}
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
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
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
