import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SchoolYantra has completely transformed how we manage our institution. The fee collection process alone saved us 20 hours per week.",
    name: "Dr. Priya Sharma",
    role: "Principal",
    school: "Delhi Public School, Bangalore",
  },
  {
    quote:
      "The parent app has dramatically improved parent engagement. We've seen a 90% increase in parent-teacher communication since adopting SchoolYantra.",
    name: "Rajesh Kumar",
    role: "Administrator",
    school: "Ryan International, Mumbai",
  },
  {
    quote:
      "As a teacher, the attendance and gradebook features save me so much time. I can focus more on teaching and less on paperwork.",
    name: "Anita Desai",
    role: "Senior Teacher",
    school: "Cambridge School, Delhi",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border shadow-sm relative">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-3 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonials[current].name.charAt(0)}
                </div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].school}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
