
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Crown } from "lucide-react";

interface FeatureComparisonTableProps {
  onUpgrade: () => void;
}

const FeatureComparisonTable = ({ onUpgrade }: FeatureComparisonTableProps) => {
  const features = [
    {
      feature: "Manual Order Verification",
      basic: "Yes",
      premium: "Yes + Auto Verification",
      basicIcon: <Check className="w-4 h-4 text-green-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "OBD (Open Box Delivery > ₹800)",
      basic: "Platform-driven",
      premium: "Configurable < ₹800",
      basicIcon: <Check className="w-4 h-4 text-green-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "SmartCheck Returns",
      basic: "Basic checks",
      premium: "Custom checklist + Images",
      basicIcon: <Check className="w-4 h-4 text-green-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "Rating & Review Protection",
      basic: "Network detection",
      premium: "+ Sabotage protection",
      basicIcon: <Check className="w-4 h-4 text-green-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "SPF Payout",
      basic: "Standard",
      premium: "Enhanced ceiling",
      basicIcon: <Check className="w-4 h-4 text-green-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "Pincode Blacklist",
      basic: "Not available",
      premium: "10 per quarter",
      basicIcon: <X className="w-4 h-4 text-red-400" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "COD Block Rules",
      basic: "Not available",
      premium: "1 vertical per quarter",
      basicIcon: <X className="w-4 h-4 text-red-400" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "Change Field Executive",
      basic: "Not available",
      premium: "2 per quarter",
      basicIcon: <X className="w-4 h-4 text-red-400" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      feature: "Fraud Dashboard",
      basic: "Limited read-only",
      premium: "Full visibility + analytics",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />
    }
  ];

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Choose Your Protection Level</CardTitle>
        <CardDescription>
          Compare features and upgrade to get advanced fraud protection
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-2">Feature</th>
                <th className="text-center py-4 px-2 min-w-[150px]">
                  <div className="space-y-1">
                    <div className="font-semibold">Basic</div>
                    <div className="text-sm text-gray-500">Free</div>
                  </div>
                </th>
                <th className="text-center py-4 px-2 min-w-[150px]">
                  <div className="space-y-1">
                    <div className="font-semibold flex items-center justify-center gap-1">
                      <Crown className="w-4 h-4 text-yellow-500" />
                      Premium
                    </div>
                    <div className="text-sm text-blue-600 font-medium">₹2,999/month</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium">{item.feature}</td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {item.basicIcon}
                      <span className="text-sm">{item.basic}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {item.premiumIcon}
                      <span className="text-sm font-medium">{item.premium}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <Button onClick={onUpgrade} size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Premium
          </Button>
          <p className="text-sm text-gray-500 mt-2">30-day money-back guarantee</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureComparisonTable;
