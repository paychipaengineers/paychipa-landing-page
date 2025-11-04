import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-4"
            >
              <img
                src={logo}
                alt="Paychipa Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span>Paychipa</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
              Making payments simple and accessible for everyone in Nigeria.
              Bank smarter with Paychipa.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://facebook.com/paychipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Facebook className="h-4 w-4" />
                </button>
              </a>
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
                href="https://linkedin.com/paychipa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Linkedin className="h-4 w-4" />
                </button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  to="/personal-account"
                  className="hover:text-primary transition-colors"
                >
                  Personal Account
                </Link>
              </li>
              <li>
                <Link
                  to="/business-account"
                  className="hover:text-primary transition-colors"
                >
                  Business Account
                </Link>
              </li>
              <li>
                <Link
                  to="/pos-terminals"
                  className="hover:text-primary transition-colors"
                >
                  POS Terminals
                </Link>
              </li>
              <li>
                <Link
                  to="/cards"
                  className="hover:text-primary transition-colors"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/savings"
                  className="hover:text-primary transition-colors"
                >
                  Savings
                </Link>
              </li>
              <li>
                <Link
                  to="/loans"
                  className="hover:text-primary transition-colors"
                >
                  Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/escrow"
                  className="hover:text-primary transition-colors"
                >
                  Escrow
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span className="break-all">info@paychipa.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+234 901 234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Abuja, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="text-center sm:text-left">
            © 2025 Paychipa. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/security"
              className="hover:text-primary transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
