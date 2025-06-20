
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What's the difference between Basic and Premium fraud protection?",
      answer: "Basic plan provides essential fraud protection with manual verification processes - you request order verification, get network-level review protection, and have standard SPF claim limits. Premium plan offers automatic fraud scanning for all orders, advanced sabotage protection against competitor attacks, configurable doorstep verification for products under ₹800, custom SmartCheck lists for return fraud prevention, seller-configurable part payment rules, enhanced SPF ceiling (1% higher), and exclusive features like pincode blacklisting and field executive change requests. Premium is designed for sellers who want proactive, automated protection rather than reactive, manual processes."
    },
    {
      question: "How does automatic order verification work in Premium?",
      answer: "Premium automatically scans every order for fraud indicators using machine learning algorithms that analyze payment patterns, customer behavior, device fingerprinting, and historical fraud data. Unlike Basic where you manually request verification for suspicious orders, Premium continuously monitors all transactions in real-time, flagging high-risk orders for immediate intervention, blocking fraudulent attempts before they complete, and providing detailed fraud scoring for each transaction. This proactive approach typically catches 3x more fraud attempts compared to manual verification systems."
    },
    {
      question: "What is SmartCheck and how does it prevent return fraud?",
      answer: "SmartCheck is a configurable return verification system that allows you to create custom checklists for different brand x vertical combinations. When a customer initiates a return, SmartCheck ensures verification of specific elements like brand logos, serial numbers, product authenticity markers, packaging integrity, and usage signs. In Premium, you can upload reference images for each check, create vertical-specific verification protocols, and set mandatory verification steps. This prevents customers from returning counterfeit, damaged, or different products while claiming they're defective or unused."
    },
    {
      question: "How does review and rating protection work?",
      answer: "Basic plan provides network-level fraud protection that automatically detects and removes reviews from known fraud networks, bot accounts, and fake review farms. Premium adds advanced sabotage protection that monitors for competitor attacks, geographical review bombing, coordinated negative campaigns, suspicious review patterns targeting your specific products, and rating manipulation tactics. Premium uses AI to analyze review content, timing patterns, reviewer behavior, and cross-references with purchase data to identify authentic vs. malicious reviews, providing you with detailed reports and automatic takedown capabilities."
    },
    {
      question: "What are the Premium-exclusive features and their limits?",
      answer: "Premium includes three exclusive features with quarterly limits: Pincode Blacklisting (10 pincodes per quarter) - block high-risk delivery locations based on fraud history or RTO rates; Field Executive Change Requests (2 requests per quarter) - request different pickup or delivery personnel for specific areas when service quality issues arise; Manual Review Takedown Requests (unlimited but moderated) - request manual investigation and removal of specific reviews that may not be caught by automated systems. These quotas reset every quarter and are designed to prevent abuse while giving you control over critical protection aspects."
    },
    {
      question: "How does SPF payout enhancement work in Premium?",
      answer: "Seller Protection Fund (SPF) provides compensation for verified fraud losses. Basic plan offers standard SPF ceiling and payout rates as per platform policy. Premium provides enhanced SPF benefits including 1% higher ceiling limits on claims, faster claim processing and approval, expanded coverage for additional fraud types, priority review of complex cases, and higher reimbursement rates for verified losses. This enhanced coverage can significantly increase your total protected amount and reduce the financial impact of sophisticated fraud attempts that bypass standard protection measures."
    },
    {
      question: "Can I customize fraud protection settings in Premium?",
      answer: "Yes, Premium offers extensive customization options: Configure OBD (Open Box Delivery) for products under ₹800 at brand x vertical level; Set custom part payment rules based on your risk tolerance and product categories; Create detailed SmartCheck protocols with uploaded reference images for return verification; Define pincode-specific restrictions based on your delivery experience; Request specific field executive changes for problematic areas; Set up automated review monitoring with custom keywords and competitor tracking. These customizations allow you to tailor fraud protection to your specific business needs, product mix, and customer base rather than relying on one-size-fits-all protection."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          Frequently Asked Questions
        </CardTitle>
        <CardDescription>
          Everything you need to know about Fraud Protect plans and features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
