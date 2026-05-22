"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-accent-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="https://i.ibb.co/kgZG4DDQ/122151.png"
                  alt="The Capital Guru"
                  fill
                  sizes="40px"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bebas text-xl sm:text-2xl tracking-wider text-text-primary whitespace-nowrap">
                THE CAPITAL GURU
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-text-secondary hover:text-accent-gold transition-colors px-3 py-2 rounded-md font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={
                  process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                  "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold px-6 py-2 rounded-sm transition-all shadow-[0_0_15px_rgba(245,197,24,0.3)] hover:shadow-[0_0_25px_rgba(245,197,24,0.5)]"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-bg-card focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary border-b border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-accent-gold hover:bg-bg-card block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={
                  process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                  "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-4 bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold px-6 py-3 rounded-sm transition-all block"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
