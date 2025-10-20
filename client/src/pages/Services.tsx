import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft, Car, Users, Briefcase, Heart, Camera, Sparkles, Check } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Self-Drive Rentals",
      description: "Experience the thrill of driving exotic and luxury vehicles on your own terms.",
      features: [
        "Choose from 14 premium vehicles",
        "Flexible rental periods",
        "Comprehensive insurance options",
        "24/7 roadside assistance",
        "Delivery and pickup available"
      ],
      idealFor: "Car enthusiasts, special occasions, weekend getaways"
    },
    {
      icon: Users,
      title: "Chauffeur Services",
      description: "Arrive in style with our professional chauffeur-driven luxury transportation.",
      features: [
        "Professional, licensed chauffeurs",
        "Airport transfers",
        "City tours and sightseeing",
        "Point-to-point transportation",
        "Hourly or daily rates"
      ],
      idealFor: "Business executives, VIP guests, special events"
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Impress clients and elevate your corporate image with our premium fleet.",
      features: [
        "Fleet options for teams",
        "Corporate account management",
        "Flexible billing options",
        "Professional presentation",
        "Reliable, punctual service"
      ],
      idealFor: "Client meetings, corporate retreats, executive transportation"
    },
    {
      icon: Heart,
      title: "Weddings",
      description: "Make your special day unforgettable with our elegant luxury vehicles.",
      features: [
        "Elegant luxury and exotic options",
        "Professional wedding chauffeurs",
        "Decorations and customization",
        "Multiple vehicles for wedding party",
        "Flexible timing for your schedule"
      ],
      idealFor: "Bride & groom transportation, wedding party, photo sessions"
    },
    {
      icon: Camera,
      title: "Photoshoots & Videos",
      description: "Perfect backdrop for your creative projects, music videos, and content creation.",
      features: [
        "Hourly and daily rates",
        "Multiple vehicle options",
        "Flexible locations within service area",
        "Professional coordination",
        "Social media content packages"
      ],
      idealFor: "Music videos, fashion shoots, content creators, advertising"
    },
    {
      icon: Sparkles,
      title: "Special Events",
      description: "Celebrate life's moments in luxury - proms, anniversaries, birthdays, and more.",
      features: [
        "Wide range of vehicles for any budget",
        "Customized packages",
        "Red carpet service available",
        "Photo opportunities",
        "Memorable experiences"
      ],
      idealFor: "Proms, anniversaries, birthdays, proposals, celebrations"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-slate-950 text-white sticky top-0 z-50">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/sag-logo.jpg" alt="Strada Auto Group" className="h-12 w-auto cursor-pointer" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-slate-300">Home</Link>
            <Link href="/fleet" className="transition-colors hover:text-slate-300">Fleet</Link>
            <a href="/#about" className="transition-colors hover:text-slate-300">About</a>
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
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury for Every Occasion</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Whether it's business or pleasure, we provide premium vehicles and professional service for all your special moments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Ideal for:</span> {service.idealFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting your luxury rental is easy with our streamlined process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Your Vehicle</h3>
              <p className="text-sm text-muted-foreground">Browse our fleet and select the perfect vehicle for your needs.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Call or email us with your rental dates and requirements.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Confirm Details</h3>
              <p className="text-sm text-muted-foreground">We'll confirm availability, pricing, and finalize your booking.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Experience Luxury</h3>
              <p className="text-sm text-muted-foreground">Pick up your vehicle and enjoy your premium rental experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Service Area</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Serve Long Island & Beyond</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our service area covers a 75-mile radius from Lynbrook, NY (11563), including all of Long Island, parts of NYC, Westchester, and Connecticut.
            </p>
            <div className="bg-slate-50 rounded-lg p-8">
              <p className="text-sm text-muted-foreground mb-4">
                Not sure if we serve your area? Give us a call - we're happy to accommodate special requests and may be able to extend our service area for your event.
              </p>
              <Button size="lg" asChild>
                <a href="tel:9292649184">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Confirm Service Area
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your needs and get a custom quote for your event or rental.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <a href="tel:9292649184">
                <Phone className="mr-2 h-4 w-4" />
                Call (929) 264-9184
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href="/#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/sag-logo.jpg" alt="Strada Auto Group" className="h-12 w-auto mb-4 brightness-200" />
              <p className="text-sm">Premium exotic and luxury car rentals in Long Island, NY.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
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

