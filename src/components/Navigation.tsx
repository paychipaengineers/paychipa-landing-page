import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "./WaitlistDialog";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const productsItems = [
  { title: "Personal Account", href: "/personal-account", description: "Banking for individuals" },
  { title: "Business Account", href: "/business-account", description: "Solutions for businesses" },
  { title: "POS Terminals", href: "/pos-terminals", description: "Payment hardware" },
  { title: "Cards", href: "/cards", description: "Virtual & physical cards" },
  { title: "Savings", href: "/savings", description: "High-yield savings" },
  { title: "Loans", href: "/loans", description: "Quick access to credit" },
  { title: "Escrow", href: "/escrow", description: "Secure transactions" },
];

const companyItems = [
  { title: "About Us", href: "/about", description: "Our story and mission" },
  { title: "Careers", href: "/careers", description: "Join our team" },
  { title: "Blog", href: "/blog", description: "Latest insights" },
  { title: "Press", href: "/press", description: "News and media" },
  { title: "Help Center", href: "/help", description: "Get support" },
  { title: "Contact", href: "/contact", description: "Reach out to us" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <img src={logo} alt="Paychipa Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>Paychipa</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    {productsItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    {companyItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <ThemeToggle />
          <Button 
            onClick={() => setWaitlistOpen(true)}
            className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {productsItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-muted-foreground hover:text-primary py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button 
                onClick={() => setCompanyOpen(!companyOpen)}
                className="w-full flex items-center justify-between text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Company <ChevronDown className={`h-4 w-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              {companyOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {companyItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-muted-foreground hover:text-primary py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </nav>
  );
}
