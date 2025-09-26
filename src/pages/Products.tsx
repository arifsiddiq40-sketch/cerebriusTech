import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  BarChart3, 
  Users, 
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/shared/CTASection";

const Products = () => {
  const products = [
    {
      name: "AutoFlow Pro",
      category: "Workflow Automation",
      icon: Zap,
      description: "Intelligent workflow automation platform that eliminates repetitive tasks and streamlines business processes.",
      features: [
        "Visual workflow builder",
        "400+ app integrations",
        "Advanced conditional logic",
        "Real-time monitoring",
        "Custom API connectors",
        "Multi-team collaboration"
      ],
      pricing: {
        starter: "£29/mo",
        pro: "£79/mo",
        enterprise: "Custom"
      },
      highlight: "Most Popular",
      users: "2,500+ businesses",
      rating: 4.9
    },
    {
      name: "SecureVault Analytics",
      category: "Cybersecurity",
      icon: Shield,
      description: "Comprehensive security monitoring and analytics platform with AI-powered threat detection.",
      features: [
        "24/7 threat monitoring",
        "AI anomaly detection",
        "Compliance reporting",
        "Risk assessment tools",
        "Incident response automation",
        "Executive dashboards"
      ],
      pricing: {
        starter: "£199/mo",
        pro: "£499/mo",
        enterprise: "Custom"
      },
      highlight: "Enterprise Grade",
      users: "500+ companies",
      rating: 4.8
    },
    {
      name: "LeadGen AI",
      category: "Sales & Marketing",
      icon: Users,
      description: "AI-powered lead generation and nurturing platform that converts prospects into customers.",
      features: [
        "AI lead scoring",
        "Automated email sequences",
        "Social media integration",
        "CRM synchronization",
        "Performance analytics",
        "A/B testing tools"
      ],
      pricing: {
        starter: "£49/mo",
        pro: "£129/mo",
        enterprise: "Custom"
      },
      highlight: "Best ROI",
      users: "1,200+ marketers",
      rating: 4.7
    },
    {
      name: "DataSync Hub",
      category: "Data Integration",
      icon: BarChart3,
      description: "Universal data integration platform that connects all your business systems in real-time.",
      features: [
        "Real-time data sync",
        "200+ pre-built connectors",
        "Data transformation tools",
        "Error handling & recovery",
        "Audit trails",
        "Custom data pipelines"
      ],
      pricing: {
        starter: "£89/mo",
        pro: "£219/mo",
        enterprise: "Custom"
      },
      highlight: "New Release",
      users: "800+ data teams",
      rating: 4.6
    },
    {
      name: "CustomerChat Pro",
      category: "Customer Support",
      icon: MessageSquare,
      description: "Advanced chatbot platform with natural language processing and multi-channel support.",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Live agent handoff",
        "Knowledge base integration",
        "Sentiment analysis",
        "Custom training data"
      ],
      pricing: {
        starter: "£39/mo",
        pro: "£99/mo",
        enterprise: "Custom"
      },
      highlight: "AI-Powered",
      users: "3,000+ support teams",
      rating: 4.8
    },
    {
      name: "MobileFirst Builder",
      category: "App Development",
      icon: Smartphone,
      description: "No-code mobile app builder specifically designed for business automation and workflow management.",
      features: [
        "Drag-and-drop interface",
        "Native mobile features",
        "Offline functionality",
        "Push notifications",
        "App store deployment",
        "Cross-platform support"
      ],
      pricing: {
        starter: "£59/mo",
        pro: "£149/mo",
        enterprise: "Custom"
      },
      highlight: "No-Code",
      users: "600+ app builders",
      rating: 4.5
    }
  ];

  const features = [
    "99.9% uptime guarantee",
    "24/7 customer support",
    "GDPR compliant",
    "Enterprise security",
    "API access included",
    "Custom integrations available"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              🏆 Award-Winning SaaS Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Powerful <span className="text-gradient-cyber">Micro SaaS</span> Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Discover our suite of specialized software tools designed to automate, optimize, 
              and scale your business operations with precision and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-cyan" asChild>
                <Link to="#products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">Product Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each product is designed to solve specific business challenges with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:glow-cyan transition-all duration-300 relative">
                {product.highlight && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {product.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <product.icon className="h-6 w-6 text-primary group-hover:text-secondary" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.users}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-foreground">{product.pricing.starter}</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button className="w-full" asChild>
                        <Link to="/contact">
                          Start Free Trial
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contact">
                          View Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-gradient-cyber">Products</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Seamless <span className="text-gradient-cyber">Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our products integrate with the tools you already use
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Salesforce", "Microsoft 365", "Slack", "HubSpot", "Zapier", "Google Workspace",
              "Shopify", "QuickBooks", "Mailchimp", "Stripe", "AWS", "Azure"
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="font-medium text-center">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Try Our Products?"
        description="Join thousands of businesses that have transformed their operations with our micro SaaS solutions."
        primaryButtonText="Start Free Trial"
        secondaryButtonText="Schedule Demo"
      />
    </div>
  );
};

export default Products;