import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Join hundreds of companies that trust CerebriusTech to automate, protect, and scale their operations.",
  primaryButtonText = "Book a Demo",
  secondaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/contact",
  className = "",
}: CTASectionProps) => {
  return (
    <section className={`py-16 gradient-hero ${className} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground animate-fade-in-up">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="glow-cyan hover-lift hover-glow" asChild>
              <Link to={primaryButtonLink}>
                <Calendar className="mr-2 h-5 w-5 animate-rotate-360" />
                {primaryButtonText}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="hover-lift hover-scale" asChild>
              <Link to={secondaryButtonLink}>
                {secondaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 animate-wiggle" style={{ animationDelay: "1s" }} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-3 h-3 bg-accent rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default CTASection;