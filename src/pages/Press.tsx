import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const pressReleases = [
  {
    id: 1,
    title: "PayChipa Raises $15M Series A to Expand POS Infrastructure Across Africa",
    date: "March 20, 2024",
    excerpt: "Leading fintech platform secures funding to accelerate merchant acquisition and enhance AI-powered fraud detection capabilities.",
    type: "Funding"
  },
  {
    id: 2,
    title: "PayChipa Launches AI-Powered Fraud Detection System",
    date: "February 28, 2024",
    excerpt: "New machine learning technology reduces fraudulent transactions by 87% in pilot program across three African markets.",
    type: "Product Launch"
  },
  {
    id: 3,
    title: "PayChipa Partners with Major Banks to Expand Digital Banking Services",
    date: "February 15, 2024",
    excerpt: "Strategic partnerships enable seamless integration of personal and business accounts across 12 African countries.",
    type: "Partnership"
  },
  {
    id: 4,
    title: "PayChipa Hits 100,000 Active Merchants Milestone",
    date: "January 30, 2024",
    excerpt: "Platform celebrates significant growth milestone as adoption accelerates among small and medium-sized businesses.",
    type: "Milestone"
  },
  {
    id: 5,
    title: "PayChipa Escrow Service Processes $500M in Secure Transactions",
    date: "January 15, 2024",
    excerpt: "Trusted escrow platform facilitates safer business transactions, protecting buyers and sellers across African markets.",
    type: "Milestone"
  }
];

const mediaKit = [
  {
    name: "Company Logo (PNG)",
    description: "High-resolution logo in various formats",
    size: "2.4 MB"
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand identity and usage guidelines",
    size: "8.1 MB"
  },
  {
    name: "Product Screenshots",
    description: "High-quality screenshots of key features",
    size: "15.3 MB"
  },
  {
    name: "Executive Photos",
    description: "Professional headshots of leadership team",
    size: "5.7 MB"
  }
];

const mediaContacts = [
  {
    name: "Media Relations",
    email: "press@paychipa.com",
    description: "For press inquiries and interview requests"
  },
  {
    name: "Partnership Inquiries",
    email: "partnerships@paychipa.com",
    description: "For business development and strategic partnerships"
  }
];

export default function Press() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4">Press Room</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            PayChipa in the <span className="gradient-text">News</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Latest announcements, media coverage, and company updates from Africa's leading fintech infrastructure platform
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Press Releases</h2>
            <p className="text-muted-foreground">Official announcements and company news</p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                    <Badge variant="secondary">{release.type}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {release.date}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{release.title}</CardTitle>
                  <CardDescription className="text-base">{release.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">
                    Read Full Release <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Media Kit</h2>
            <p className="text-muted-foreground">Brand assets and resources for media coverage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{item.size}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Complete Media Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Media Contacts</h2>
            <p className="text-muted-foreground">Get in touch with our communications team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaContacts.map((contact, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle>{contact.name}</CardTitle>
                  <CardDescription className="mb-4">{contact.description}</CardDescription>
                  <Button variant="outline" className="w-fit" asChild>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated on PayChipa News
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest press releases and company announcements
          </p>
          <Button 
            size="lg" 
            onClick={() => setWaitlistOpen(true)}
            className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
          >
            Subscribe to Updates
          </Button>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
}
