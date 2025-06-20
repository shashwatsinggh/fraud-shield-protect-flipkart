
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Bot, Send, MessageCircle, X, Loader2 } from "lucide-react";

interface StaticAIFraudChatbotProps {
  isPremium: boolean;
}

const StaticAIFraudChatbot = ({ isPremium }: StaticAIFraudChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, type: 'user' | 'bot', content: string, timestamp: Date}>>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showBrandSelection, setShowBrandSelection] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [awaitingBrandSelection, setAwaitingBrandSelection] = useState(false);

  const commonPrompts = [
    "How do I reduce fraud in my courier returns?",
    "How do I reduce fraud in my customer returns?", 
    "How do I reduce fraud in my rating and reviews?"
  ];

  const brandVerticalCombos = [
    { id: "nike-apparel", brand: "Nike", vertical: "Apparel" },
    { id: "samsung-electronics", brand: "Samsung", vertical: "Electronics" },
    { id: "adidas-footwear", brand: "Adidas", vertical: "Footwear" },
    { id: "apple-accessories", brand: "Apple", vertical: "Accessories" },
    { id: "zara-fashion", brand: "Zara", vertical: "Fashion" },
    { id: "sony-gadgets", brand: "Sony", vertical: "Gadgets" },
    { id: "titan-watches", brand: "Titan", vertical: "Watches" },
    { id: "hp-computers", brand: "HP", vertical: "Computers" }
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setCurrentMessage("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      
      if (!awaitingBrandSelection) {
        // First response - ask for brand selection
        const botResponse = {
          id: Date.now() + 1,
          type: 'bot' as const,
          content: "To provide you with the most relevant fraud protection recommendations, please select the brand x vertical combinations you're most concerned about (minimum 1):",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setShowBrandSelection(true);
        setAwaitingBrandSelection(true);
      }
    }, 1500);
  };

  const handleBrandSelectionSubmit = () => {
    if (selectedBrands.length === 0) return;

    const selectedCombos = brandVerticalCombos.filter(combo => selectedBrands.includes(combo.id));
    const brandNames = selectedCombos.map(combo => `${combo.brand} ${combo.vertical}`).join(", ");

    // Generate personalized response
    const improvements = [
      "serialized packing with tamper-evident seals",
      "VMS (Vendor Management System) integration",
      "scaled OBD (Open Box Delivery) verification",
      "enhanced SmartCheck protocols",
      "transparent packaging standards"
    ];

    const randomImprovement = improvements[Math.floor(Math.random() * improvements.length)];
    const reductionPercentage = Math.floor(Math.random() * 15) + 25; // 25-40%

    const botResponse = {
      id: Date.now(),
      type: 'bot' as const,
      content: `Based on our understanding of your location, product types (${brandNames}), and operations scale, when compared to similar sellers, you could achieve ${reductionPercentage}% lower fraud rates by implementing ${randomImprovement}. 

Our data shows sellers using these methods see significant improvements in fraud reduction. Would you like me to guide you to configure these features in your Fraud Protect dashboard?

[Configure Advanced Protection →](javascript:void(0))`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setShowBrandSelection(false);
    setAwaitingBrandSelection(false);
    setSelectedBrands([]);
  };

  const toggleBrandSelection = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  if (!isPremium) return null;

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg z-50"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 left-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">AI Fraud Protector</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Bot className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="bg-blue-50 p-3 rounded-lg flex-1">
                      <p className="text-sm">Hi! I'm your AI Fraud Protection assistant. Ask me anything about reducing fraud in your business.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 px-2">Popular questions:</p>
                    {commonPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                        onClick={() => handleSendMessage(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className={`flex items-start gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.type === 'bot' && <Bot className="w-6 h-6 text-blue-600 mt-1" />}
                  <div className={`p-3 rounded-lg max-w-[80%] ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-50'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <Bot className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span className="text-sm text-gray-600">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Brand Selection Interface */}
              {showBrandSelection && (
                <div className="space-y-3 border-t pt-3">
                  <p className="text-xs text-gray-600 px-2">Select your brand x vertical combinations:</p>
                  <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                    {brandVerticalCombos.map((combo) => (
                      <div key={combo.id} className="flex items-center space-x-2 p-2 border rounded">
                        <Checkbox
                          id={combo.id}
                          checked={selectedBrands.includes(combo.id)}
                          onCheckedChange={() => toggleBrandSelection(combo.id)}
                        />
                        <label htmlFor={combo.id} className="text-xs cursor-pointer">
                          <div className="font-medium">{combo.brand}</div>
                          <div className="text-gray-500">{combo.vertical}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    disabled={selectedBrands.length === 0}
                    onClick={handleBrandSelectionSubmit}
                  >
                    Get Recommendations ({selectedBrands.length} selected)
                  </Button>
                </div>
              )}
            </div>

            {/* Input Area */}
            {!showBrandSelection && (
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about fraud protection..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentMessage)}
                    className="flex-1"
                  />
                  <Button 
                    size="sm"
                    onClick={() => handleSendMessage(currentMessage)}
                    disabled={!currentMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default StaticAIFraudChatbot;
