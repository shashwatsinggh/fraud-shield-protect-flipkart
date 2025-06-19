
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Bot, Send, CheckCircle, Crown } from "lucide-react";
import { useState } from "react";

interface CustomPlanChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomPlanChatbot = ({ isOpen, onClose }: CustomPlanChatbotProps) => {
  const [chatStep, setChatStep] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = [
    { id: "auto-verify", name: "Automatic Order Verification", price: 999 },
    { id: "custom-obd", name: "Custom OBD Configuration", price: 499 },
    { id: "smartcheck", name: "SmartCheck Custom Lists", price: 699 },
    { id: "review-protection", name: "Advanced Review Protection", price: 399 },
    { id: "spf-enhanced", name: "Enhanced SPF Ceiling", price: 299 },
    { id: "pincode-block", name: "Pincode Blacklisting", price: 199 },
    { id: "cod-rules", name: "COD Configuration", price: 149 },
    { id: "fe-change", name: "Field Executive Changes", price: 99 }
  ];

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const totalPrice = selectedFeatures.reduce((sum, featureId) => {
    const feature = features.find(f => f.id === featureId);
    return sum + (feature?.price || 0);
  }, 0);

  const renderChatStep = () => {
    switch (chatStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1">
                <p className="text-sm">
                  Hi! I'm here to help you create a custom fraud protection plan. Based on your store metrics:
                </p>
                <div className="mt-3 space-y-1 text-xs">
                  <div>• RVP%: 2.3% (Industry avg: 3.1%)</div>
                  <div>• RTO%: 8.7% (Industry avg: 12.4%)</div>
                  <div>• SPF Claims: ₹23,450/month</div>
                </div>
                <p className="text-sm mt-3">
                  I recommend our Premium plan for maximum protection. Would you like to see the standard plan or customize it?
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setChatStep(2)}
              >
                I Accept
              </Button>
              <Button 
                size="sm"
                onClick={() => setChatStep(3)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                I want to customize
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex-1">
                <p className="text-sm font-semibold">Perfect! Premium Plan Selected</p>
                <p className="text-sm mt-2">
                  You'll get all premium features including automatic verification, custom OBD, SmartCheck, and more for ₹2,999/month.
                </p>
              </div>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500"
              onClick={onClose}
            >
              <Crown className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1">
                <p className="text-sm">
                  Great! Select the features you need for your custom plan:
                </p>
              </div>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={feature.id}
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={() => handleFeatureToggle(feature.id)}
                  />
                  <label htmlFor={feature.id} className="flex-1 cursor-pointer">
                    <div className="font-medium text-sm">{feature.name}</div>
                    <div className="text-xs text-gray-500">₹{feature.price}/month</div>
                  </label>
                </div>
              ))}
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Monthly Cost:</span>
                  <span className="text-xl font-bold text-blue-600">₹{totalPrice.toLocaleString()}</span>
                </div>
                {totalPrice > 0 && (
                  <div className="text-xs text-gray-600 mt-1">
                    Save ₹{(2999 - totalPrice).toLocaleString()} vs Premium plan
                  </div>
                )}
              </CardContent>
            </Card>

            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500"
              disabled={selectedFeatures.length === 0}
              onClick={onClose}
            >
              Get Custom Plan (₹{totalPrice.toLocaleString()}/month)
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            AI Plan Advisor
          </DialogTitle>
          <DialogDescription>
            Let me help you create the perfect fraud protection plan
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          {renderChatStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomPlanChatbot;
