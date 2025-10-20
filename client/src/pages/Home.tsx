import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { vehicles } from "@/data/vehicles";
import { Phone, Mail, MapPin, Clock, ChevronRight, Car, Users, Briefcase, Heart, Camera, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  const featuredVehicles = vehicles.filter(v => v.category === 'ultra-luxury' || v.category === 'premium').slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-slate-950 text-white sticky top-0 z-50">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sag-logo.jpg" alt="Strada Auto Group" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#fleet" className="transition-colors hover:text-slate-300">Fleet</a>
            <a href="#services" className="transition-colors hover:text-slate-300">Services</a>
            <a href="#about" className="transition-colors hover:text-slate-300">About</a>
            <a href="#contact" className="transition-colors hover:text-slate-300">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:9292649184" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-slate-300 transition-colors">
              <Phone className="h-4 w-4" />
              (929) 264-9184
            </a>
            <Button asChild className="hidden md:inline-flex">
              <a href="#contact">Book Now</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Long Island's Premier Luxury Car Rental</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Exotic & Luxury Car Rentals in Long Island, NY
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From everyday luxury to extraordinary experiences. Choose from our diverse fleet of 14 premium vehicles, from $80 to $1,500 per day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <a href="#fleet">View Our Fleet</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Premium Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$80+</div>
              <div className="text-sm text-muted-foreground">Starting Daily Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">75mi</div>
              <div className="text-sm text-muted-foreground">Service Radius</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section id="fleet" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Fleet</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Luxury at Every Level</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From ultra-luxury exotics to premium everyday vehicles, we have the perfect car for every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <ImageGallery images={[vehicle.image]} alt={vehicle.name} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                      <CardDescription>{vehicle.year} • {vehicle.color}</CardDescription>
                    </div>
                    <Badge variant="secondary">{vehicle.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{vehicle.dailyMiles} miles/day</span>
                    <span className="text-2xl font-bold">${vehicle.pricePerDay}<span className="text-sm font-normal text-muted-foreground">/day</span></span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="#contact">Reserve Now</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/fleet">
                View All {vehicles.length} Vehicles <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Luxury for Every Occasion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether it's business or pleasure, we provide premium vehicles for all your special moments.
            </p>
            <Link href="/services">
              <Button variant="outline" className="mt-4">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Car className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Self-Drive Rentals</CardTitle>
                <CardDescription>Experience the thrill of driving exotic and luxury vehicles on your own terms.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Chauffeur Services</CardTitle>
                <CardDescription>Arrive in style with our professional chauffeur-driven luxury transportation.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Corporate Events</CardTitle>
                <CardDescription>Impress clients and elevate your corporate image with our premium fleet.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Weddings</CardTitle>
                <CardDescription>Make your special day unforgettable with our elegant luxury vehicles.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Camera className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Photoshoots & Videos</CardTitle>
                <CardDescription>Perfect backdrop for your creative projects, music videos, and content creation.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Special Events</CardTitle>
                <CardDescription>Proms, anniversaries, birthdays - celebrate life's moments in luxury.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Strada Auto Group</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Performance Meets Sophistication</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Strada Auto Group brings a fresh approach to luxury car rentals in Long Island. We believe that extraordinary experiences shouldn't be reserved for special occasions alone.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our carefully curated fleet ranges from practical luxury vehicles perfect for everyday elegance to ultra-premium exotics that turn every drive into an unforgettable experience. With transparent pricing and exceptional service, we make luxury accessible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Diverse Fleet Selection</h3>
                    <p className="text-sm text-muted-foreground">From $80/day economy luxury to $1,500/day exotic supercars</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">Industry-standard rates with no hidden fees or surprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground">Serving a 75-mile radius from Lynbrook, NY with personalized service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" 
                alt="Luxury Car"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Get in Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Luxury?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today to reserve your vehicle or learn more about our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:9292649184" className="text-sm text-muted-foreground hover:text-primary">(929) 264-9184</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:privatekeysllc@gmail.com" className="text-sm text-muted-foreground hover:text-primary">privatekeysllc@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Service Area</div>
                      <p className="text-sm text-muted-foreground">75-mile radius from Lynbrook, NY (11563)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <p className="text-sm text-muted-foreground">9:00 AM - 9:00 PM, 7 Days a Week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input 
                        id="name"
                        type="text" 
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input 
                        id="email"
                        type="email" 
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <input 
                        id="phone"
                        type="tel" 
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea 
                        id="message"
                        rows={4}
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        placeholder="Tell us about your rental needs..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/sag-logo.jpg" alt="Strada Auto Group" className="h-12 w-auto mb-4 brightness-200" />
              <p className="text-sm">Premium exotic and luxury car rentals in Long Island, NY.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#fleet" className="hover:text-white transition-colors">Our Fleet</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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

