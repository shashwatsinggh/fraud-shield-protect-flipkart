
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Crown, CreditCard, Calculator } from "lucide-react";
import { useState } from "react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade?: (couponCode?: string) => void;
}

const PricingModal = ({ isOpen, onClose, onUpgrade }: PricingModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState("immediate");
  const [couponCode, setCouponCode] = useState("");

  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade(couponCode);
    }
    console.log("Upgrading with payment method:", paymentMethod, "Coupon:", couponCode);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            Upgrade to Premium
          </DialogTitle>
          <DialogDescription>
            Choose your payment method to activate premium protection
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Pricing Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2,999</div>
              <div className="text-sm text-blue-600">per month</div>
              <div className="text-xs text-gray-600 mt-2">
                Billed monthly • Cancel anytime
              </div>
            </CardContent>
          </Card>

          {/* Coupon Code */}
          <div>
            <Label htmlFor="coupon" className="text-sm font-medium">
              Coupon Code (Optional)
            </Label>
            <Input
              id="coupon"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Payment Method Selection */}
          <div>
            <h4 className="font-semibold mb-3">Payment Method</h4>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="immediate" id="immediate" />
                  <Label htmlFor="immediate" className="flex items-center gap-2 cursor-pointer flex-1">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Pay Now</div>
                      <div className="text-sm text-gray-500">Immediate activation via card/UPI</div>
                    </div>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="settlement" id="settlement" />
                  <Label htmlFor="settlement" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Calculator className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-medium">Quarterly Settlement</div>
                      <div className="text-sm text-gray-500">Auto-deduct from your settlement</div>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Benefits Reminder */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h5 className="font-semibold text-yellow-800 mb-2">Premium Benefits:</h5>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Save up to ₹79,450 more per month</li>
              <li>• Automatic order verification</li>
              <li>• Custom return checklists</li>
              <li>• Enhanced SPF payouts</li>
              <li>• Full fraud analytics dashboard</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleUpgrade} 
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
