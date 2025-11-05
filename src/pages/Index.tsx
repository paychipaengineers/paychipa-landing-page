import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Zap,
  CreditCard,
  PiggyBank,
  Receipt,
  CheckCircle2,
  Briefcase,
  Smartphone,
  TrendingUp,
  Shield,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Apple,
  Star,
  Check,
} from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import posTerminal from "@/assets/pos-terminal.png";
import smartCard from "@/assets/smart-card.png";
import personalBanking from "@/assets/personal-banking.png";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <Badge variant="outline" className="rounded-full border-primary/20">
              <Zap className="h-3 w-3 mr-1" />
              Now Available in Nigeria
            </Badge>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Banking for <br />
                <span className="text-primary text-glow">Everyone</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Send money, pay bills, save & invest with our all-in-one payment
                platform built for Africans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => setWaitlistOpen(true)}
                className="rounded-full gradient-primary-pink hover:opacity-90 button-glow w-full sm:w-auto"
              >
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-full sm:w-auto"
              >
                App Coming Soon
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Person excited about banking with Paychipa"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating text boxes with bounce animations */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg bounce-float-1 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">₦0 Transfer Fee</span>
              </div>
            </div>

            <div className="absolute top-1/4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg bounce-float-2 hidden md:block">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="text-sm font-medium">15% Interest</span>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg bounce-float-3 hidden sm:block">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Instant Setup</span>
              </div>
            </div>

            <div className="absolute bottom-1/3 -left-6 bg-card border border-border rounded-xl px-4 py-2 shadow-lg bounce-float-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Bank Grade Security</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              Free
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              POS Terminals
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              0%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Setup Fees
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              Instant
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Account Opening
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Support
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
          Powered by{" "}
          <span className="text-primary font-medium">
            Stripe and Flutterwave
          </span>
        </div>
      </section>

      {/* All-in-One Platform Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            All-in-One Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need,{" "}
            <span className="text-primary text-glow">one app</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            From everyday payments to business growth, Paychipa has you covered
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Transfers</h3>
            <p className="text-muted-foreground">
              Send money to any bank in Nigeria instantly at zero cost.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Virtual & Physical Cards</h3>
            <p className="text-muted-foreground">
              Get instant virtual cards and physical debit cards for all your
              payments.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <PiggyBank className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Savings</h3>
            <p className="text-muted-foreground">
              Automated savings with up to 15% annual interest. Reach your goals
              faster.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Receipt className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bill Payments</h3>
            <p className="text-muted-foreground">
              Pay for airtime, data, electricity, cable TV, and more in seconds.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">X & Meta Verification</h3>
            <p className="text-muted-foreground">
              Get verified on X (Twitter) Blue and Meta platforms directly from
              the app.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Tools</h3>
            <p className="text-muted-foreground">
              Accept payments, manage inventory, and track sales with ease.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">POS Terminals</h3>
            <p className="text-muted-foreground">
              Get POS machines for your business with instant settlement.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Loans & Credit</h3>
            <p className="text-muted-foreground">
              Access instant loans up to ₦5M with flexible repayment options.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Protected</h3>
            <p className="text-muted-foreground">
              Advanced security measures to keep your transactions and data
              safe.
            </p>
          </Card>
        </div>
      </section>

      {/* POS Terminals Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden bg-secondary">
              <img
                src={posTerminal}
                alt="POS terminal for business payments"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="outline" className="rounded-full">
              For Businesses
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Accept payments anywhere with our POS terminals
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a free POS machine and start accepting card payments from your
              customers. Instant settlement directly to your account.
            </p>

            <div className="space-y-3">
              {[
                "Free POS terminal with zero setup cost",
                "Accept all card types - Mastercard, Visa, Verve",
                "Instant settlement to your bank account",
                "24/7 customer support and maintenance",
                "Real-time sales tracking on your phone",
                "Multiple terminals for multiple locations",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Learn More About POS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Cards Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full">
              Smart Cards
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Physical & virtual cards for all your needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant virtual cards for online shopping and physical debit
              cards delivered to your doorstep. Shop online and offline with
              ease.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Virtual Cards</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant virtual cards for online payments. Create multiple
                  cards for different purposes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Created instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Dollar & Naira cards
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Freeze/unfreeze anytime
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2">Physical Cards</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mastercard debit cards delivered to you. Use at ATMs and POS
                  terminals nationwide.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Free delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Contactless payments
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Worldwide acceptance
                  </li>
                </ul>
              </Card>
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Explore Cards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20">
              <img
                src={smartCard}
                alt="Premium contactless payment card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Banking Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full">
              Personal Banking
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Send money, pay bills, save & invest
            </h2>
            <p className="text-lg text-muted-foreground">
              Open a free account in minutes. No paperwork, no minimum balance.
              Just simple, fast banking.
            </p>

            <div className="space-y-3">
              {[
                "Free transfers to all banks in Nigeria",
                "Automated savings with 15% interest",
                "Pay bills - airtime, data, electricity, cable",
                "Request and send money with ease",
                "Instant loans up to ₦5M",
                "Investment options with high returns",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Discover Personal Banking
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden bg-secondary">
              <img
                src={personalBanking}
                alt="Happy customer using Paychipa personal banking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Escrow Protection Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl p-12 aspect-square flex items-center justify-center relative">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Secure Escrow</h3>
                  <p className="text-sm text-muted-foreground">
                    Your protection guarantee
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground">
                      Protected
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">Fast</div>
                    <div className="text-xs text-muted-foreground">Release</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="outline" className="rounded-full">
              Secure Transactions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Trade with confidence using Escrow protection
            </h2>
            <p className="text-lg text-muted-foreground">
              Buy and sell safely online. Your money is held securely until both
              buyer and seller are satisfied. Perfect for marketplace
              transactions and high-value purchases.
            </p>

            <div className="space-y-3">
              {[
                "100% buyer & seller protection",
                "Secure payment holding",
                "Expert dispute resolution",
                "Perfect for online marketplaces",
                "Instant release after confirmation",
                "Verified user transactions",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Learn About Escrow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Why Paychipa?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built for Africans
          </h2>
          <p className="text-lg text-muted-foreground">
            Banking should be simple, fast, and accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Free POS terminals that actually work, instant settlement, and
              zero fees. Finally, a payment solution designed for Africans
              businesses."
            </p>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold">Small Business Owners</div>
                <div className="text-sm text-muted-foreground">
                  Retail & Services
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Virtual cards for online payments, instant transfers, and bill
              payments all in one app. Everything we need to run our businesses
              smoothly."
            </p>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold">Freelancers & Creatives</div>
                <div className="text-sm text-muted-foreground">
                  Digital Entrepreneurs
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Smart savings, automated transfers, and easy bill payments.
              Banking that actually makes our lives easier, not harder."
            </p>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold">Everyday Africans</div>
                <div className="text-sm text-muted-foreground">
                  Personal Banking
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-card border border-border rounded-3xl p-12 text-center">
          <Badge variant="outline" className="rounded-full mb-6">
            <span className="mr-1">🚀</span> Launching Soon
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're putting the finishing touches on Paychipa. Join the waitlist
            to be the first to know when we launch.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" variant="outline" className="rounded-full">
              <Apple className="mr-2 h-5 w-5" />
              Coming to App Store
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <Smartphone className="mr-2 h-5 w-5" />
              Coming to Google Play
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Instant transfers and settlements. Money moves at the speed of
                light.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-bold mb-2">100% Secure</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security measures to keep your transactions and data
                safe.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-bold mb-2">Free Everything</h3>
              <p className="text-sm text-muted-foreground">
                Free cards, free POS, zero setup fees. Banking without the
                burden.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Stay updated on our launch</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow us @paychipa on social media for exclusive updates, tips,
                and launch announcements
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <a
                href="https://x.com/paychipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Twitter className="h-4 w-4" />
                </button>
              </a>
              <a
                href="https://instagram.com/paychipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Instagram className="h-4 w-4" />
                </button>
              </a>
              <a
                href="https://facebook.com/paychipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Facebook className="h-4 w-4" />
                </button>
              </a>
              <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>

            <Badge variant="outline" className="rounded-full">
              <span className="mr-1">⏰</span> Expected Launch: 2026
            </Badge>
          </div>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
