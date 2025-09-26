import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Bot, 
  Phone,
  TrendingUp,
  Search,
  Lock,
  FileCheck,
  Eye,
  AlertTriangle,
  Database,
  Settings,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Workflow,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/shared/CTASection";

const Services = () => {
  const services = [
    {
      category: "AI Automations",
      icon: Brain,
      color: "text-secondary",
      description: "Intelligent workflows and AI-powered solutions that streamline your operations",
      services: [
        {
          icon: Bot,
          title: "Smart Chatbots",
          description: "24/7 customer support with natural language processing and context awareness",
          features: ["Multi-language support", "CRM integration", "Analytics dashboard", "Custom training"]
        },
        {
          icon: Phone,
          title: "AI Call Agents",
          description: "Automated phone systems that handle inquiries, bookings, and customer service",
          features: ["Voice recognition", "Call routing", "Appointment scheduling", "Call analytics"]
        },
        {
          icon: TrendingUp,
          title: "Lead Generation",
          description: "AI-powered lead scoring and nurturing systems that convert prospects",
          features: ["Behavioral tracking", "Email automation", "Lead scoring", "Sales pipeline"]
        },
        {
          icon: Workflow,
          title: "Process Automation",
          description: "Custom workflow automation that eliminates repetitive tasks",
          features: ["Task automation", "Data processing", "Report generation", "System integration"]
        }
      ]
    },
    {
      category: "Cybersecurity Services",
      icon: Shield,
      color: "text-accent",
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        {
          icon: Search,
          title: "Security Audits",
          description: "Comprehensive assessment of your security posture and vulnerabilities",
          features: ["Network scanning", "Vulnerability assessment", "Risk analysis", "Compliance check"]
        },
        {
          icon: Lock,
          title: "Penetration Testing",
          description: "Ethical hacking services to identify and fix security weaknesses",
          features: ["Web app testing", "Network penetration", "Social engineering", "Report & remediation"]
        },
        {
          icon: FileCheck,
          title: "Compliance Management",
          description: "Ensure your business meets industry standards and regulations",
          features: ["GDPR compliance", "ISO 27001", "SOC 2", "Industry standards"]
        },
        {
          icon: Eye,
          title: "24/7 Threat Monitoring",
          description: "Continuous monitoring and incident response for active threats",
          features: ["Real-time alerts", "Incident response", "Threat intelligence", "Security operations"]
        }
      ]
    },
    {
      category: "ERP & CRM Solutions",
      icon: Zap,
      color: "text-primary",
      description: "Enterprise systems that unify your business operations and customer relationships",
      services: [
        {
          icon: Database,
          title: "Microsoft Dynamics",
          description: "Complete Dynamics 365 implementation, customization, and support",
          features: ["System setup", "Data migration", "Custom modules", "User training"]
        },
        {
          icon: Settings,
          title: "Salesforce Solutions",
          description: "Salesforce configuration, automation, and integration services",
          features: ["Sales Cloud", "Service Cloud", "Marketing automation", "Custom development"]
        },
        {
          icon: Cloud,
          title: "Custom ERP Development",
          description: "Bespoke enterprise resource planning systems tailored to your needs",
          features: ["Custom modules", "API development", "Third-party integration", "Mobile access"]
        },
        {
          icon: BarChart3,
          title: "Business Intelligence",
          description: "Data analytics and reporting solutions for informed decision-making",
          features: ["Dashboard creation", "Data visualization", "Automated reports", "Predictive analytics"]
        }
      ]
    },
    {
      category: "Micro SaaS Products",
      icon: Users,
      color: "text-secondary",
      description: "Specialized software solutions for niche business needs",
      services: [
        {
          icon: Smartphone,
          title: "Mobile-First SaaS",
          description: "Responsive web applications optimized for mobile usage",
          features: ["Progressive web apps", "Offline functionality", "Push notifications", "App store deployment"]
        },
        {
          icon: Globe,
          title: "Industry-Specific Tools",
          description: "Specialized software for healthcare, finance, retail, and more",
          features: ["Compliance built-in", "Industry workflows", "Sector expertise", "Regulatory updates"]
        },
        {
          icon: AlertTriangle,
          title: "Automation Tools",
          description: "Niche automation solutions for specific business processes",
          features: ["Custom workflows", "API integrations", "Scheduled tasks", "Monitoring dashboards"]
        },
        {
          icon: BarChart3,
          title: "Analytics Platforms",
          description: "Specialized analytics tools for data-driven insights",
          features: ["Custom metrics", "Real-time data", "Exportable reports", "Integration APIs"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              🚀 Comprehensive Technology Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Transform Your Business with Our <span className="text-gradient-cyber">Expert Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              From AI-powered automation to enterprise-grade cybersecurity, we provide the technology solutions 
              your business needs to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <category.icon className={`h-12 w-12 ${category.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.category}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:glow-cyan transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                          <service.icon className="h-6 w-6 text-primary group-hover:text-secondary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and current technology stack" },
              { step: "02", title: "Strategy", description: "Custom solution design tailored to your specific requirements" },
              { step: "03", title: "Implementation", description: "Agile development with regular updates and feedback loops" },
              { step: "04", title: "Support", description: "Ongoing maintenance, monitoring, and optimization services" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl font-bold text-gradient-cyber">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Let's Transform Your Business"
        description="Ready to leverage cutting-edge technology for your competitive advantage? Our experts are here to help you succeed."
        primaryButtonText="Book a Consultation"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/products"
      />
    </div>
  );
};

export default Services;