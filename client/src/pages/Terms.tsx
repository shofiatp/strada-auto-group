import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { Phone } from "lucide-react";

export default function Terms() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-slate-600">Last Updated: October 21, 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing and using Strada Auto Group's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Rental Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Renter must be at least 25 years of age</li>
                <li>Valid driver's license required (held for minimum 2 years)</li>
                <li>Major credit card in renter's name required for security deposit</li>
                <li>Proof of insurance may be required</li>
                <li>Background and driving record check may be conducted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Rental Period & Mileage</h2>
              <p>Each vehicle listing specifies daily mileage allowance. Additional mileage will be charged at rates specified in your rental agreement. Late returns may incur additional daily rental charges.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Security Deposit</h2>
              <p>A refundable security deposit is required for all rentals. The amount varies by vehicle and will be specified at booking. The deposit will be refunded within 7-10 business days after vehicle return, subject to inspection.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Vehicle Use Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vehicles may not be used for racing, off-roading, or any illegal activities</li>
                <li>Smoking is strictly prohibited in all vehicles</li>
                <li>Pets are not allowed unless explicitly approved</li>
                <li>Vehicle may not be subleased or used for commercial purposes without authorization</li>
                <li>Driver must remain within 75-mile radius of Lynbrook, NY (11563) unless otherwise arranged</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Fuel Policy</h2>
              <p>Vehicles are provided with a full tank of premium fuel. Renter is responsible for returning the vehicle with a full tank. Failure to do so will result in refueling charges plus service fee.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Damage & Liability</h2>
              <p>Renter is responsible for any damage to the vehicle during the rental period, including but not limited to mechanical damage, body damage, interior damage, and theft. Renter's insurance or our rental insurance will be primary coverage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made 7+ days before rental: Full refund minus processing fee</li>
                <li>Cancellations made 3-6 days before rental: 50% refund</li>
                <li>Cancellations made less than 3 days before rental: No refund</li>
                <li>No-shows: No refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Cleaning Fees</h2>
              <p>Vehicles should be returned in the same condition as received. Excessive dirt, stains, or odors may result in cleaning fees ranging from $100-$500 depending on severity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Traffic Violations</h2>
              <p>Renter is responsible for all traffic violations, parking tickets, tolls, and related fees incurred during the rental period. An administrative fee may be charged for processing violations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Modifications to Terms</h2>
              <p>Strada Auto Group reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of modified terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <ul className="list-none space-y-1 mt-2">
                <li>Phone: (929) 264-9184</li>
                <li>Email: privatekeysllc@gmail.com</li>
                <li>Service Area: 75-mile radius of Lynbrook, NY 11563</li>
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

