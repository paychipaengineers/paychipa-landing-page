import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="rounded-full mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  At Paychipa, we collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Create an account and use our services</li>
                  <li>Make transactions or payments</li>
                  <li>Contact our customer support</li>
                  <li>Sign up for our newsletter or waitlist</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, date of birth, 
                  address, government-issued ID, bank account information, and transaction history.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Detect, prevent, and address fraud and security issues</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send you promotional communications (with your consent)</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>With financial institutions to process transactions</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect the rights and safety of Paychipa, our users, and the public</li>
                  <li>In connection with a merger, sale, or acquisition of our business</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">4. Data Security</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Strict access controls and employee training</li>
                  <li>AI-powered fraud detection and prevention systems</li>
                </ul>
                <p>
                  However, no method of transmission over the internet is 100% secure. While we strive to protect 
                  your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your transaction data</li>
                  <li>Object to certain processing of your information</li>
                  <li>Lodge a complaint with data protection authorities</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@paychipa.com or through your account settings.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">6. Data Retention</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We retain your personal information for as long as necessary to provide our services, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. When you 
                  close your account, we will delete or anonymize your information within 90 days, except 
                  where we are required to retain it for legal or regulatory purposes.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">7. International Transfers</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Your information may be transferred to and processed in countries other than Nigeria. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with this Privacy Policy and applicable data protection laws.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If you believe we have collected information 
                  from a child, please contact us immediately.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes 
                  by posting the new policy on our website and updating the "Last updated" date. Your continued 
                  use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>Email: privacy@paychipa.com</li>
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

export default Privacy;
