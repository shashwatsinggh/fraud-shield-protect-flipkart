
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    {
      id: "billing",
      question: "How does Premium billing work?",
      answer: "Premium is billed monthly at ₹2,999. You can choose to pay immediately via card/UPI or have it auto-deducted from your quarterly settlement. Cancel anytime with no long-term commitments."
    },
    {
      id: "savings",
      question: "How much money can I actually save?",
      answer: "Based on your store's fraud patterns, Premium users typically save 2.5-3x more than Basic users. This includes prevention of fake orders, return frauds, rating manipulation, and enhanced SPF payouts."
    },
    {
      id: "setup",
      question: "How quickly does Premium protection activate?",
      answer: "Premium features activate immediately after payment confirmation. Automatic order verification, enhanced monitoring, and all premium tools are available within minutes of upgrade."
    },
    {
      id: "customization",
      question: "Can I customize my protection settings?",
      answer: "Yes! Premium includes configurable SmartCheck lists, pincode blacklisting, OBD thresholds, COD rules, and more. You can tailor the protection to your specific business needs."
    },
    {
      id: "support",
      question: "What kind of support do Premium users get?",
      answer: "Premium users get priority support, dedicated account management for complex fraud cases, and direct access to our fraud prevention specialists for custom rule setup."
    },
    {
      id: "data",
      question: "What data and analytics do I get?",
      answer: "Premium includes detailed fraud analytics, savings reports, order-level protection logs, trend analysis, and downloadable reports. You'll see exactly how much money we're saving you."
    },
    {
      id: "integration",
      question: "Does this integrate with my existing tools?",
      answer: "Fraud Protect works seamlessly with your existing Flipkart Seller Dashboard. All protection happens automatically in the background - no additional integration required."
    },
    {
      id: "cancellation",
      question: "Can I downgrade or cancel anytime?",
      answer: "Yes, you can downgrade to Basic or cancel Premium anytime. Your protection will continue until the end of your current billing period, and you'll retain access to historical data."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
        <CardDescription>
          Everything you need to know about Fraud Protect
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Collapsible key={faq.id}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-sm text-gray-600 bg-white border border-gray-100 rounded-b-lg">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
