import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <GraduationCap className="h-4 w-4" />
            All-in-One School Management ERP
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Transform Your
            <span className="text-gradient block mt-1">School Management</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
            Empower administrators, teachers, and parents with a comprehensive
            platform that streamlines every aspect of school operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-base px-8 h-12"
            >
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-20 relative animate-fade-in">
          <div className="bg-card rounded-2xl border shadow-2xl shadow-primary/5 p-6 md:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: Users, label: "Students", value: "2,847", color: "bg-primary/10 text-primary" },
                { icon: BookOpen, label: "Courses", value: "156", color: "bg-accent/10 text-accent" },
                { icon: GraduationCap, label: "Teachers", value: "94", color: "bg-secondary text-secondary-foreground" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/50 rounded-xl p-4 md:p-6 text-center">
                  <div
                    className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Attendance", "Grades", "Fees", "Reports"].map((item) => (
                <div
                  key={item}
                  className="h-20 md:h-24 bg-muted/30 rounded-lg border border-border/50 flex items-center justify-center text-sm text-muted-foreground font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
