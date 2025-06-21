
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Check, Shield, Star, Eye, RotateCcw, CreditCard, DollarSign, Lock, MapPin, UserCheck, CheckSquare } from "lucide-react";

interface PlanBenefitsProps {
  sellerName: string;
}

const PlanBenefits = ({ sellerName }: PlanBenefitsProps) => {
  const benefits = [
    {
      icon: Shield,
      title: "Advanced Order Verification",
      description: "Automatic fraud detection for all orders",
      status: "Active"
    },
    {
      icon: Star,
      title: "Complete Review Protection",
      description: "Network + sabotage protection active",
      status: "Active"
    },
    {
      icon: Eye,
      title: "Flexible Doorstep Verification",
      description: "Configurable for all product values",
      status: "Active"
    },
    {
      icon: RotateCcw,
      title: "Smart Return Checks",
      description: "Custom brand verification lists (2 per quarter)",
      status: "Active"
    },
    {
      icon: CreditCard,
      title: "Configurable COD Advance Collection",
      description: "Seller-defined advance collection rules",
      status: "Active"
    },
    {
      icon: DollarSign,
      title: "Enhanced SPF Payouts",
      description: "Higher ceiling limits active",
      status: "Active"
    },
    {
      icon: MapPin,
      title: "Pincode Blacklisting",
      description: "10 slots available per quarter",
      status: "7/10 Used"
    },
    {
      icon: UserCheck,
      title: "Field Executive Changes",
      description: "2 requests available per quarter",
      status: "1/2 Used"
    },
    {
      icon: CheckSquare,
      title: "Full Analytics Dashboard",
      description: "Complete fraud protection insights",
      status: "Active"
    }
  ];

  return (
    <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Crown className="w-6 h-6 text-yellow-500" />
          Premium Benefits Active for {sellerName}
        </CardTitle>
        <CardDescription>
          Your comprehensive fraud protection suite is fully operational
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <benefit.icon className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{benefit.description}</p>
                  <Badge 
                    variant={benefit.status === "Active" ? "default" : "secondary"}
                    className={benefit.status === "Active" ? "bg-green-100 text-green-800" : ""}
                  >
                    {benefit.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
          <div className="text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">Premium Protection Summary</h4>
            <p className="text-sm text-yellow-700">
              All fraud protection features are active for {sellerName}. Your business is fully protected with our most advanced security measures.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanBenefits;
