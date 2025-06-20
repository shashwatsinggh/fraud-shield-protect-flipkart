
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, TrendingUp } from "lucide-react";

interface FraudProtectedSectionProps {
  isPremium: boolean;
  timeFrame: string;
  onTimeFrameChange: (value: string) => void;
  sellerName: string;
}

const FraudProtectedSection = ({ isPremium, timeFrame, onTimeFrameChange, sellerName }: FraudProtectedSectionProps) => {
  const getDataForTimeFrame = (timeFrame: string) => {
    const multiplier = timeFrame === "30" ? 1 : timeFrame === "90" ? 3 : 12;
    
    // Individual metrics
    const fraudOrdersProtected = (isPremium ? 20000 : 14000) * multiplier;
    const doorstepVerifications = (isPremium ? 32000 : 27000) * multiplier;
    const codAdvanceCollection = (isPremium ? 60000 : 54000) * multiplier;
    
    const reviewTakedowns = (isPremium ? 200 : 100) * multiplier;
    const returnFrauds = (isPremium ? 800 : 700) * multiplier;
    
    return {
      ordersProtected: fraudOrdersProtected + doorstepVerifications + codAdvanceCollection,
      moneySaved: (isPremium ? 1184000 : 1000000) * multiplier,
      fraudsBlocked: reviewTakedowns + returnFrauds
    };
  };

  const data = getDataForTimeFrame(timeFrame);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Fraud Protected for {sellerName}
            </CardTitle>
            <CardDescription>
              Your fraud protection performance overview
            </CardDescription>
          </div>
          <Select value={timeFrame} onValueChange={onTimeFrameChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last 1 year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{data.ordersProtected.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">Orders Protected</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">₹{data.moneySaved.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">Money Saved</div>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <div className="text-3xl font-bold text-red-600">{data.fraudsBlocked}</div>
            <div className="text-sm text-gray-600 mt-1">Frauds Blocked</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudProtectedSection;
