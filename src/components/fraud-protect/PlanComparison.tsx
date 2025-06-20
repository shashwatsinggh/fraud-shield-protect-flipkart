import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, X, Crown, Info } from "lucide-react";

interface PlanComparisonProps {
  onUpgrade: () => void;
  sellerName: string;
}

const PlanComparison = ({ onUpgrade, sellerName }: PlanComparisonProps) => {
  const features = [
    {
      feature: "Order Verification",
      basic: "On manual request",
      premium: "Automatic",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Premium automatically verifies all high-risk orders, saving you time and preventing fraud before it happens."
    },
    {
      feature: "Customer Doorstep Verification",
      basic: "Limited to >₹800 products",
      premium: "Configurable <₹800",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "With Premium, you can configure doorstep verification for orders under ₹800, providing protection for all order values."
    },
    {
      feature: "SmartCheck on Customer Returns",
      basic: "Basic checks",
      premium: "Custom checklists + images",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Create custom verification checklists with image requirements to prevent return fraud more effectively."
    },
    {
      feature: "Rating and Review Protection",
      basic: "Basic network fraud protection",
      premium: "All fraud and sabotage protected",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Premium includes advanced sabotage protection and proactive monitoring for competitor attacks on your ratings."
    },
    {
      feature: "SPF Payout",
      basic: "Standard",
      premium: "Enhanced ceiling",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Get higher payout limits and faster claim processing with Premium SPF coverage."
    },
    {
      feature: "Pincode Blacklist",
      basic: "Not available",
      premium: "10 per quarter",
      basicIcon: <X className="w-4 h-4 text-red-400" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Block high-risk pin codes to prevent fraud-prone deliveries. Quota resets every quarter."
    },
    {
      feature: "Part Payment",
      basic: "Platform driven",
      premium: "Configurable",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Configure part payment rules per vertical to reduce payment fraud and chargebacks."
    },
    {
      feature: "Change Field Executive Request",
      basic: "Not available",
      premium: "2 per quarter",
      basicIcon: <X className="w-4 h-4 text-red-400" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Request delivery personnel changes for problematic areas. Perfect for maintaining service quality."
    },
    {
      feature: "Fraud Dashboard",
      basic: "Limited read-only",
      premium: "Full visibility + analytics",
      basicIcon: <Check className="w-4 h-4 text-yellow-500" />,
      premiumIcon: <Check className="w-4 h-4 text-green-500" />,
      tooltip: "Access detailed fraud analytics, savings reports, and actionable insights to optimize your protection strategy."
    }
  ];

  return (
    <TooltipProvider>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Plan Comparison for {sellerName}</CardTitle>
          <CardDescription>
            See the key differences between Basic and Premium plans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-2">Feature</th>
                  <th className="text-center py-4 px-2 min-w-[180px]">
                    <div className="space-y-1">
                      <div className="font-semibold">Basic</div>
                      <div className="text-sm text-gray-500">Free</div>
                    </div>
                  </th>
                  <th className="text-center py-4 px-2 min-w-[180px]">
                    <div className="space-y-1 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-2">
                      <div className="font-semibold flex items-center justify-center gap-1">
                        <Crown className="w-4 h-4 text-yellow-600" />
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
                    <td className="py-3 px-2 font-medium">
                      <div className="flex items-center gap-2">
                        {item.feature}
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.basicIcon}
                        <span className="text-sm">{item.basic}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center bg-gradient-to-r from-yellow-50/50 to-yellow-100/50">
                      <div className="flex items-center justify-center gap-2">
                        {item.premiumIcon}
                        <span className="text-sm font-medium text-yellow-800">{item.premium}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              onClick={onUpgrade} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Premium for {sellerName}
            </Button>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default PlanComparison;
