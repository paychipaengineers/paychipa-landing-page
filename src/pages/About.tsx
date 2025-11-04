import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, Users, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const About = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Building the <span className="text-primary text-glow">future</span> of African finance
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Paychipa is a next-generation fintech platform making financial services accessible, secure, and reliable for everyone in Africa.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">To democratize financial services across Africa through innovative technology and seamless user experiences.</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To become Africa's most trusted financial platform, empowering millions to achieve financial freedom.</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
            <p className="text-muted-foreground">Trust, innovation, security, and customer-first approach guide everything we do.</p>
          </Card>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default About;
