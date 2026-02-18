import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, title: "Email Us", detail: "hello@schoolyantra.com", sub: "We reply within 24 hours" },
  { icon: Phone, title: "Call Us", detail: "+91 1800 123 4567", sub: "Toll-free number" },
  { icon: MapPin, title: "Visit Us", detail: "Bangalore, Karnataka", sub: "India" },
  { icon: Clock, title: "Support Hours", detail: "Mon - Sat, 9 AM - 7 PM", sub: "IST (Indian Standard Time)" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your school? Fill out the form below and our team will get in touch within 24 hours.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Request a Demo</CardTitle>
                    <CardDescription>
                      Fill in your details and we'll schedule a personalized walkthrough of SchoolYantra.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@school.edu" required />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="school">School Name</Label>
                          <Input id="school" placeholder="ABC International School" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Administrator</SelectItem>
                              <SelectItem value="principal">Principal</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="students">Number of Students</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lt200">Less than 200</SelectItem>
                              <SelectItem value="200-500">200 - 500</SelectItem>
                              <SelectItem value="500-1000">500 - 1,000</SelectItem>
                              <SelectItem value="1000-2000">1,000 - 2,000</SelectItem>
                              <SelectItem value="2000plus">2,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your school and requirements..."
                          rows={4}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4 p-5 rounded-xl bg-card border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{info.title}</h3>
                      <p className="text-foreground">{info.detail}</p>
                      <p className="text-xs text-muted-foreground">{info.sub}</p>
                    </div>
                  </div>
                ))}

                <div className="h-48 rounded-xl bg-muted border flex items-center justify-center text-muted-foreground text-sm">
                  📍 Map placeholder
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
