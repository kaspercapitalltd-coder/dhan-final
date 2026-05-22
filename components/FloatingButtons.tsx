"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [mounted, setMounted] = useState(false);
  const [showSticky, setShowSticky] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    if (sessionStorage.getItem("hideStickyCTA") === "true") {
      setTimeout(() => setShowSticky(false), 0);
    }
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const handleDismissSticky = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSticky(false);
    sessionStorage.setItem("hideStickyCTA", "true");
  };

  const whatsappUrl =
    "https://wa.me/919106713107?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Capital%20Guru%20signals";

  return (
    <>
      {/* Mobile Sticky CTA */}
      {showSticky && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-accent-gold h-[48px] flex items-center shadow-[0_-4px_10px_rgba(0,0,0,0.5)] pr-2 pl-4">
          <a
            href={
              process.env.NEXT_PUBLIC_COSMOFEED_URL ||
              "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
            }
            className="text-black font-bold flex-1 text-center flex items-center justify-center gap-1.5 text-sm"
          >
            <span>🚀</span> Join Now — 25% OFF with LAUNCH50
          </a>
          <button
            onClick={handleDismissSticky}
            className="w-[44px] h-[44px] flex items-center justify-center text-black/80 hover:text-black shrink-0"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
