import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  Brain,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI Automation in Enterprise: 2024 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is reshaping business operations and what enterprises need to know to stay competitive in the evolving digital landscape.",
    author: "Dr. Alexandra Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      title: "Zero Trust Security: Implementation Guide for Modern Businesses",
      excerpt: "A comprehensive guide to implementing zero trust security architecture in your organization, including best practices and common pitfalls.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop"
    },
    {
      title: "ERP Integration Strategies: Connecting Your Business Systems",
      excerpt: "Learn how to successfully integrate ERP systems with existing business applications for maximum efficiency and data consistency.",
      author: "Sarah Thompson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "ERP/CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Building Scalable SaaS Applications: Lessons from 1000+ Deployments",
      excerpt: "Key insights and best practices for building SaaS applications that can scale from startup to enterprise level.",
      author: "James Mitchell",
      date: "March 8, 2024",
      readTime: "9 min read",
      category: "SaaS Development",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      title: "AI-Powered Customer Service: ROI Analysis and Implementation",
      excerpt: "Discover how AI chatbots and automated customer service solutions deliver measurable ROI and improve customer satisfaction.",
      author: "Dr. Alexandra Chen",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "AI Automation",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop"
    },
    {
      title: "Data Privacy Regulations: A Global Compliance Checklist",
      excerpt: "Navigate the complex landscape of global data privacy regulations including GDPR, CCPA, and emerging legislation.",
      author: "Marcus Rodriguez",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop"
    },
    {
      title: "The Economics of Business Automation: Cost-Benefit Analysis",
      excerpt: "A detailed analysis of automation costs versus benefits, helping businesses make informed decisions about process automation.",
      author: "Sarah Thompson",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    { name: "AI Automation", count: 12, icon: Brain, color: "text-secondary" },
    { name: "Cybersecurity", count: 8, icon: Shield, color: "text-accent" },
    { name: "ERP/CRM", count: 6, icon: Zap, color: "text-primary" },
    { name: "SaaS Development", count: 4, icon: TrendingUp, color: "text-secondary" },
    { name: "Business Strategy", count: 3, icon: TrendingUp, color: "text-primary" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
        return Brain;
      case 'cybersecurity':
        return Shield;
      case 'erp/crm':
        return Zap;
      default:
        return TrendingUp;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
        return 'text-secondary bg-secondary/10';
      case 'cybersecurity':
        return 'text-accent bg-accent/10';
      case 'erp/crm':
        return 'text-primary bg-primary/10';
      default:
        return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              💡 Insights & Thought Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Technology <span className="text-gradient-cyber">Insights</span> & Expertise
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cybersecurity, enterprise solutions, 
              and the latest trends in business technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary/10">All Posts</Badge>
              {categories.slice(0, 4).map((category, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-secondary/10"
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Latest insights from our experts</p>
          </div>
          
          <Card className="group hover:glow-cyan transition-all duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className={getCategoryColor(featuredPost.category)}>
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="group/btn">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group hover:glow-cyan transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto font-medium group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <category.icon className={`h-5 w-5 ${category.color}`} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-cyber text-white">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold">Stay Updated</h3>
                  <p className="text-sm opacity-90">
                    Get the latest insights delivered to your inbox weekly
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">Popular This Week</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex space-x-3 group cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-secondary transition-colors line-clamp-2 text-sm">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;