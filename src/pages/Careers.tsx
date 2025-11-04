import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const openPositions = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Build scalable backend systems for our fintech platform."
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive experiences for millions of users across Africa."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Manage and optimize our cloud infrastructure and deployment pipelines."
  },
  {
    id: 4,
    title: "Fraud Analyst",
    department: "Risk & Compliance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Help us maintain trust and security across our platform."
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Operations",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Ensure our merchants and users have exceptional experiences."
  },
  {
    id: 6,
    title: "Data Scientist",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build AI models for fraud detection and financial insights."
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We're building the future of African fintech. Every day brings new challenges and opportunities to innovate."
  },
  {
    title: "Trust & Integrity",
    description: "Financial services demand the highest standards. We're committed to transparency and ethical practices."
  },
  {
    title: "Collaboration",
    description: "Great products are built by great teams. We value diverse perspectives and open communication."
  },
  {
    title: "Growth Mindset",
    description: "We invest in our people. Continuous learning and development are at the core of our culture."
  }
];

export default function Careers() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4">We're Hiring</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join the Team Building Africa's
            <span className="gradient-text"> Financial Future</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're on a mission to make financial services smarter, safer, and more accessible across Africa. Join us in building the infrastructure that empowers millions.
          </p>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to make an impact
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <Card key={position.id} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{position.title}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
                    </div>
                    <Button onClick={() => setWaitlistOpen(true)}>Apply Now</Button>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {position.department}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {position.location}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {position.type}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about fintech. Send us your information and we'll reach out when a suitable position opens up.
          </p>
          <Button 
            size="lg" 
            onClick={() => setWaitlistOpen(true)}
            className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
          >
            Join Our Talent Pool
          </Button>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
}
