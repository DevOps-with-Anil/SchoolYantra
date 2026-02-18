import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started with digital management.",
    features: [
      "Up to 500 students",
      "Admin web portal",
      "Basic fee management",
      "Attendance tracking",
      "Parent notifications",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing schools that need comprehensive management tools.",
    features: [
      "Up to 2,000 students",
      "Admin portal + Parent & Teacher apps",
      "Advanced fee management",
      "Exam & gradebook management",
      "Communication suite",
      "Financial reports",
      "Priority support",
      "Custom branding",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For large institutions and school chains with advanced needs.",
    features: [
      "Unlimited students",
      "All Professional features",
      "Multi-branch management",
      "Transport tracking",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    highlight: false,
  },
];

const comparisonFeatures = [
  { name: "Students Limit", starter: "500", pro: "2,000", enterprise: "Unlimited" },
  { name: "Admin Portal", starter: true, pro: true, enterprise: true },
  { name: "Parent App", starter: false, pro: true, enterprise: true },
  { name: "Teacher App", starter: false, pro: true, enterprise: true },
  { name: "Fee Management", starter: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { name: "Attendance", starter: true, pro: true, enterprise: true },
  { name: "Exam Management", starter: false, pro: true, enterprise: true },
  { name: "Financial Reports", starter: false, pro: true, enterprise: true },
  { name: "Transport Tracking", starter: false, pro: false, enterprise: true },
  { name: "Multi-branch", starter: false, pro: false, enterprise: true },
  { name: "Custom Integrations", starter: false, pro: false, enterprise: true },
  { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "Our pricing is customized based on your school's size, requirements, and the features you need. Contact our sales team for a personalized quote.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, we offer a 30-day free trial with full access to all Professional plan features. No credit card required.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    q: "Do you offer discounts for multiple schools?",
    a: "Yes, we offer special pricing for school chains and multi-branch institutions. Contact our enterprise sales team for details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, credit/debit cards, and UPI payments. Annual billing is available with additional discounts.",
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your school's needs. All plans include free setup and onboarding.
            </p>
          </div>
        </section>

        <section ref={ref} className="section-padding pt-0">
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.highlight
                      ? "border-primary shadow-lg shadow-primary/10 md:scale-105"
                      : "border-border"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${plan.highlight ? "bg-gradient-primary hover:opacity-90" : ""}`}
                      variant={plan.highlight ? "default" : "outline"}
                    >
                      <Link to="/contact">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Feature</th>
                    <th className="text-center py-3 font-semibold">Starter</th>
                    <th className="text-center py-3 font-semibold text-primary">Professional</th>
                    <th className="text-center py-3 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((f) => (
                    <tr key={f.name} className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">{f.name}</td>
                      {[f.starter, f.pro, f.enterprise].map((val, i) => (
                        <td key={i} className="text-center py-3">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="h-4 w-4 text-primary mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
