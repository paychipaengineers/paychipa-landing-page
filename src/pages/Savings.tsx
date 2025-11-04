import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import {
  PiggyBank,
  TrendingUp,
  Target,
  Calendar,
  Shield,
  ArrowRight,
  Check,
  Zap,
  Lock,
  Gift,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Savings = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20">
            <PiggyBank className="h-3 w-3 mr-1" />
            Smart Savings
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Save smarter, earn{" "}
            <span className="text-primary text-glow">15% interest</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Automated savings with competitive interest rates. Set goals, lock
            funds, and watch your money grow securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setWaitlistOpen(true)}
              className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Start Saving Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Calculate Earnings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">
              15%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Annual Interest
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">
              ₦0
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Minimum Balance
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">
              Daily
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Interest Calculation
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">
              NDIC
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Insured
            </div>
          </div>
        </div>
      </section>

      {/* Savings Plans Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Savings Options
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose the perfect{" "}
            <span className="text-primary text-glow">savings plan</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <PiggyBank className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Regular Savings</h3>
            <div className="text-3xl font-bold text-primary mb-2">10%</div>
            <p className="text-sm text-muted-foreground mb-6">per annum</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Withdraw anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">No minimum balance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Daily interest calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Free transfers</span>
              </div>
            </div>

            <Button
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full"
              variant="outline"
            >
              Open Account
            </Button>
          </Card>

          <Card className="p-8 hover:border-primary transition-colors border-primary scale-105">
            <Badge className="mb-4 gradient-primary-pink text-white border-0">
              Most Popular
            </Badge>
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Goal Savings</h3>
            <div className="text-3xl font-bold text-primary mb-2">12%</div>
            <p className="text-sm text-muted-foreground mb-6">per annum</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Set specific goals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Auto-save features</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Track progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Flexible contributions</span>
              </div>
            </div>

            <Button
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full gradient-primary-pink"
            >
              Create Goal
            </Button>
          </Card>

          <Card className="p-8 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6">
              <Lock className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fixed Savings</h3>
            <div className="text-3xl font-bold text-primary mb-2">15%</div>
            <p className="text-sm text-muted-foreground mb-6">per annum</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Highest interest rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Lock for 3-12 months</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Guaranteed returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Break savings anytime</span>
              </div>
            </div>

            <Button
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full"
              variant="outline"
            >
              Lock Funds
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">
            Smart Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Savings made <span className="text-primary text-glow">simple</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Auto-Save</h3>
            <p className="text-muted-foreground">
              Automatically save a percentage of your income or set amount
              daily/weekly.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Goal Tracking</h3>
            <p className="text-muted-foreground">
              Set multiple savings goals and track progress toward each one.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
            <p className="text-muted-foreground">
              Choose daily, weekly, or monthly saving schedules that work for
              you.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Compound Interest</h3>
            <p className="text-muted-foreground">
              Earn interest on your interest with daily compounding.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">NDIC Insured</h3>
            <p className="text-muted-foreground">
              Your savings are protected by NDIC up to ₦5,000,000.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Savings Rewards</h3>
            <p className="text-muted-foreground">
              Earn bonus interest and rewards for consistent saving habits.
            </p>
          </Card>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 gradient-primary-pink text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start with as little as ₦1,000
            </h2>
            <p className="text-base sm:text-lg text-white/90">
              Save ₦10,000 monthly and earn ₦127,680 interest in one year with
              our 15% fixed savings plan.
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-white/70 mb-1">
                  Monthly Savings
                </div>
                <div className="text-2xl font-bold">₦10,000</div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">
                  Interest Earned
                </div>
                <div className="text-2xl font-bold">₦27,680</div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">Total Balance</div>
                <div className="text-2xl font-bold">₦147,680</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            variant="secondary"
            className="w-full rounded-full"
          >
            Start Saving Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Savings;
