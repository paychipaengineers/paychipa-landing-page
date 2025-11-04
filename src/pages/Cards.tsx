import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  CreditCard,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Check,
  Lock,
  Eye,
  DollarSign,
  Smartphone,
  Clock
} from "lucide-react";
import smartCard from "@/assets/smart-card.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const Cards = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full border-primary/20">
              <CreditCard className="h-3 w-3 mr-1" />
              Smart Cards
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Cards for <span className="text-primary text-glow">every need</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Get instant virtual cards for online shopping and premium physical cards delivered to your doorstep. Shop online and offline with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                onClick={() => setWaitlistOpen(true)}
                className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
              >
                Get Your Card <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Compare Cards
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Instant Virtual Cards</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Secure & Protected</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20">
              <img 
                src={smartCard} 
                alt="Premium payment cards" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Card Options</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose the <span className="text-primary text-glow">perfect card</span> for you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Virtual Cards</h3>
            <p className="text-muted-foreground mb-6">
              Create unlimited virtual cards instantly. Perfect for online shopping, subscriptions, and digital payments.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Created instantly in-app</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Dollar & Naira cards available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Freeze/unfreeze anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Set spending limits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Works on all online platforms</span>
              </div>
            </div>

            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full"
            >
              Create Virtual Card
            </Button>
          </Card>

          <Card className="p-8 hover:border-primary transition-colors border-primary">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Physical Cards</h3>
            <p className="text-muted-foreground mb-6">
              Premium Mastercard debit cards delivered to you. Use at ATMs, POS terminals, and online worldwide.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Free home delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Contactless payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Worldwide acceptance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">ATM withdrawals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Premium design</span>
              </div>
            </div>

            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full gradient-primary-pink"
            >
              Order Physical Card
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Card Features</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful features for <span className="text-primary text-glow">secure payments</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">3D Secure</h3>
            <p className="text-muted-foreground">
              Advanced 3D Secure authentication for all online transactions.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Freeze</h3>
            <p className="text-muted-foreground">
              Freeze and unfreeze your cards instantly from the app.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Alerts</h3>
            <p className="text-muted-foreground">
              Get instant notifications for every card transaction.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Spending Limits</h3>
            <p className="text-muted-foreground">
              Set daily, weekly, or monthly spending limits on your cards.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Acceptance</h3>
            <p className="text-muted-foreground">
              Use your cards anywhere Mastercard is accepted worldwide.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">App Control</h3>
            <p className="text-muted-foreground">
              Manage all your cards from one simple mobile app.
            </p>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="rounded-full mb-4">Security First</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your money is <span className="text-primary text-glow">always protected</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We use bank-grade security measures to keep your cards and transactions safe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-bold mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All card data is encrypted and stored securely using industry-standard protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Fraud Detection</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered fraud detection monitors every transaction for suspicious activity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Biometric Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Secure your cards with fingerprint or face ID authentication.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-bold mb-2">24/7 Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Our security team monitors transactions around the clock to protect you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get your card today
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Start shopping online and offline with secure, flexible payment cards.
          </p>
          <Button 
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            variant="secondary"
            className="rounded-full"
          >
            Create Your Card <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Cards;
