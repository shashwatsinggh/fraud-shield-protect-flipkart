
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
import TestimonialCarousel from "./fraud-protect/TestimonialCarousel";
import FAQSection from "./fraud-protect/FAQSection";
import PricingModal from "./fraud-protect/PricingModal";
import CustomPlanChatbot from "./fraud-protect/CustomPlanChatbot";

const FraudProtectDashboard = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showCustomPlanChat, setShowCustomPlanChat] = useState(false);

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
          <FraudProtectedSection isPremium={isPremium} />
        </div>

        {/* Money Saved Comparison */}
        <div className="mt-8">
          <MoneySavedComparison 
            isPremium={isPremium} 
            onUpgrade={() => setShowPricingModal(true)} 
          />
        </div>

        {/* Protection Metrics */}
        <div className="mt-8">
          <ProtectionMetrics 
            isPremium={isPremium} 
            onUpgrade={() => setShowPricingModal(true)} 
          />
        </div>

        {/* Fraud Activity Dashboard */}
        <div className="mt-8">
          <FraudActivityDashboard isPremium={isPremium} />
        </div>

        {/* Plan Comparison */}
        <div className="mt-8">
          <PlanComparison onUpgrade={() => setShowPricingModal(true)} />
        </div>

        {/* Upgrade CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => setShowPricingModal(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          >
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Premium
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setShowCustomPlanChat(true)}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            I want to make my own premium plan
          </Button>
        </div>

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
        />
        
        <CustomPlanChatbot 
          isOpen={showCustomPlanChat} 
          onClose={() => setShowCustomPlanChat(false)} 
        />
      </div>
    </div>
  );
};

export default FraudProtectDashboard;
