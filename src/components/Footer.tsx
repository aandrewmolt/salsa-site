import Link from "next/link";
import { Instagram, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f1a16] text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💃</span>
              <span className="font-display text-xl">Salsa for Women</span>
            </div>
            <p className="text-gray-300 mb-4">
              Colombian-born salsa instructor in Houston helping women feel confident,
              feminine, and free on the dance floor—no partner needed.
            </p>
            <p className="text-mango-400 font-medium flex items-center gap-2">
              <Heart className="h-4 w-4 fill-current" />
              Confidence starts in your feet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-mango-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-mango-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-mango-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-mango-400 transition-colors">
                  Book a Lesson
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Locations
            </h3>
            <p className="text-gray-300 mb-2">
              Partner studios across Houston:
            </p>
            <ul className="text-gray-300 space-y-1">
              <li>• Midtown</li>
              <li>• The Heights</li>
              <li>• Galleria Area</li>
              <li>• Medical Center</li>
            </ul>
            <div className="mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mango-400 hover:text-mango-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Salsa for Women Houston. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Serving women across Houston, TX | Bilingual instruction available (English/Spanish)
          </p>
        </div>
      </div>
    </footer>
  );
}
