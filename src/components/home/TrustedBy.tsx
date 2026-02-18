import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schools = [
  "Delhi Public School",
  "Ryan International",
  "Kendriya Vidyalaya",
  "DAV Public School",
  "Amity International",
  "Cambridge School",
];

export function TrustedBy() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 border-y border-border bg-muted/30">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {schools.map((school) => (
            <div
              key={school}
              className="text-muted-foreground/40 font-semibold text-sm md:text-base whitespace-nowrap"
            >
              {school}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
