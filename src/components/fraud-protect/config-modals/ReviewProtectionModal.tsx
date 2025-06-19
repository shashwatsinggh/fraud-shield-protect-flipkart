
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Search } from "lucide-react";
import { useState } from "react";

interface ReviewProtectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewProtectionModal = ({ isOpen, onClose }: ReviewProtectionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      text: "Terrible product, waste of money",
      rating: 1,
      product: "Nike T-Shirt",
      date: "2024-01-15",
      suspicious: true
    },
    {
      id: "2", 
      text: "Fake branded item received",
      rating: 2,
      product: "Samsung Phone",
      date: "2024-01-14",
      suspicious: true
    },
    {
      id: "3",
      text: "Great quality, highly recommend",
      rating: 5,
      product: "Apple Accessories",
      date: "2024-01-13",
      suspicious: false
    },
    {
      id: "4",
      text: "Poor quality material, not worth it",
      rating: 2,
      product: "Zara Clothing",
      date: "2024-01-12",
      suspicious: true
    }
  ];

  const filteredReviews = reviews.filter(review => 
    review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReviewToggle = (reviewId: string) => {
    setSelectedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleSubmitTakedown = () => {
    if (selectedReviews.length > 0) {
      alert(`Takedown request submitted for ${selectedReviews.length} review(s)`);
      setSelectedReviews([]);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-600" />
            Rating & Review Protection
          </DialogTitle>
          <DialogDescription>
            Search and request takedown actions for suspicious reviews
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search reviews by text or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Reviews List */}
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredReviews.map((review) => (
              <div key={review.id} className="p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={selectedReviews.includes(review.id)}
                    onChange={() => handleReviewToggle(review.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Badge variant={review.suspicious ? "destructive" : "secondary"} className="text-xs">
                        {review.suspicious ? "Suspicious" : "Normal"}
                      </Badge>
                    </div>
                    <p className="text-sm">{review.text}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span>{review.product}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmitTakedown}
              disabled={selectedReviews.length === 0}
              className="flex-1"
            >
              Request Takedown ({selectedReviews.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewProtectionModal;
