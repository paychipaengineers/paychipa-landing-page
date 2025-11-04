import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Fingerprint, Key, Server } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="rounded-full mb-4">Security First</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your Security is Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              We employ bank-grade security measures and cutting-edge technology to protect your financial data and transactions.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Bank-Grade Encryption</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      All data transmitted between your device and our servers is protected using 256-bit 
                      SSL/TLS encryption - the same level of security used by major financial institutions worldwide.
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>End-to-end encryption for all transactions</li>
                      <li>Encrypted data storage using AES-256</li>
                      <li>Secure key management infrastructure</li>
                      <li>Regular security audits and penetration testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Fingerprint className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Multi-Factor Authentication</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Add an extra layer of security to your account with our multi-factor authentication system:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>SMS and email verification codes</li>
                      <li>Biometric authentication (fingerprint and face ID)</li>
                      <li>Time-based one-time passwords (TOTP)</li>
                      <li>Device recognition and management</li>
                      <li>Transaction approval notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">AI-Powered Fraud Detection</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Our advanced AI system continuously monitors transactions for suspicious activity:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Real-time transaction monitoring and analysis</li>
                      <li>Machine learning algorithms to detect fraud patterns</li>
                      <li>Behavioral analysis of account activity</li>
                      <li>Automatic blocking of suspicious transactions</li>
                      <li>24/7 security operations center monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Secure Transaction Processing</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Every transaction on Paychipa goes through multiple security layers:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>PCI DSS Level 1 compliant payment processing</li>
                      <li>Tokenization of sensitive card data</li>
                      <li>3D Secure authentication for online payments</li>
                      <li>Transaction limits and velocity checks</li>
                      <li>Instant transaction alerts and notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Secure Infrastructure</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Our platform is built on world-class cloud infrastructure with enterprise-grade security:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Distributed denial-of-service (DDoS) protection</li>
                      <li>Regular automated backups and disaster recovery</li>
                      <li>Network segmentation and firewall protection</li>
                      <li>Intrusion detection and prevention systems</li>
                      <li>ISO 27001 certified data centers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Key className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Access Controls</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Strict access management ensures only authorized personnel can access sensitive systems:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Role-based access control (RBAC)</li>
                      <li>Principle of least privilege</li>
                      <li>Regular access reviews and audits</li>
                      <li>Comprehensive activity logging</li>
                      <li>Employee security training and background checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Regulatory Compliance</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Paychipa complies with all relevant financial regulations and standards:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Central Bank of Nigeria (CBN) licensed and regulated</li>
                      <li>Know Your Customer (KYC) verification</li>
                      <li>Anti-Money Laundering (AML) compliance</li>
                      <li>Counter-Terrorism Financing (CTF) measures</li>
                      <li>NDPR (Nigeria Data Protection Regulation) compliant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Stay Safe Online</h2>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Help us keep your account secure by following these best practices:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>Never share your password, PIN, or OTP with anyone</li>
                      <li>Enable multi-factor authentication on your account</li>
                      <li>Use a strong, unique password for your Paychipa account</li>
                      <li>Verify you're on the official Paychipa website before logging in</li>
                      <li>Keep your device and apps updated</li>
                      <li>Be wary of phishing emails and suspicious links</li>
                      <li>Report any suspicious activity immediately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Report a Security Issue</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  If you believe you've discovered a security vulnerability or have concerns about your 
                  account security, please contact us immediately:
                </p>
                <ul className="space-y-2">
                  <li><strong>Security Email:</strong> security@paychipa.com</li>
                  <li><strong>24/7 Hotline:</strong> +234 901 234 5678</li>
                  <li><strong>In-App Support:</strong> Available in your account settings</li>
                </ul>
                <p className="text-xs">
                  For responsible disclosure of security vulnerabilities, we offer a bug bounty program. 
                  Please email security@paychipa.com for details.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
