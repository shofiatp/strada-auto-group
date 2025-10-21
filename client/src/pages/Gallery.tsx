import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";
import { Play } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    { src: "/UrusS.MP4", title: "Lamborghini Urus - Green", thumbnail: "/vehicles/lamborghini-urus-2024-green-main.webp" },
    { src: "/yellowurus.MP4", title: "Lamborghini Urus - Yellow", thumbnail: "/vehicles/1_fZKytaRAHmwaqNth2rrNqg_1760998420015_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvbGFtYm9yZ2hpbmlfdXJ1c18yMDIxX3llbGxvdw.webp" },
    { src: "/GWagon.MP4", title: "Mercedes-Benz G63", thumbnail: "/vehicles/mercedes-g63-2019-blue-main.webp" },
    { src: "/maybach.MP4", title: "Mercedes-Maybach GLS", thumbnail: "/vehicles/2_GwhPeCZ6RCv3qiQNW45pl9_1760998414422_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvTWVyY2VkZXMtQmVuel9HTFMtQ2xhc3NfMjAyMV9CbGFjaw.webp" },
    { src: "/c8.MP4", title: "Chevrolet Corvette C8", thumbnail: "https://images.unsplash.com/photo-1617531653520-bd4f8e2c8e86?w=800&q=80" }
  ];

  const photos = [
    { src: "/IMG_1400.JPG", title: "Mercedes-Maybach GLS Interior", description: "Luxury interior with ambient lighting" }
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
              (929) 264-9184
            </a>
            <Button asChild className="hidden md:inline-flex">
              <a href="/#contact">Book Now</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            See our luxury fleet in action. Watch videos and explore photos of our premium vehicles.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Fleet Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedVideo(video.src)}>
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-slate-900 fill-slate-900" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Interior & Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <img src={photo.src} alt={photo.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="text-sm text-slate-600">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            <video 
              controls 
              autoPlay
              className="w-full rounded-lg"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

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
                <li><Link href="/fleet" className="hover:text-white transition-colors">Fleet</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/services#self-drive" className="hover:text-white transition-colors">Self-Drive Rentals</a></li>
                <li><a href="/services#chauffeur" className="hover:text-white transition-colors">Chauffeur Service</a></li>
                <li><a href="/services#corporate" className="hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="/services#weddings" className="hover:text-white transition-colors">Weddings</a></li>
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

