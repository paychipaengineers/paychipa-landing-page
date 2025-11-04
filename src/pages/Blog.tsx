import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Footer } from "@/components/Footer";

const featuredPost = {
  id: 1,
  title: "The Future of Digital Payments in Africa",
  excerpt: "Exploring how AI-driven fraud detection and smart POS systems are revolutionizing financial transactions across the continent.",
  category: "Industry Insights",
  date: "March 15, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
};

const blogPosts = [
  {
    id: 2,
    title: "How Escrow Services Protect Your Business Transactions",
    excerpt: "Understanding the mechanics of secure payment holding and how it builds trust between buyers and sellers.",
    category: "Product Updates",
    date: "March 12, 2024",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "POS Terminal Integration: A Complete Guide for Merchants",
    excerpt: "Step-by-step instructions for setting up and optimizing your PayChipa POS terminal for maximum efficiency.",
    category: "Guides",
    date: "March 10, 2024",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Understanding Fraud Detection with AI",
    excerpt: "How machine learning algorithms analyze transaction patterns to identify and prevent fraudulent activities in real-time.",
    category: "Technology",
    date: "March 8, 2024",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Smart Savings: Maximizing Returns on Your Digital Account",
    excerpt: "Tips and strategies for leveraging high-yield savings features and automated investment tools.",
    category: "Finance Tips",
    date: "March 5, 2024",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "The Rise of Embedded Finance in Africa",
    excerpt: "Why businesses are integrating financial services directly into their platforms and what it means for consumers.",
    category: "Industry Insights",
    date: "March 1, 2024",
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "Building Credit with Micro-Loans",
    excerpt: "How small, responsible borrowing can help individuals and businesses establish strong financial histories.",
    category: "Finance Tips",
    date: "February 28, 2024",
    readTime: "5 min read"
  }
];

const categories = ["All", "Industry Insights", "Product Updates", "Guides", "Technology", "Finance Tips"];

export default function Blog() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              PayChipa <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, updates, and stories from the forefront of African fintech innovation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden card-hover">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-muted" style={{
                backgroundImage: `url(${featuredPost.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{featuredPost.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                <Button className="w-fit">
                  Read Article <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardHeader>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" className="w-full">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated with PayChipa Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest fintech news, product updates, and industry insights delivered to your inbox.
          </p>
          <Button 
            size="lg" 
            onClick={() => setWaitlistOpen(true)}
            className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <Footer />

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
}
