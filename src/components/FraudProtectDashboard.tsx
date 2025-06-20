
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Crown } from "lucide-react";
import HeroSection from "./fraud-protect/HeroSection";
import FraudProtectedSection from "./fraud-protect/FraudProtectedSection";
import MoneySavedComparison from "./fraud-protect/MoneySavedComparison";
import ProtectionMetrics from "./fraud-protect/ProtectionMetrics";
import FraudActivityDashboard from "./fraud-protect/FraudActivityDashboard";
import PlanComparison from "./fraud-protect/PlanComparison";
import PlanBenefits from "./fraud-protect/PlanBenefits";
import TestimonialCarousel from "./fraud-protect/TestimonialCarousel";
import FAQSection from "./fraud-protect/FAQSection";
import PricingModal from "./fraud-protect/PricingModal";
import CustomPlanChatbot from "./fraud-protect/CustomPlanChatbot";
import StaticAIFraudChatbot from "./fraud-protect/StaticAIFraudChatbot";

const FraudProtectDashboard = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showCustomPlanChat, setShowCustomPlanChat] = useState(false);
  const [timeFrame, setTimeFrame] = useState("30");

  const handleUpgrade = (couponCode?: string) => {
    if (couponCode === "PREMIUM100") {
      setIsPremium(true);
      setShowPricingModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Fraud Protect</h1>
            <p className="text-gray-600">Advanced seller protection and fraud prevention</p>
          </div>
        </div>

        {/* Hero Section */}
        <HeroSection 
          isPremium={isPremium} 
          onUpgrade={() => setShowPricingModal(true)}
        />

        {/* Fraud Protected Section */}
        <div className="mt-8">
          <FraudProtectedSection 
            isPremium={isPremium} 
            timeFrame={timeFrame}
            onTimeFrameChange={setTimeFrame}
          />
        </div>

        {/* Money Saved Comparison */}
        <div className="mt-8">
          {isPremium ? (
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  Total Money Saved
                </CardTitle>
                <CardDescription>
                  Your fraud protection savings this {timeFrame === "30" ? "month" : timeFrame === "90" ? "quarter" : "year"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
                    ₹{(124680 * (timeFrame === "30" ? 1 : timeFrame === "90" ? 3 : 12)).toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-600">Protected from fraud losses</div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <MoneySavedComparison 
              isPremium={isPremium} 
              timeFrame={timeFrame}
              onUpgrade={() => setShowPricingModal(true)} 
            />
          )}
        </div>

        {/* Protection Metrics */}
        <div className="mt-8">
          <ProtectionMetrics 
            isPremium={isPremium} 
            timeFrame={timeFrame}
            onUpgrade={() => setShowPricingModal(true)} 
          />
        </div>

        {/* Fraud Activity Dashboard - Always show but blurred for Basic */}
        <div className="mt-8">
          <FraudActivityDashboard isPremium={isPremium} />
        </div>

        {/* AI Plan Advisor CTA for Basic Users */}
        {!isPremium && (
          <div className="mt-8">
            <Card className="border-2 border-dashed border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Plan Advisor</h3>
                    <p className="text-gray-600">Get personalized fraud protection recommendations based on your business needs</p>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setShowCustomPlanChat(true)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    I want to make my own premium plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Plan Section */}
        <div className="mt-8">
          {isPremium ? (
            <PlanBenefits />
          ) : (
            <PlanComparison onUpgrade={() => setShowPricingModal(true)} />
          )}
        </div>

        {/* Single Upgrade CTA for Basic users */}
        {!isPremium && (
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              onClick={() => setShowPricingModal(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Premium
            </Button>
          </div>
        )}

        {/* Testimonials */}
        <div className="mt-12">
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <FAQSection />
        </div>

        {/* Modals */}
        <PricingModal 
          isOpen={showPricingModal} 
          onClose={() => setShowPricingModal(false)}
          onUpgrade={handleUpgrade}
        />
        
        <CustomPlanChatbot 
          isOpen={showCustomPlanChat} 
          onClose={() => setShowCustomPlanChat(false)} 
        />
      </div>

      {/* Static AI Fraud Chatbot - Only for Premium users */}
      <StaticAIFraudChatbot isPremium={isPremium} />
    </div>
  );
};

export default FraudProtectDashboard;
