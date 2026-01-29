"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="bg-white/70 backdrop-blur-xl border-b border-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">💃</span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl text-coral-700 tracking-tight">
                Salsa for Women
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Colombian • Houston
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-coral-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-coral-600 hover:bg-coral-700 text-white rounded-full px-5 shadow-sm"
            >
              <Link href="/contact">Book Lesson</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <span className="text-xl">💃</span>
                  <span className="font-display text-coral-700">Salsa for Women</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8 space-y-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="py-3 px-4 text-foreground/80 hover:text-coral-600 hover:bg-coral-50 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-4 bg-coral-600 hover:bg-coral-700 text-white rounded-full"
                  >
                    <Link href="/contact">Book Lesson</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
