import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Globe,
  ArrowRight,
  Linkedin,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/shared/CTASection";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions to solve complex business challenges."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Security and reliability are at the core of everything we do. We build solutions you can depend on."
    },
    {
      icon: Globe,
      title: "Scalability",
      description: "Our solutions grow with your business, from startup to enterprise, ensuring long-term success."
    }
  ];

  const stats = [
    { number: "200+", label: "Global Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Award },
    { number: "24/7", label: "Support Available", icon: Heart }
  ];

  const team = [
    {
      name: "Dr. Alexandra Chen",
      role: "Chief Executive Officer",
      expertise: "AI Strategy & Business Development",
      bio: "Former Head of AI at Microsoft, PhD in Computer Science from Cambridge. 15+ years in enterprise technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1dc?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Cybersecurity & Cloud Architecture",
      bio: "Ex-GCHQ cybersecurity specialist, certified ethical hacker. Led security initiatives for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Thompson",
      role: "Head of Product Development",
      expertise: "SaaS Product Management",
      bio: "Former product lead at Salesforce, MBA from London Business School. Expert in scaling SaaS platforms.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "James Mitchell",
      role: "Director of Client Success",
      expertise: "Enterprise Solutions & Support",
      bio: "20+ years in enterprise consulting, specialized in digital transformation and change management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "CerebriusTech was established in London with a vision to democratize AI and cybersecurity for businesses."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client, implementing a comprehensive ERP solution that increased efficiency by 40%."
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description: "Launched our AI automation division, developing custom chatbots and workflow solutions for 50+ clients."
    },
    {
      year: "2022",
      title: "Cybersecurity Expansion",
      description: "Expanded cybersecurity services, achieving ISO 27001 certification and partnering with leading security vendors."
    },
    {
      year: "2023",
      title: "SaaS Product Suite",
      description: "Released our first micro SaaS products, serving over 1,000 businesses within the first year."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations internationally, now serving clients across 50+ countries with 24/7 support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              🚀 Founded in London, Serving the World
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Empowering Businesses with <span className="text-gradient-cyber">Intelligent Technology</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We are a team of passionate technologists, security experts, and business strategists 
              dedicated to transforming how companies operate in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with intelligent, secure, and scalable technology solutions 
                that drive growth and operational excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global partner of choice for AI-driven business transformation, 
                making advanced technology accessible to organizations of all sizes.
              </p>
            </div>

            {/* Values Preview */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Values</h2>
              <p className="text-muted-foreground">
                Built on the pillars of innovation, trust, and scalability, 
                we deliver solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">Core Values</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:glow-cyan transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto group-hover:bg-secondary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient-cyber">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient-cyber">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts with decades of combined experience in technology, security, and business strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:glow-cyan transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-secondary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-cyber">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a startup vision to a global technology partner
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-secondary"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="hover:glow-cyan transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Join Our Success Story?"
        description="Let's work together to transform your business with cutting-edge technology solutions."
        primaryButtonText="Start Your Journey"
        secondaryButtonText="Meet Our Team"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default About;