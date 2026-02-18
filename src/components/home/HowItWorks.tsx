import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserPlus, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Onboard",
    description:
      "Set up your school in minutes. Import student data, configure classes, and invite your staff to the platform.",
  },
  {
    icon: Settings,
    title: "Manage",
    description:
      "Streamline daily operations — attendance, fees, exams, communication — all from a single dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "Leverage analytics and insights to make data-driven decisions and continuously improve school outcomes.",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in three simple steps and transform your school management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-accent/20" />

          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-primary/20">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary z-20">
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
