import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Zap, Shield, Rocket, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website and web application development using modern technologies and best practices.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Performance"],
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly and securely.",
      features: ["Regular Updates", "Bug Fixes", "Content Updates", "Security Patches"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improve your website's speed and efficiency for better user experience and SEO rankings.",
      features: ["Speed Optimization", "Code Optimization", "Database Tuning", "CDN Integration"],
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your website from threats with comprehensive security monitoring and updates.",
      features: ["SSL Certificates", "Malware Scanning", "Firewall Setup", "Backup Solutions"],
    },
    {
      icon: Rocket,
      title: "Migration & Upgrades",
      description: "Seamlessly migrate your website to new platforms or upgrade existing systems.",
      features: ["Platform Migration", "Version Upgrades", "Data Transfer", "Zero Downtime"],
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support to resolve issues and answer your questions.",
      features: ["Emergency Support", "Quick Response", "Expert Advice", "Priority Handling"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Professional Development & Maintenance Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to build, maintain, and optimize your digital presence
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss your project and receive a free consultation
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;