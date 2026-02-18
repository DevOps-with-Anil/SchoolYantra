import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Heart, Shield, Users, Lock, Target, Eye, Award } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We continuously push boundaries to bring the latest technology to education." },
  { icon: Heart, title: "Simplicity", description: "Complex problems deserve elegant, simple solutions that anyone can use." },
  { icon: Shield, title: "Trust", description: "We build lasting relationships through transparency and reliability." },
  { icon: Users, title: "Student-First", description: "Every decision we make is guided by what's best for student outcomes." },
  { icon: Lock, title: "Data Security", description: "Your data is protected with enterprise-grade encryption and compliance." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in everything we deliver." },
];

const timeline = [
  { year: "2018", title: "Founded", description: "SchoolYantra was born from a vision to simplify school management in India." },
  { year: "2019", title: "First 50 Schools", description: "Reached our first milestone with 50 schools actively using the platform." },
  { year: "2020", title: "Mobile Apps Launched", description: "Released the Parent and Teacher mobile apps, transforming communication." },
  { year: "2021", title: "500+ Schools", description: "Crossed 500 schools and expanded to serve over 500,000 students." },
  { year: "2023", title: "Enterprise Launch", description: "Launched enterprise solutions for large school chains and multi-branch institutions." },
  { year: "2024", title: "1M+ Students", description: "Proudly serving over 1 million students across the country." },
];

const team = [
  { name: "Arun Patel", role: "CEO & Co-founder", initial: "A" },
  { name: "Sneha Reddy", role: "CTO & Co-founder", initial: "S" },
  { name: "Vikram Singh", role: "Head of Product", initial: "V" },
  { name: "Meera Iyer", role: "Head of Customer Success", initial: "M" },
];

const differentiators = [
  { title: "Built for Indian Schools", description: "Designed specifically for the Indian education system with support for CBSE, ICSE, and state boards." },
  { title: "All-in-One Platform", description: "No need for multiple tools. Everything from admissions to alumni management in one place." },
  { title: "Offline-First Design", description: "Works reliably even with limited internet connectivity — a must for schools across India." },
  { title: "Dedicated Support", description: "Local support team that understands your language, culture, and educational needs." },
];

const About = () => {
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">SchoolYantra</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              On a mission to democratize school management technology and empower every institution with world-class tools.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
                <Target className="h-10 w-10 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To simplify school management through intuitive technology, enabling educators to focus on what matters most — teaching and nurturing the next generation.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 md:p-10 border">
                <Eye className="h-10 w-10 mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted school management platform in the world, serving every school regardless of size, location, or budget — making quality education accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={valuesRef} className="section-padding bg-muted/30">
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <Card key={v.title} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{v.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{v.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section ref={storyRef} className="section-padding">
          <div
            className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-8 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-8">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary mt-1" />
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.initial}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose <span className="text-gradient">SchoolYantra</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="flex gap-4 p-6 rounded-xl bg-card border hover:shadow-md transition-shadow"
                >
                  <div className="w-2 rounded-full bg-gradient-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
