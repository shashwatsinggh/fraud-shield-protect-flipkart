
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Eye, CheckSquare, MapPin, CreditCard, UserCheck, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import CustomerDoorstepModal from "./config-modals/CustomerDoorstepModal";
import SmartCheckModal from "./config-modals/SmartCheckModal";
import PincodeBlacklistModal from "./config-modals/PincodeBlacklistModal";
import PartPaymentModal from "./config-modals/PartPaymentModal";
import FieldExecutiveModal from "./config-modals/FieldExecutiveModal";
import ReviewProtectionModal from "./config-modals/ReviewProtectionModal";

const PlanBenefits = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const benefits = [
    {
      id: "doorstep",
      icon: Eye,
      title: "Customer Doorstep Verification",
      description: "Open box delivery verification for orders under ₹800",
      configurable: true
    },
    {
      id: "smartcheck",
      icon: CheckSquare,
      title: "SmartCheck on Customer Returns",
      description: "Custom return verification checklists with image uploads",
      configurable: true
    },
    {
      id: "pincode",
      icon: MapPin,
      title: "Pincode Blacklist",
      description: "Block high-risk delivery locations (10 per quarter)",
      configurable: true
    },
    {
      id: "partpayment",
      icon: CreditCard,
      title: "Part Payment",
      description: "Configurable payment rules for your products",
      configurable: true
    },
    {
      id: "fieldexecutive",
      icon: UserCheck,
      title: "Change Field Executive Request",
      description: "Request delivery personnel changes (2 per quarter)",
      configurable: true
    },
    {
      id: "reviewprotection",
      icon: Star,
      title: "Rating and Review Protection",
      description: "Advanced fraud detection and takedown requests",
      configurable: true
    },
    {
      id: "autoorder",
      icon: Shield,
      title: "Automatic Order Verification",
      description: "AI-powered fraud detection on all orders",
      configurable: false
    },
    {
      id: "spf",
      icon: TrendingUp,
      title: "Enhanced SPF Payout",
      description: "Higher protection ceiling for seller claims",
      configurable: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-600" />
            Premium Plan Benefits
          </CardTitle>
          <CardDescription>
            Your active premium features and configuration options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{benefit.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
                {benefit.configurable && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setActiveModal(benefit.id)}
                    className="ml-3"
                  >
                    Configure
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configuration Modals */}
      <CustomerDoorstepModal 
        isOpen={activeModal === "doorstep"} 
        onClose={() => setActiveModal(null)} 
      />
      <SmartCheckModal 
        isOpen={activeModal === "smartcheck"} 
        onClose={() => setActiveModal(null)} 
      />
      <PincodeBlacklistModal 
        isOpen={activeModal === "pincode"} 
        onClose={() => setActiveModal(null)} 
      />
      <PartPaymentModal 
        isOpen={activeModal === "partpayment"} 
        onClose={() => setActiveModal(null)} 
      />
      <FieldExecutiveModal 
        isOpen={activeModal === "fieldexecutive"} 
        onClose={() => setActiveModal(null)} 
      />
      <ReviewProtectionModal 
        isOpen={activeModal === "reviewprotection"} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
};

export default PlanBenefits;
