
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

interface PartPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartPaymentModal = ({ isOpen, onClose }: PartPaymentModalProps) => {
  const [enabledCombinations, setEnabledCombinations] = useState<string[]>([]);
  const [isModifying, setIsModifying] = useState(false);

  const combinations = [
    { id: "nike-tshirts", brand: "Nike", vertical: "T-Shirts" },
    { id: "adidas-shoes", brand: "Adidas", vertical: "Shoes" },
    { id: "samsung-electronics", brand: "Samsung", vertical: "Electronics" },
    { id: "apple-accessories", brand: "Apple", vertical: "Accessories" },
    { id: "zara-clothing", brand: "Zara", vertical: "Clothing" },
    { id: "sony-headphones", brand: "Sony", vertical: "Headphones" },
    { id: "hp-laptops", brand: "HP", vertical: "Laptops" },
    { id: "titan-watches", brand: "Titan", vertical: "Watches" }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("part-payment-config");
    if (saved) {
      setEnabledCombinations(JSON.parse(saved));
      setIsModifying(true);
    }
  }, [isOpen]);

  const handleToggle = (combinationId: string) => {
    setEnabledCombinations(prev => 
      prev.includes(combinationId) 
        ? prev.filter(id => id !== combinationId)
        : [...prev, combinationId]
    );
  };

  const handleSave = () => {
    localStorage.setItem("part-payment-config", JSON.stringify(enabledCombinations));
    setIsModifying(true);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-green-600" />
            Part Payment Configuration
          </DialogTitle>
          <DialogDescription>
            Enable part payment options for your brand x vertical combinations
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {combinations.map((combo) => (
              <div key={combo.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <p className="font-medium text-sm">{combo.brand}</p>
                  <p className="text-xs text-gray-500">{combo.vertical}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id={combo.id}
                    checked={enabledCombinations.includes(combo.id)}
                    onCheckedChange={() => handleToggle(combo.id)}
                  />
                  <Label htmlFor={combo.id} className="text-xs">
                    {enabledCombinations.includes(combo.id) ? "Enabled" : "Disabled"}
                  </Label>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1">
              {isModifying ? "Modify and Save" : "Save Preferences"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartPaymentModal;
