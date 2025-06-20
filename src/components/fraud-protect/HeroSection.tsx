
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, TrendingUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HeroSectionProps {
  isPremium: boolean;
  onUpgrade: () => void;
  sellerName: string;
}

const HeroSection = ({ isPremium, onUpgrade, sellerName }: HeroSectionProps) => {
  return (
    <TooltipProvider>
      <Card className="bg-gradient-to-r from-blue-600 to-blue-500 text-white border-0 shadow-xl">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2">
                {isPremium ? (
                  <>
                    <Crown className="w-6 h-6 text-yellow-300" />
                    <Badge variant="secondary" className="bg-yellow-300 text-yellow-900">
                      Premium Active
                    </Badge>
                  </>
                ) : (
                  <>
                    <Shield className="w-6 h-6" />
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Basic Protection
                    </Badge>
                  </>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  {isPremium 
                    ? `Premium Protection Active for ${sellerName}` 
                    : `Basic Protection Enabled for ${sellerName}`
                  }
                </h2>
                <p className="text-blue-100 text-lg mb-2">
                  {isPremium
                    ? "Advanced fraud protection with automatic scanning and custom controls"
                    : "Essential fraud protection - only requested orders are scanned for fraud"
                  }
                </p>
                {!isPremium && (
                  <p className="text-blue-200 text-sm">
                    Unlock automatic scanning of all orders, advanced controls, and enhanced claim limits with Premium
                  </p>
                )}
              </div>

              {isPremium && (
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Auto-renewal: ON</span>
                  </div>
                  <div>Next billing: March 15, 2024</div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-4">
              {!isPremium && (
                <>
                  <div className="text-center">
                    <div className="text-3xl font-bold">₹2,999</div>
                    <div className="text-blue-100">per month</div>
                    <div className="text-xs text-blue-200 mt-1">Save an additional ₹1,64,000 monthly</div>
                  </div>
                  <Button 
                    onClick={onUpgrade}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  >
                    Upgrade to Premium
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default HeroSection;
