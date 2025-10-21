import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";

export default function FAQ() {
  const faqs = [
    {
      category: "Booking & Reservations",
      questions: [
        {
          q: "How do I book a vehicle?",
          a: "You can book a vehicle by calling us at (929) 264-9184 or emailing privatekeysllc@gmail.com. We'll check availability, confirm pricing, and reserve your vehicle."
        },
        {
          q: "How far in advance should I book?",
          a: "We recommend booking at least 48-72 hours in advance, especially for weekends and holidays. However, we can often accommodate last-minute requests based on availability."
        },
        {
          q: "Can I modify or cancel my reservation?",
          a: "Yes, you can modify or cancel your reservation. Please contact us as soon as possible. Cancellation policies vary based on how close to the rental date you cancel."
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we require a security deposit which varies by vehicle ($1,000-$2,000). The deposit is fully refundable upon safe return of the vehicle."
        }
      ]
    },
    {
      category: "Requirements & Eligibility",
      questions: [
        {
          q: "What are the age requirements?",
          a: "Drivers must be at least 25 years old for most vehicles. For ultra-luxury vehicles (Lamborghini, high-end Mercedes), the minimum age is 30."
        },
        {
          q: "What documents do I need?",
          a: "You'll need a valid driver's license, proof of insurance, and a major credit card in your name. International renters need a passport and international driver's permit."
        },
        {
          q: "Do you accept debit cards?",
          a: "We require a major credit card for the security deposit. Debit cards are not accepted for the deposit but can be used for rental payments."
        },
        {
          q: "Can someone else drive the vehicle?",
          a: "Additional drivers can be added to the rental agreement for a small fee. All drivers must meet our age and license requirements and be present during pickup."
        }
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          q: "What's included in the daily rate?",
          a: "The daily rate includes the specified daily mileage allowance, basic insurance, and 24/7 roadside assistance. Fuel, tolls, and excess mileage are additional."
        },
        {
          q: "How does mileage work?",
          a: "Each vehicle comes with a daily mileage allowance (100-300 miles depending on the vehicle). Excess mileage is charged at $1.25-$3.99 per mile over the limit."
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! We're transparent about all costs. Additional charges may include: excess mileage, fuel, tolls, late returns, cleaning fees, or damage."
        },
        {
          q: "Do you offer multi-day discounts?",
          a: "Yes! We offer discounted rates for weekly and monthly rentals. Contact us for custom quotes on extended rentals."
        }
      ]
    },
    {
      category: "Insurance & Protection",
      questions: [
        {
          q: "Is insurance included?",
          a: "Basic insurance is included in all rentals. Additional coverage options are available for enhanced protection and lower deductibles."
        },
        {
          q: "What happens if there's an accident?",
          a: "Contact us immediately. We'll guide you through the process. You're responsible for the deductible amount, which varies by vehicle and coverage level."
        },
        {
          q: "Can I use my own insurance?",
          a: "Yes, if your personal auto insurance covers rental vehicles. You'll need to provide proof of coverage. We still require our basic protection plan."
        }
      ]
    },
    {
      category: "Service Area & Delivery",
      questions: [
        {
          q: "Where do you deliver?",
          a: "We serve a 75-mile radius from Lynbrook, NY (11563), covering all of Long Island, parts of NYC, Westchester, and Connecticut."
        },
        {
          q: "Do you offer delivery and pickup?",
          a: "Yes! We offer complimentary delivery and pickup within 25 miles. Delivery fees apply for distances beyond that, calculated based on location."
        },
        {
          q: "Can I pick up the vehicle myself?",
          a: "Yes, you can pick up from our location in Queens Village, NY. We'll provide the exact address upon booking confirmation."
        }
      ]
    },
    {
      category: "Vehicle Usage",
      questions: [
        {
          q: "Can I take the vehicle out of state?",
          a: "Yes, out-of-state travel is permitted within the Northeast region. Please inform us in advance. Extended out-of-state trips may require additional authorization."
        },
        {
          q: "Are pets allowed?",
          a: "Pets are allowed in select vehicles with prior approval and an additional cleaning fee. Service animals are always welcome at no extra charge."
        },
        {
          q: "Can I smoke in the vehicle?",
          a: "No, all our vehicles are non-smoking. A $500 cleaning fee applies if smoking is detected."
        },
        {
          q: "What if I return the vehicle late?",
          a: "Late returns are subject to additional charges. Please contact us if you need to extend your rental. We'll do our best to accommodate based on availability."
        }
      ]
    }
  ];

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
            <a href="/#contact" className="transition-colors hover:text-slate-300">Contact</a>
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

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-white hover:text-slate-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge className="mb-4 bg-white/10 text-white border-white/20">FAQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Find answers to common questions about renting luxury and exotic vehicles from Strada Auto Group.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:9292649184">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#contact">Send a Message</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800 mt-auto">
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
                <li><Link href="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Self-Drive Rentals</li>
                <li>Chauffeur Services</li>
                <li>Corporate Events</li>
                <li>Weddings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>(929) 264-9184</li>
                <li>privatekeysllc@gmail.com</li>
                <li>Serving Long Island, NY</li>
                <li>9 AM - 9 PM, 7 Days</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Strada Auto Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

