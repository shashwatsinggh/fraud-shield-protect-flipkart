
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Electronics Store",
      rating: 5,
      text: "Premium plan saved me ₹50,000 in the first month by preventing return frauds. The SmartCheck feature is amazing!",
      savings: "₹50,000 saved",
      location: "Mumbai"
    },
    {
      name: "Priya Sharma",
      business: "Fashion Boutique",
      rating: 5,
      text: "The fake review protection helped improve my store rating from 3.2 to 4.6. Totally worth the investment.",
      savings: "Rating improved by 44%",
      location: "Delhi"
    },
    {
      name: "Amit Patel",
      business: "Home & Kitchen",
      rating: 5,
      text: "Auto order verification reduced my manual work by 80%. Now I can focus on growing my business.",
      savings: "80% time saved",
      location: "Ahmedabad"
    },
    {
      name: "Sneha Reddy",
      business: "Beauty & Personal Care",
      rating: 5,
      text: "Pincode blacklisting feature stopped fraudulent orders from problem areas. My RTO reduced by 60%.",
      savings: "60% RTO reduction",
      location: "Hyderabad"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <Card>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">What Premium Sellers Say</h3>
          <p className="text-gray-600">Join thousands of sellers who've upgraded their protection</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="space-y-4">
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
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full w-fit">
                    {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
            Start Your Success Story
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCarousel;
