import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, Book, Shield, CreditCard, Smartphone, Briefcase } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    description: "Learn the basics of using PayChipa"
  },
  {
    title: "Account & Security",
    icon: Shield,
    description: "Manage your account and security settings"
  },
  {
    title: "Payments & Cards",
    icon: CreditCard,
    description: "Understanding transactions and card management"
  },
  {
    title: "POS Terminals",
    icon: Smartphone,
    description: "Setup and troubleshooting for merchants"
  },
  {
    title: "Business Accounts",
    icon: Briefcase,
    description: "Features and tools for businesses"
  }
];

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I create a PayChipa account?",
        a: "Creating a PayChipa account is simple. Visit our website or download our mobile app, click 'Sign Up', provide your email, phone number, and create a secure password. You'll receive a verification code via email or SMS to confirm your account. Once verified, complete your profile with additional information to unlock all features."
      },
      {
        q: "What documents do I need for account verification?",
        a: "For personal accounts, you'll need a valid government-issued ID (passport, driver's license, or national ID) and proof of address (utility bill or bank statement from the last 3 months). Business accounts require additional documents including business registration certificate, tax identification number, and director identification."
      },
      {
        q: "Is PayChipa available in my country?",
        a: "PayChipa currently operates in 12 African countries including Nigeria, Kenya, Ghana, South Africa, Uganda, Tanzania, Rwanda, Senegal, Côte d'Ivoire, Zambia, Cameroon, and Ethiopia. We're rapidly expanding to more markets. Check our website for the most current list of supported countries."
      }
    ]
  },
  {
    category: "Account & Security",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page, enter your registered email or phone number, and you'll receive a password reset link. Follow the link to create a new secure password. For security, the link expires after 24 hours."
      },
      {
        q: "How does PayChipa protect my account?",
        a: "We use bank-grade encryption, two-factor authentication (2FA), biometric login options, AI-powered fraud detection, and continuous transaction monitoring. Your sensitive data is encrypted both in transit and at rest. We never store your full card details or passwords in plain text."
      },
      {
        q: "What should I do if I notice suspicious activity?",
        a: "Immediately freeze your account using the 'Freeze Account' feature in the app, change your password, and contact our security team at security@paychipa.com. We'll investigate the activity and take necessary action to protect your account. You're not liable for unauthorized transactions reported within 48 hours."
      }
    ]
  },
  {
    category: "Payments & Cards",
    questions: [
      {
        q: "What are the transaction limits?",
        a: "Standard accounts have a daily transaction limit of $5,000 and a monthly limit of $50,000. Verified business accounts have higher limits starting at $25,000 daily. Limits can be increased based on account history and verification level. Withdrawal limits vary by payment method."
      },
      {
        q: "How long do transfers take?",
        a: "Internal PayChipa transfers are instant. Bank transfers typically complete within 1-2 business hours during banking hours. International transfers take 1-3 business days depending on the destination country and payment method. You'll receive notifications at each stage of the transfer."
      },
      {
        q: "Are there fees for transactions?",
        a: "PayChipa-to-PayChipa transfers are free. Bank transfers have a small fee of 0.5% (minimum $0.50, maximum $5). Card transactions have a 1.9% + $0.30 processing fee. Business accounts have volume-based discounts. Check our fee schedule in the app for detailed pricing."
      }
    ]
  },
  {
    category: "POS Terminals",
    questions: [
      {
        q: "How do I set up a POS terminal?",
        a: "After ordering your terminal, download the PayChipa Merchant app, create a business account, and complete KYB verification. When your terminal arrives, power it on, connect to WiFi or cellular, and scan the QR code in the app to pair. Follow the guided setup to configure receipt printing, tax settings, and inventory integration."
      },
      {
        q: "What payment methods does the POS accept?",
        a: "Our POS terminals accept all major debit and credit cards (Visa, Mastercard, Verve), mobile money payments, QR code payments, contactless/NFC payments (Apple Pay, Google Pay), and PayChipa wallet payments. All transactions are processed with end-to-end encryption."
      },
      {
        q: "What should I do if my POS isn't working?",
        a: "First, ensure it's charged and has internet connectivity. Restart the device by holding the power button for 10 seconds. Check for software updates in the settings menu. If issues persist, contact merchant support at merchants@paychipa.com or call our 24/7 helpline. We offer same-day terminal replacement for critical issues."
      }
    ]
  },
  {
    category: "Business Accounts",
    questions: [
      {
        q: "What features do business accounts include?",
        a: "Business accounts include multi-user access with role-based permissions, advanced analytics and reporting, bulk payment processing, invoicing tools, API access for integration, higher transaction limits, dedicated account manager (for premium plans), and preferential exchange rates for international transactions."
      },
      {
        q: "How do I add team members to my business account?",
        a: "Navigate to Settings > Team Management, click 'Invite Member', enter their email, and assign a role (Admin, Manager, or Staff). Each role has different permissions. New members will receive an invitation email to create their access. You can modify or revoke access anytime."
      },
      {
        q: "Can I integrate PayChipa with my accounting software?",
        a: "Yes! PayChipa integrates with QuickBooks, Xero, Sage, and other popular accounting platforms. Visit Settings > Integrations to connect your accounting software. Transactions automatically sync, reducing manual data entry. We also offer API access for custom integrations with our developer documentation."
      }
    ]
  }
];

export default function HelpCenter() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How can we <span className="gradient-text">help you?</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search our knowledge base or browse categories to find answers to your questions
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-12 h-14 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-12 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-hover cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find quick answers to common questions</p>
          </div>

          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${sectionIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-4">Still need help?</CardTitle>
              <CardDescription className="text-base mb-6">
                Our support team is available 24/7 to assist you with any questions or concerns
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setWaitlistOpen(true)}
                className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
              >
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Live Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
}
