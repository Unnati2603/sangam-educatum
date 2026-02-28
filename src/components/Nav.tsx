"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <h1 className="text-xl font-bold text-rich-black">PCS</h1>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8 text-rich-black">
          <Link href="/" className="hover:text-yinmn-blue transition">
            Home
          </Link>
          <Link href="/AboutUs" className="hover:text-yinmn-blue transition">
            About Us
          </Link>
          <Link href="#services" className="hover:text-yinmn-blue transition">
            Services
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 text-rich-black">
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-yinmn-blue transition" />
          {/* Hamburger toggle - mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-rich-black">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 text-lg hover:text-yinmn-blue transition"
            >
              Home
            </Link>
            <Link
              href="/AboutUs"
              onClick={() => setIsOpen(false)}
              className="py-2 text-lg hover:text-yinmn-blue transition"
            >
              About Us
            </Link>
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="py-2 text-lg hover:text-yinmn-blue transition"
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
