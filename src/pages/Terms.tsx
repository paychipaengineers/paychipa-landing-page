import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="rounded-full mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  By accessing or using Paychipa's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any part of these terms, 
                  you may not use our services.
                </p>
                <p>
                  These terms apply to all users, including browsers, customers, merchants, and contributors 
                  of content.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">2. Eligibility</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>To use Paychipa, you must:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Be at least 18 years old</li>
                  <li>Be a resident of Nigeria or an approved jurisdiction</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                  <li>Maintain the security of your account credentials</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">3. Account Registration</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  When you create an account with Paychipa, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Comply with Know Your Customer (KYC) verification requirements</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">4. Services and Features</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>Paychipa provides financial technology services including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Personal and business bank accounts</li>
                  <li>Money transfers and bill payments</li>
                  <li>Virtual and physical payment cards</li>
                  <li>POS terminals for merchants</li>
                  <li>Savings accounts and investment products</li>
                  <li>Loan facilities and credit services</li>
                  <li>Escrow and secure payment services</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any service at any time 
                  with or without notice.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">5. Fees and Charges</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  You agree to pay all applicable fees as described on our website and in your account. 
                  Fees may include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Transaction fees for certain payment types</li>
                  <li>Card issuance and maintenance fees</li>
                  <li>ATM withdrawal fees</li>
                  <li>International transaction fees</li>
                  <li>Loan interest and processing fees</li>
                  <li>Overdraft or insufficient funds fees</li>
                </ul>
                <p>
                  We reserve the right to change our fees with 30 days' notice to users.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">6. Prohibited Activities</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>You may not use Paychipa services to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Engage in illegal activities or money laundering</li>
                  <li>Process payments for prohibited goods or services</li>
                  <li>Commit fraud or provide false information</li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Transaction Limits and Restrictions</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Your account may be subject to transaction limits based on your verification level, 
                  transaction history, and regulatory requirements. We may adjust these limits at our 
                  discretion for security or compliance reasons.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">8. Account Suspension and Termination</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We reserve the right to suspend or terminate your account if:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>You violate these Terms of Service</li>
                  <li>We suspect fraudulent or illegal activity</li>
                  <li>You provide false or misleading information</li>
                  <li>Your account shows unusual or suspicious activity</li>
                  <li>Required by law or regulatory authorities</li>
                </ul>
                <p>
                  You may close your account at any time through your account settings. Outstanding 
                  balances and obligations must be settled before account closure.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">9. Liability and Disclaimers</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Paychipa services are provided "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Service interruptions or technical issues</li>
                  <li>Loss of data or unauthorized access to your account</li>
                  <li>Actions of third-party service providers</li>
                  <li>Losses resulting from your negligence or breach of security</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>
                <p>
                  Our total liability is limited to the amount of fees you paid to us in the 12 months 
                  preceding the claim.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">10. Dispute Resolution</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Any disputes arising from these terms or your use of Paychipa services shall be resolved 
                  through binding arbitration in Nigeria, in accordance with Nigerian law. You waive the 
                  right to participate in class action lawsuits.
                </p>
                <p>
                  Before initiating arbitration, you agree to first contact our customer support to attempt 
                  informal resolution.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We may modify these Terms of Service at any time. We will notify you of material changes 
                  by email or through our platform. Continued use of our services after changes constitutes 
                  acceptance of the new terms.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">12. Contact Information</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>Email: legal@paychipa.com</li>
                  <li>Phone: +234 901 234 5678</li>
                  <li>Address: Abuja, Nigeria</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
