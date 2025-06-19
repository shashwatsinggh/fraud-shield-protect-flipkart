
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Electronics Store",
      rating: 5,
      text: "Premium plan saved me ₹50,000 in the first month by preventing return frauds. The SmartCheck feature is amazing!",
      savings: "₹50,000 saved"
    },
    {
      name: "Priya Sharma",
      business: "Fashion Boutique",
      rating: 5,
      text: "The fake review protection helped improve my store rating from 3.2 to 4.6. Totally worth the investment.",
      savings: "Rating improved by 44%"
    },
    {
      name: "Amit Patel",
      business: "Home & Kitchen",
      rating: 5,
      text: "Auto order verification reduced my manual work by 80%. Now I can focus on growing my business.",
      savings: "80% time saved"
    }
  ];

  return (
    <Card>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">What Premium Sellers Say</h3>
          <p className="text-gray-600">Join thousands of sellers who've upgraded their protection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg relative">
                <Quote className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full w-fit">
                  {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
            Start Your Success Story
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCarousel;
