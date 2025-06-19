
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckSquare, Upload } from "lucide-react";
import { useState } from "react";

interface SmartCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SmartCheckModal = ({ isOpen, onClose }: SmartCheckModalProps) => {
  const [selectedChecks, setSelectedChecks] = useState<Record<string, string[]>>({});
  const [uploadedImages, setUploadedImages] = useState<Record<string, File>>({});

  const combinations = [
    { id: "nike-tshirts", brand: "Nike", vertical: "T-Shirts" },
    { id: "samsung-electronics", brand: "Samsung", vertical: "Electronics" },
    { id: "apple-accessories", brand: "Apple", vertical: "Accessories" },
    { id: "titan-watches", brand: "Titan", vertical: "Watches" }
  ];

  const checkTypes = [
    { id: "brand-name", label: "Brand Name Check" },
    { id: "logo", label: "Logo Check" },
    { id: "serial-id", label: "Serial ID Check" }
  ];

  const handleCheckToggle = (comboId: string, checkId: string) => {
    setSelectedChecks(prev => ({
      ...prev,
      [comboId]: prev[comboId]?.includes(checkId) 
        ? prev[comboId].filter(id => id !== checkId)
        : [...(prev[comboId] || []), checkId]
    }));
  };

  const handleImageUpload = (comboId: string, checkId: string, file: File) => {
    setUploadedImages(prev => ({
      ...prev,
      [`${comboId}-${checkId}`]: file
    }));
  };

  const isCheckValid = (comboId: string, checkId: string) => {
    const isSelected = selectedChecks[comboId]?.includes(checkId);
    const hasImage = uploadedImages[`${comboId}-${checkId}`];
    return !isSelected || hasImage;
  };

  const canSave = () => {
    return Object.keys(selectedChecks).every(comboId =>
      selectedChecks[comboId].every(checkId => isCheckValid(comboId, checkId))
    );
  };

  const handleSave = () => {
    if (canSave()) {
      // Save logic here
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            SmartCheck Configuration
          </DialogTitle>
          <DialogDescription>
            Define custom return verification checklist with supporting images
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {combinations.map((combo) => (
            <div key={combo.id} className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{combo.brand} - {combo.vertical}</h4>
              <div className="space-y-3">
                {checkTypes.map((check) => (
                  <div key={check.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id={`${combo.id}-${check.id}`}
                      checked={selectedChecks[combo.id]?.includes(check.id) || false}
                      onCheckedChange={() => handleCheckToggle(combo.id, check.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={`${combo.id}-${check.id}`} className="text-sm font-medium">
                        {check.label}
                      </Label>
                    </div>
                    {selectedChecks[combo.id]?.includes(check.id) && (
                      <div className="flex items-center gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(combo.id, check.id, file);
                          }}
                          className="w-32 text-xs"
                        />
                        <Upload className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!canSave()} className="flex-1">
              Save Configuration
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SmartCheckModal;
