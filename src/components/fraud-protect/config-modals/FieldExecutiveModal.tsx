
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserCheck, Package, Truck } from "lucide-react";
import { useState, useEffect } from "react";

interface FieldExecutiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FieldExecutiveModal = ({ isOpen, onClose }: FieldExecutiveModalProps) => {
  const [usedRequests, setUsedRequests] = useState<string[]>([]);
  const [remainingRequests, setRemainingRequests] = useState(2);

  useEffect(() => {
    const saved = localStorage.getItem("fe-change-requests");
    if (saved) {
      const requests = JSON.parse(saved);
      setUsedRequests(requests);
      setRemainingRequests(2 - requests.length);
    }
  }, [isOpen]);

  const handleRequest = (type: "pickup" | "delivery") => {
    if (remainingRequests > 0) {
      const updated = [...usedRequests, type];
      setUsedRequests(updated);
      setRemainingRequests(2 - updated.length);
      localStorage.setItem("fe-change-requests", JSON.stringify(updated));
      
      // Show success message or handle request
      alert(`${type === "pickup" ? "Pickup" : "Delivery"} FE change request submitted successfully!`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-purple-600" />
            Field Executive Change Request
          </DialogTitle>
          <DialogDescription>
            Request delivery personnel changes ({remainingRequests}/2 remaining this quarter)
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              onClick={() => handleRequest("pickup")}
              disabled={usedRequests.includes("pickup") || remainingRequests === 0}
              className="flex items-center gap-3 p-4 h-auto"
            >
              <Package className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <div className="font-medium">Pickup FE Change Request</div>
                <div className="text-xs text-gray-500">Change pickup executive</div>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={() => handleRequest("delivery")}
              disabled={usedRequests.includes("delivery") || remainingRequests === 0}
              className="flex items-center gap-3 p-4 h-auto"
            >
              <Truck className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <div className="font-medium">Delivery FE Change Request</div>
                <div className="text-xs text-gray-500">Change delivery executive</div>
              </div>
            </Button>
          </div>

          {usedRequests.length > 0 && (
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Used Requests:</h4>
              <ul className="text-xs space-y-1">
                {usedRequests.map((request, index) => (
                  <li key={index} className="capitalize">
                    • {request} FE change request
                  </li>
                ))}
              </ul>
            </div>
          )}

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

export default FieldExecutiveModal;
