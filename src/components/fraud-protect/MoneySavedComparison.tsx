
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Crown, ArrowRight, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MoneySavedComparisonProps {
  isPremium: boolean;
  timeFrame: string;
  onUpgrade: () => void;
  sellerName: string;
}

const MoneySavedComparison = ({ isPremium, timeFrame, onUpgrade, sellerName }: MoneySavedComparisonProps) => {
  const multiplier = timeFrame === "30" ? 1 : timeFrame === "90" ? 3 : 12;
  const basicSavings = 1000000 * multiplier;
  const premiumSavings = 1184000 * multiplier;
  const potentialSavings = premiumSavings - basicSavings;

  const period = timeFrame === "30" ? "month" : timeFrame === "90" ? "quarter" : "year";

  return (
    <TooltipProvider>
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Money Saved Comparison for {sellerName}
          </CardTitle>
          <CardDescription>
            Basic protection vs Premium capabilities for this {period}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Savings */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border">
              <Badge variant="secondary" className="mb-3">Basic Plan - Manual Verification</Badge>
              <div className="text-4xl font-bold text-gray-700 mb-2">₹{basicSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mb-2">Saved this {period}</div>
              <div className="text-xs text-gray-500">
                • Orders verified only when requested
                • Network-level review protection
                • Standard claim limits
                • Non-sensitive products over ₹800 only
              </div>
            </div>

            {/* Premium Savings */}
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300 relative">
              <Badge className="mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600">
                <Crown className="w-3 h-3 mr-1" />
                Premium - Automatic Protection
              </Badge>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  ₹{premiumSavings.toLocaleString()}
                </div>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-yellow-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Based on automatic scanning of all orders and enhanced protection features</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-sm text-yellow-700 mb-2">Potential with automatic scanning</div>
              <div className="text-xs text-yellow-700">
                • All orders auto-scanned
                • Advanced sabotage protection
                • Enhanced claim limits (1% higher SPF)
                • Products under ₹800 also covered
              </div>
              
              {!isPremium && (
                <div className="mt-4 p-3 bg-white/80 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    ₹{potentialSavings.toLocaleString()} additional protection
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default MoneySavedComparison;
