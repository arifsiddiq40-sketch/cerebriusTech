import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Brain, Zap, Users, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/shared/CTASection";

const Homepage = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Automations",
      description: "Intelligent workflows, chatbots, AI call agents, and lead generation systems that work 24/7.",
      features: ["Smart Chatbots", "Workflow Automation", "AI Call Agents", "Lead Generation"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and managed threat detection services.",
      features: ["Security Audits", "Pen Testing", "Compliance", "24/7 Monitoring"],
    },
    {
      icon: Zap,
      title: "ERP & CRM Solutions",
      description: "Custom setup, integration, and optimization of enterprise resource planning systems.",
      features: ["Microsoft Dynamics", "Salesforce", "Custom Integration", "Data Migration"],
    },
    {
      icon: Users,
      title: "Micro SaaS Products",
      description: "Niche SaaS tools designed for efficiency and business automation across industries.",
      features: ["Custom Development", "API Integration", "Cloud Hosting", "Analytics"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechFlow Ltd",
      content: "CerebriusTech transformed our operations with their AI automation suite. We've seen a 40% increase in efficiency within just 3 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Security Director, DataSecure",
      content: "Their cybersecurity audit revealed critical vulnerabilities we didn't know existed. The team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      title: "CEO, GrowthSync",
      content: "The ERP integration was seamless. CerebriusTech delivered on time and exceeded our expectations for data migration.",
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      title: "Innovation",
      description: "Cutting-edge AI and automation technologies that give you a competitive advantage.",
      icon: "🚀",
    },
    {
      title: "Security",
      description: "Enterprise-grade security practices with compliance standards that protect your data.",
      icon: "🔒",
    },
    {
      title: "Scalability",
      description: "Solutions that grow with your business, from startup to enterprise scale.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4 animate-pulse-glow">
              🎯 Trusted by 200+ Companies Worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Automate. Protect.{" "}
              <span className="text-gradient-cyber">Scale</span> with CerebriusTech
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
              Empower your business with intelligent AI automations, enterprise-grade cybersecurity, 
              and scalable technology solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-cyan text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Brain className="h-12 w-12 text-secondary opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <Shield className="h-16 w-16 text-accent opacity-60" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:glow-cyan transition-all duration-300 border-2 hover:border-secondary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient-cyber">CerebriusTech</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient-cyber">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-secondary opacity-60" />
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Homepage;