import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Target, value: "1000+", label: "Projects Delivered" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real results.",
    },
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients.",
    },
    {
      title: "Transparency",
      description: "Clear communication and honest pricing. No hidden fees, no surprises.",
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
              About DevForge Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in web development and digital maintenance services
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in 2014, DevForge Solutions has grown from a small team of passionate developers 
                into a leading provider of web development and maintenance services. Our journey began with 
                a simple mission: to help businesses establish and maintain a strong online presence.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we've had the privilege of working with clients across diverse industries, 
                from startups to enterprise organizations. Each project has taught us valuable lessons and 
                helped us refine our craft. Today, we're proud to be trusted by hundreds of businesses 
                worldwide for their critical web development and maintenance needs.
              </p>
              <p className="text-lg leading-relaxed">
                Our team consists of experienced developers, designers, and support specialists who are 
                passionate about creating exceptional digital experiences. We combine technical expertise 
                with a deep understanding of business needs to deliver solutions that truly make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 gradient-text">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;