
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Bot, Send, CheckCircle, Crown, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface CustomPlanChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomPlanChatbot = ({ isOpen, onClose }: CustomPlanChatbotProps) => {
  const [chatStep, setChatStep] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [aiRecommendations, setAiRecommendations] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");

  const features = [
    { id: "auto-verify", name: "Automatic Order Verification", price: 999, recommended: true },
    { id: "custom-obd", name: "Custom OBD Configuration", price: 499, recommended: true },
    { id: "smartcheck", name: "SmartCheck Custom Lists", price: 699, recommended: false },
    { id: "review-protection", name: "Advanced Review Protection", price: 399, recommended: true },
    { id: "spf-enhanced", name: "Enhanced SPF Ceiling", price: 299, recommended: false },
    { id: "pincode-block", name: "Pincode Blacklisting", price: 199, recommended: false },
    { id: "cod-rules", name: "COD Configuration", price: 149, recommended: false },
    { id: "fe-change", name: "Field Executive Changes", price: 99, recommended: false }
  ];

  const fraudTypes = ["Fake Returns", "Identity Fraud", "Payment Fraud"];

  useEffect(() => {
    if (isOpen && chatStep === 1) {
      setIsTyping(true);
      const fullText = `Based on our understanding of your products and scale of operations, and considering common fraud types like ${fraudTypes.join(", ")}, we suggest the following protection plan tailored for your business needs.`;
      
      let currentText = "";
      let index = 0;
      
      const typeWriter = setInterval(() => {
        if (index < fullText.length) {
          currentText += fullText.charAt(index);
          setTypingText(currentText);
          index++;
        } else {
          setIsTyping(false);
          setChatStep(2);
          // Set AI recommendations
          setAiRecommendations(["auto-verify", "custom-obd", "review-protection"]);
          setSelectedFeatures(["auto-verify", "custom-obd", "review-protection"]);
          clearInterval(typeWriter);
        }
      }, 50);

      return () => clearInterval(typeWriter);
    }
  }, [isOpen, chatStep]);

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

  const handleProceedToPlan = () => {
    // This would trigger the pricing modal in the parent component
    onClose();
  };

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
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold">AI Plan Advisor</span>
                  {isTyping && <Loader2 className="w-3 h-3 animate-spin" />}
                </div>
                <p className="text-sm">
                  {typingText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1">
                <p className="text-sm font-semibold mb-2">
                  Recommended Protection Plan
                </p>
                <p className="text-sm">
                  Based on your store metrics and common fraud patterns, here's what we suggest:
                </p>
              </div>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {features.map((feature) => (
                <div key={feature.id} className={`flex items-center space-x-3 p-3 border rounded-lg ${
                  aiRecommendations.includes(feature.id) ? 'border-blue-200 bg-blue-50' : ''
                }`}>
                  <Checkbox
                    id={feature.id}
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={() => handleFeatureToggle(feature.id)}
                  />
                  <label htmlFor={feature.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{feature.name}</span>
                      {aiRecommendations.includes(feature.id) && (
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">AI Recommended</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">₹{feature.price}/month</div>
                  </label>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Custom Plan Cost:</span>
                  <span className="text-xl font-bold text-blue-600">₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  AI optimized for your business needs
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500"
              disabled={selectedFeatures.length === 0}
              onClick={handleProceedToPlan}
            >
              <Crown className="w-4 h-4 mr-2" />
              I want this plan (₹{totalPrice.toLocaleString()}/month)
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
            Let me create a personalized fraud protection plan for your store
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
