
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, AlertTriangle, Crown, CheckCircle } from "lucide-react";
import HeroSection from "./fraud-protect/HeroSection";
import FraudImpactDashboard from "./fraud-protect/FraudImpactDashboard";
import FeatureComparisonTable from "./fraud-protect/FeatureComparisonTable";
import ConfigurationModules from "./fraud-protect/ConfigurationModules";
import SubscriptionManagement from "./fraud-protect/SubscriptionManagement";
import TestimonialCarousel from "./fraud-protect/TestimonialCarousel";

const FraudProtectDashboard = () => {
  // This would come from user context/API in real implementation
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl">
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
          onUpgrade={() => setShowUpgradeModal(true)}
        />

        {/* Main Content */}
        <div className="mt-8">
          {isPremium ? (
            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 lg:w-fit">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="configuration">Configuration</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                <FraudImpactDashboard isPremium={isPremium} />
              </TabsContent>
              
              <TabsContent value="configuration">
                <ConfigurationModules />
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Fraud Reports</CardTitle>
                    <CardDescription>
                      Download detailed reports and track your protection metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Report generation feature coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="subscription">
                <SubscriptionManagement isPremium={isPremium} />
              </TabsContent>
            </Tabs>
          ) : (
            <div className="space-y-8">
              <FraudImpactDashboard isPremium={isPremium} />
              <FeatureComparisonTable onUpgrade={() => setShowUpgradeModal(true)} />
              <TestimonialCarousel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FraudProtectDashboard;
