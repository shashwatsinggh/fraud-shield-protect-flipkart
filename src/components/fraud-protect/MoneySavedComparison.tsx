
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Crown, ArrowRight } from "lucide-react";

interface MoneySavedComparisonProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

const MoneySavedComparison = ({ isPremium, onUpgrade }: MoneySavedComparisonProps) => {
  const basicSavings = 45230;
  const premiumSavings = 124680;
  const potentialSavings = premiumSavings - basicSavings;

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Money Saved
        </CardTitle>
        <CardDescription>
          Compare your current savings with premium potential
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Savings */}
          <div className="text-center p-6 bg-gray-50 rounded-lg border">
            <Badge variant="secondary" className="mb-3">Current Plan</Badge>
            <div className="text-4xl font-bold text-gray-700 mb-2">₹{basicSavings.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Saved this month</div>
          </div>

          {/* Premium Savings */}
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-300 relative">
            <Badge className="mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-2">
              ₹{premiumSavings.toLocaleString()}
            </div>
            <div className="text-sm text-yellow-700">Potential savings</div>
            
            {!isPremium && (
              <div className="mt-4 p-3 bg-white/80 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <ArrowRight className="w-4 h-4" />
                  ₹{potentialSavings.toLocaleString()} more savings
                </div>
              </div>
            )}
          </div>
        </div>

        {!isPremium && (
          <div className="mt-6 text-center">
            <Button 
              onClick={onUpgrade} 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            >
              <Crown className="w-4 h-4 mr-2" />
              Unlock Premium Savings
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoneySavedComparison;
