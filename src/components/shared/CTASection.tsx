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
    <section className={`py-16 gradient-hero ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-cyan" asChild>
              <Link to={primaryButtonLink}>
                <Calendar className="mr-2 h-5 w-5" />
                {primaryButtonText}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to={secondaryButtonLink}>
                {secondaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;