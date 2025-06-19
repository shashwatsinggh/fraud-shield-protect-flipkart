
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

interface CustomerDoorstepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomerDoorstepModal = ({ isOpen, onClose }: CustomerDoorstepModalProps) => {
  const [selectedCombinations, setSelectedCombinations] = useState<string[]>([]);
  const [isModifying, setIsModifying] = useState(false);

  // Mock brand x vertical combinations
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

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem("doorstep-verification-config");
    if (saved) {
      setSelectedCombinations(JSON.parse(saved));
      setIsModifying(true);
    }
  }, [isOpen]);

  const handleToggle = (combinationId: string) => {
    setSelectedCombinations(prev => 
      prev.includes(combinationId) 
        ? prev.filter(id => id !== combinationId)
        : [...prev, combinationId]
    );
  };

  const handleSave = () => {
    localStorage.setItem("doorstep-verification-config", JSON.stringify(selectedCombinations));
    setIsModifying(true);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            Customer Doorstep Verification Configuration
          </DialogTitle>
          <DialogDescription>
            Enable OBD (Open Box Delivery) for products under ₹800 by selecting brand x vertical combinations
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {combinations.map((combo) => (
              <div key={combo.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <Checkbox
                  id={combo.id}
                  checked={selectedCombinations.includes(combo.id)}
                  onCheckedChange={() => handleToggle(combo.id)}
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{combo.brand}</p>
                  <p className="text-xs text-gray-500">{combo.vertical}</p>
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

export default CustomerDoorstepModal;
