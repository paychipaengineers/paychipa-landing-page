import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Briefcase,
  Users,
  TrendingUp,
  Receipt,
  Shield,
  ArrowRight,
  Check,
  CreditCard,
  BarChart3,
  FileText,
  Globe,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const BusinessAccount = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20">
            <Briefcase className="h-3 w-3 mr-1" />
            Business Banking
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Banking built for <span className="text-primary text-glow">African businesses</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Accept payments, manage expenses, pay your team, and grow your business with tools designed for modern African enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setWaitlistOpen(true)}
              className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Open Business Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Schedule Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Free</div>
            <div className="text-xs sm:text-sm text-muted-foreground">POS Terminals</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">1.5%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Transaction Fee</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Instant</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Settlement</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-muted-foreground">API Access</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Business Tools</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything your business <span className="text-primary text-glow">needs to grow</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Payment Collection</h3>
            <p className="text-muted-foreground">
              Accept payments via cards, bank transfers, USSD, and QR codes. Multiple payment channels in one platform.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">POS Terminals</h3>
            <p className="text-muted-foreground">
              Get free POS terminals for your business with instant settlement and real-time tracking.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
            <p className="text-muted-foreground">
              Track sales, monitor trends, and make data-driven decisions with powerful analytics tools.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Team Management</h3>
            <p className="text-muted-foreground">
              Add team members, set permissions, and manage payroll all from one dashboard.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Receipt className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Invoicing</h3>
            <p className="text-muted-foreground">
              Create and send professional invoices. Track payments and send automatic reminders.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Loans</h3>
            <p className="text-muted-foreground">
              Access business loans up to ₦50M with competitive rates and flexible repayment.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Developer API</h3>
            <p className="text-muted-foreground">
              Integrate payment processing into your platform with our robust API and SDKs.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expense Management</h3>
            <p className="text-muted-foreground">
              Track business expenses, categorize spending, and generate financial reports.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fraud Protection</h3>
            <p className="text-muted-foreground">
              AI-powered fraud detection to protect your business from suspicious transactions.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full">Why Choose Paychipa</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Built for modern African businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges of doing business in Africa. Our platform is designed to help you overcome them.
            </p>

            <div className="space-y-3">
              {[
                "No setup fees or hidden charges",
                "Free POS terminals for all merchants",
                "Instant settlement to your account",
                "Accept all payment methods",
                "Powerful API for developers",
                "Dedicated account manager",
                "24/7 technical support",
                "Business loans and credit"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">₦0</div>
              <p className="text-sm text-muted-foreground">Setup cost for POS terminals</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">1.5%</div>
              <p className="text-sm text-muted-foreground">Competitive transaction fee</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Always available support</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">Instant</div>
              <p className="text-sm text-muted-foreground">Real-time settlement</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to grow your business?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Join thousands of businesses that trust Paychipa for their payment processing needs.
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

export default BusinessAccount;
