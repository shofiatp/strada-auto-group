import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { Phone } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-slate-950 text-white sticky top-0 z-50">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-400/30 hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg">
                <img src="/sag-logo-new.png" alt="Strada Auto Group" className="h-16 w-auto cursor-pointer drop-shadow-[0_0_15px_rgba(192,192,192,0.8)]" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-slate-300">Home</Link>
            <Link href="/fleet" className="transition-colors hover:text-slate-300">Fleet</Link>
            <Link href="/services" className="transition-colors hover:text-slate-300">Services</Link>
            <Link href="/gallery" className="transition-colors hover:text-slate-300">Gallery</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:9292649184" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-slate-300 transition-colors">
              <Phone className="h-4 w-4" />
              (929) 264-9184
            </a>
            <Button asChild className="hidden md:inline-flex">
              <a href="/#contact">Book Now</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-slate-600">Last Updated: October 21, 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>Strada Auto Group collects information necessary to provide luxury vehicle rental services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Personal Information:</strong> Name, address, phone number, email, date of birth</li>
                <li><strong>Driver Information:</strong> Driver's license number, driving record, insurance information</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address</li>
                <li><strong>Rental Information:</strong> Vehicle preferences, rental dates, pickup/return locations</li>
                <li><strong>Usage Data:</strong> Website analytics, browsing behavior, device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Processing and managing vehicle reservations</li>
                <li>Verifying identity and conducting background checks</li>
                <li>Processing payments and security deposits</li>
                <li>Communicating about reservations, changes, and updates</li>
                <li>Improving our services and customer experience</li>
                <li>Sending promotional offers (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Service Providers:</strong> Payment processors, insurance companies, background check services</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Partners:</strong> With your explicit consent for specific services</li>
              </ul>
              <p className="mt-2">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure payment processing through PCI-compliant providers</li>
                <li>Limited employee access to personal information</li>
                <li>Regular security audits and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
              <p>Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality and user experience</li>
                <li>Deliver personalized content and advertisements</li>
              </ul>
              <p className="mt-2">You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to data processing in certain circumstances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal, tax, and accounting obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="mt-2">Rental records are typically retained for 7 years for legal and tax purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>For questions about this Privacy Policy or to exercise your rights, contact us:</p>
              <ul className="list-none space-y-1 mt-2">
                <li>Phone: (929) 264-9184</li>
                <li>Email: privatekeysllc@gmail.com</li>
                <li>Address: Serving 75-mile radius of Lynbrook, NY 11563</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/sag-logo-new.png" alt="Strada Auto Group" className="h-12 w-auto mb-4" />
              <p className="text-sm">Premium exotic and luxury car rentals in Long Island, NY.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/fleet" className="hover:text-white transition-colors">Fleet</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>(929) 264-9184</li>
                <li>privatekeysllc@gmail.com</li>
                <li>Serving Long Island, NY</li>
                <li>9 AM - 9 PM, 7 Days / Week</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            © 2025 Strada Auto Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

