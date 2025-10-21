import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Home
            </Button>
          </Link>
          <Link href="/fleet" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Fleet
            </Button>
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Services
            </Button>
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Gallery
            </Button>
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              FAQ
            </Button>
          </Link>
          <a href="/#about" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              About
            </Button>
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Contact
            </Button>
          </a>
          
          <div className="border-t pt-4 mt-4 space-y-3">
            <a href="tel:9292649184" className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4" />
              (929) 264-9184
            </a>
            <a href="mailto:privatekeysllc@gmail.com" className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4" />
              privatekeysllc@gmail.com
            </a>
          </div>

          <Button asChild className="mt-4">
            <a href="/#contact" onClick={() => setOpen(false)}>Book Now</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

