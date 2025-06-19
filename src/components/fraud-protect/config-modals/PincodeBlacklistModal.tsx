
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";

interface PincodeBlacklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PincodeBlacklistModal = ({ isOpen, onClose }: PincodeBlacklistModalProps) => {
  const [blacklistedPincodes, setBlacklistedPincodes] = useState<string[]>([]);
  const [newPincode, setNewPincode] = useState("");
  const [remainingQuota, setRemainingQuota] = useState(10);

  useEffect(() => {
    // Load saved pincodes
    const saved = localStorage.getItem("blacklisted-pincodes");
    if (saved) {
      const pincodes = JSON.parse(saved);
      setBlacklistedPincodes(pincodes);
      setRemainingQuota(10 - pincodes.length);
    }
  }, [isOpen]);

  const handleAddPincode = () => {
    if (newPincode && remainingQuota > 0 && !blacklistedPincodes.includes(newPincode)) {
      const updated = [...blacklistedPincodes, newPincode];
      setBlacklistedPincodes(updated);
      setRemainingQuota(10 - updated.length);
      setNewPincode("");
      localStorage.setItem("blacklisted-pincodes", JSON.stringify(updated));
    }
  };

  const handleRemovePincode = (pincode: string) => {
    const updated = blacklistedPincodes.filter(p => p !== pincode);
    setBlacklistedPincodes(updated);
    setRemainingQuota(10 - updated.length);
    localStorage.setItem("blacklisted-pincodes", JSON.stringify(updated));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            Pincode Blacklist Manager
          </DialogTitle>
          <DialogDescription>
            Block high-risk delivery locations ({remainingQuota}/10 remaining this quarter)
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Add new pincode */}
          <div className="flex gap-2">
            <Input
              placeholder="Enter pincode"
              value={newPincode}
              onChange={(e) => setNewPincode(e.target.value)}
              maxLength={6}
              disabled={remainingQuota === 0}
            />
            <Button 
              onClick={handleAddPincode}
              disabled={!newPincode || remainingQuota === 0}
            >
              Add
            </Button>
          </div>

          {/* Current blacklisted pincodes */}
          <div>
            <h4 className="font-semibold mb-2">Blacklisted Pincodes</h4>
            <div className="flex flex-wrap gap-2">
              {blacklistedPincodes.map((pincode) => (
                <Badge key={pincode} variant="destructive" className="flex items-center gap-1">
                  {pincode}
                  <button onClick={() => handleRemovePincode(pincode)}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              {blacklistedPincodes.length === 0 && (
                <p className="text-sm text-gray-500">No pincodes blacklisted yet</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PincodeBlacklistModal;
