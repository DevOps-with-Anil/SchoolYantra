import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Monitor, TabletSmartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const apps = [
  {
    icon: Smartphone,
    title: "Parent App",
    description:
      "Stay connected with your child's academic journey. Track progress, receive notifications, make fee payments, and communicate with teachers.",
    features: ["Real-time attendance alerts", "Grade tracking", "Fee payments", "Direct messaging"],
  },
  {
    icon: TabletSmartphone,
    title: "Teacher App",
    description:
      "Simplify daily teaching workflows. Mark attendance, update grades, plan lessons, and connect with parents seamlessly.",
    features: ["Quick attendance", "Gradebook", "Lesson planning", "Parent communication"],
  },
  {
    icon: Monitor,
    title: "Admin Portal",
    description:
      "Complete school administration at your fingertips. Manage admissions, fees, staff, timetables, and generate comprehensive reports.",
    features: ["Admissions management", "Fee collection", "Staff management", "Analytics & reports"],
  },
];

export function AppShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Apps, One <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built applications for every stakeholder in your school community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Card
              key={app.title}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/60 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <app.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{app.title}</CardTitle>
                <CardDescription className="text-base">{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
