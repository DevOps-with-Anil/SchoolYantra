import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-gradient-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 text-primary-foreground">
            Ready to Transform Your School?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8 relative z-10">
            Join 500+ schools already using SchoolYantra to streamline their operations.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 text-base px-8 h-12 relative z-10"
          >
            <Link to="/contact">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
