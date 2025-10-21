import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { vehicles, vehicleMakes, vehicleTypes, vehicleCategories, type Vehicle } from "@/data/vehicles";
import { Phone, Mail, ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { ImageGallery } from "@/components/ImageGallery";

export default function Fleet() {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (selectedMake !== "all" && vehicle.make !== selectedMake) return false;
    if (selectedType !== "all" && vehicle.type !== selectedType) return false;
    if (selectedCategory !== "all" && vehicle.category !== selectedCategory) return false;
    
    if (priceRange !== "all") {
      if (priceRange === "under-200" && vehicle.pricePerDay >= 200) return false;
      if (priceRange === "200-500" && (vehicle.pricePerDay < 200 || vehicle.pricePerDay > 500)) return false;
      if (priceRange === "500-1000" && (vehicle.pricePerDay < 500 || vehicle.pricePerDay > 1000)) return false;
      if (priceRange === "over-1000" && vehicle.pricePerDay <= 1000) return false;
    }
    
    return true;
  });

  const resetFilters = () => {
    setSelectedMake("all");
    setSelectedType("all");
    setSelectedCategory("all");
    setPriceRange("all");
  };

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
            <a href="/#services" className="transition-colors hover:text-slate-300">Services</a>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Complete Fleet</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Browse our entire collection of {vehicles.length} premium vehicles. From everyday luxury to exotic supercars.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-slate-50 border-b py-6 sticky top-20 z-40">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-semibold">Filter Fleet</h2>
            {(selectedMake !== "all" || selectedType !== "all" || selectedCategory !== "all" || priceRange !== "all") && (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Clear All
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Make</label>
              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger>
                  <SelectValue placeholder="All Makes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  {vehicleMakes.map((make) => (
                    <SelectItem key={make} value={make}>{make}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {vehicleTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ultra-luxury">Ultra-Luxury</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="mid-tier">Mid-Tier</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-200">Under $200/day</SelectItem>
                  <SelectItem value="200-500">$200 - $500/day</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000/day</SelectItem>
                  <SelectItem value="over-1000">Over $1,000/day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No vehicles match your filters</p>
              <Button onClick={resetFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <ImageGallery images={vehicle.images} alt={vehicle.name} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                        <CardDescription>{vehicle.year} • {vehicle.color}</CardDescription>
                      </div>
                      <Badge variant="secondary">{vehicle.type}</Badge>
                    </div>
                    <Badge variant="outline" className="w-fit capitalize">
                      {vehicle.category.replace('-', ' ')}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{vehicle.description}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Daily Miles</span>
                        <span className="font-medium">{vehicle.dailyMiles} miles</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold">${vehicle.pricePerDay}</div>
                        <div className="text-sm text-muted-foreground">per day</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href="/#contact">Reserve Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reserve Your Vehicle?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and book your premium rental experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <a href="tel:9292649184">
                <Phone className="mr-2 h-4 w-4" />
                Call (929) 264-9184
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href="mailto:privatekeysllc@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
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
                <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
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

