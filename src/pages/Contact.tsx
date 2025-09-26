import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Shield,
  Zap,
  Brain,
  Users,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@cerebriustech.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 20 7946 0958",
      description: "Mon-Fri 9AM-6PM GMT"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "London, United Kingdom",
      description: "Central London office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 9AM-6PM GMT",
      description: "24/7 support available"
    }
  ];

  const services = [
    { value: "ai-automation", label: "AI Automation", icon: Brain },
    { value: "cybersecurity", label: "Cybersecurity Services", icon: Shield },
    { value: "erp-crm", label: "ERP & CRM Solutions", icon: Zap },
    { value: "micro-saas", label: "Micro SaaS Products", icon: Users },
    { value: "consultation", label: "General Consultation", icon: MessageSquare }
  ];

  const faqs = [
    {
      question: "How quickly can you start a project?",
      answer: "Most projects can begin within 1-2 weeks after initial consultation and requirements gathering."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide 24/7 support and maintenance packages for all our solutions."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with businesses across all industries, from startups to Fortune 500 companies."
    },
    {
      question: "Do you provide custom development?",
      answer: "Absolutely! We specialize in custom solutions tailored to your specific business needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              🤝 Let's Work Together
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Ready to <span className="text-gradient-cyber">Transform</span> Your Business?
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your technology needs and discover 
              how we can help accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-cyan" asChild>
                <a href="#contact-form">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@cerebriustech.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient-cyber">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:glow-cyan transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto group-hover:bg-secondary/20 transition-colors">
                    <info.icon className="h-8 w-8 text-primary group-hover:text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="hover:glow-cyan transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for your inquiry. We'll be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                <div className="flex items-center space-x-2">
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full glow-cyan" size="lg">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Embedded Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted rounded-b-lg relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9883198458956!2d-0.1427647!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjUiTiAwwrAwOCczNCswIlc!5e0!3m2!1sen!2suk!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CerebriusTech Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-foreground">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      {index < faqs.length - 1 && <hr className="border-border" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6 text-center space-y-3">
                  <Shield className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="font-bold text-foreground">Emergency Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Critical security issues? Our emergency response team is available 24/7
                  </p>
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;