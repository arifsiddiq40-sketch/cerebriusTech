import { Link } from "react-router-dom";
import { Shield, Brain, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-secondary" />
                <Brain className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">CerebriusTech</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering businesses with intelligent, secure, and scalable technology solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>London, United Kingdom</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:info@cerebriustech.com" className="hover:text-secondary transition-colors">
                info@cerebriustech.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  AI Automations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  ERP & CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Micro SaaS Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80">
              Get the latest insights on AI, cybersecurity, and business automation.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80">
              © 2024 CerebriusTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;