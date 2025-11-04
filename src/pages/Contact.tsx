import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <Badge variant="outline" className="rounded-full">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Get in <span className="text-primary text-glow">touch</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              </div>
              <Button type="submit" className="w-full rounded-full gradient-primary-pink">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <Mail className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-muted-foreground">support@paychipa.com</p>
            </Card>
            <Card className="p-6">
              <Phone className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Phone</h3>
              <p className="text-muted-foreground">+234 800 000 0000</p>
            </Card>
            <Card className="p-6">
              <MapPin className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Address</h3>
              <p className="text-muted-foreground">Lagos, Nigeria</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
