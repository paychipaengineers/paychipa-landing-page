import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import {
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Check,
  CreditCard,
  Wifi,
  Battery,
  Clock,
  Users,
  BarChart3,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import posTerminal from "@/assets/pos-terminal.png";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const POSTerminals = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full border-primary/20">
              <Smartphone className="h-3 w-3 mr-1" />
              POS Terminals
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Accept payments{" "}
              <span className="text-primary text-glow">anywhere</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Get a free POS terminal and start accepting card payments from
              your customers. Instant settlement, real-time tracking, and zero
              setup cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => setWaitlistOpen(true)}
                className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
              >
                Get Free POS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Pricing
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Instant Settlement</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">₦0 Setup Fee</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-secondary">
              <img
                src={posTerminal}
                alt="Modern POS terminal device"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Terminal Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful features for{" "}
            <span className="text-primary text-glow">modern businesses</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">All Card Types</h3>
            <p className="text-muted-foreground">
              Accept Mastercard, Visa, Verve, and all major debit/credit cards.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Settlement</h3>
            <p className="text-muted-foreground">
              Funds settle directly to your account instantly after each
              transaction.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Wifi className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">4G Connectivity</h3>
            <p className="text-muted-foreground">
              Built-in SIM card with 4G connectivity. Works anywhere in Nigeria.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Long Battery Life</h3>
            <p className="text-muted-foreground">
              Up to 8 hours of continuous use on a single charge.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Technical support and terminal replacement available anytime.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
            <p className="text-muted-foreground">
              Monitor all transactions in real-time from your mobile app.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multi-User Access</h3>
            <p className="text-muted-foreground">
              Assign terminals to different staff members and track performance.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Certified</h3>
            <p className="text-muted-foreground">
              PCI-DSS compliant terminals with end-to-end encryption.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Upgrades</h3>
            <p className="text-muted-foreground">
              Automatic software updates and free hardware upgrades.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Easy Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get started in{" "}
            <span className="text-primary text-glow">3 simple steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Apply Online</h3>
            <p className="text-muted-foreground">
              Fill out a simple application form with your business details.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Get Approved</h3>
            <p className="text-muted-foreground">
              Instant approval and your terminal is shipped within 24 hours.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Start Accepting</h3>
            <p className="text-muted-foreground">
              Activate your terminal and start accepting payments immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transparent pricing with{" "}
            <span className="text-primary text-glow">no surprises</span>
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
            <div className="text-4xl font-bold text-primary mb-2">1.5%</div>
            <p className="text-muted-foreground">per transaction</p>
          </div>

          <div className="space-y-3 mb-6">
            {[
              "Free POS terminal (₦0 setup)",
              "Free 4G connectivity",
              "Instant settlement",
              "Real-time transaction tracking",
              "24/7 customer support",
              "Free maintenance & repairs",
              "Multiple terminals available",
              "No monthly fees",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            className="w-full rounded-full gradient-primary-pink hover:opacity-90"
          >
            Get Your Free Terminal <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to accept card payments?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Get your free POS terminal today and start growing your business.
          </p>
          <Button
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            variant="secondary"
            className="rounded-full"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default POSTerminals;
