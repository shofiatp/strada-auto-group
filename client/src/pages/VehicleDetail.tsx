import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { Phone, Check, ArrowLeft } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { ImageGallery } from "@/components/ImageGallery";

export default function VehicleDetail() {
  const params = useParams();
  const vehicle = vehicles.find(v => v.id === params.id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Link href="/fleet">
            <Button>Back to Fleet</Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <main className="flex-1 py-8">
        <div className="container">
          <Link href="/fleet">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Fleet
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gallery */}
            <div>
              <ImageGallery images={vehicle.images} alt={vehicle.name} video={vehicle.video} />
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <Badge className="mb-2">{vehicle.category.replace('-', ' ').toUpperCase()}</Badge>
                <h1 className="text-4xl font-bold mb-2">{vehicle.name}</h1>
                <p className="text-xl text-slate-600">{vehicle.year} • {vehicle.color} • {vehicle.type}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">${vehicle.pricePerDay}</span>
                  <span className="text-slate-600">/ day</span>
                </div>
                <p className="text-sm text-slate-600">{vehicle.dailyMiles} miles included per day</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Description</h2>
                <p className="text-slate-700 leading-relaxed">{vehicle.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Rental Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Make & Model</span>
                    <span className="font-semibold">{vehicle.make} {vehicle.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Year</span>
                    <span className="font-semibold">{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Color</span>
                    <span className="font-semibold">{vehicle.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Type</span>
                    <span className="font-semibold">{vehicle.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Daily Rate</span>
                    <span className="font-semibold">${vehicle.pricePerDay}/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Included Mileage</span>
                    <span className="font-semibold">{vehicle.dailyMiles} miles/day</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href="/#contact">Reserve This Vehicle</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="tel:9292649184">Call (929) 264-9184</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Similar Vehicles */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Similar Vehicles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vehicles
                .filter(v => v.category === vehicle.category && v.id !== vehicle.id)
                .slice(0, 3)
                .map((similarVehicle) => (
                  <Card key={similarVehicle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <Link href={`/vehicle/${similarVehicle.id}`}>
                      <div className="aspect-video overflow-hidden bg-slate-100 cursor-pointer">
                        <img 
                          src={similarVehicle.image} 
                          alt={similarVehicle.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl">{similarVehicle.name}</CardTitle>
                          <p className="text-sm text-slate-600">{similarVehicle.year} • {similarVehicle.color}</p>
                        </div>
                        <Badge variant="secondary">{similarVehicle.type}</Badge>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">${similarVehicle.pricePerDay}</span>
                        <span className="text-slate-600 text-sm">/ day</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link href={`/vehicle/${similarVehicle.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800 mt-16">
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

