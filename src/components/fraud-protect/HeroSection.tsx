
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  isPremium: boolean;
  onUpgrade: () => void;
}

const HeroSection = ({ isPremium, onUpgrade }: HeroSectionProps) => {
  return (
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
                    Basic Plan
                  </Badge>
                </>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {isPremium 
                  ? "Premium Protection Active" 
                  : "Your Store is Protected"
                }
              </h2>
              <p className="text-blue-100 text-lg">
                {isPremium
                  ? "Advanced fraud protection and custom controls are enabled for your store"
                  : "Basic fraud protection is active. Upgrade for advanced features and savings"
                }
              </p>
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
  );
};

export default HeroSection;
