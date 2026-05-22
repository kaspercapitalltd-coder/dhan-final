"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";

export default function CouponModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenCouponModal");
    if (hasSeenModal === "true") return;

    let modalShown = false;

    // Time-based trigger (25s)
    const timer = setTimeout(() => {
      if (!modalShown) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenCouponModal", "true");
        modalShown = true;
      }
    }, 25000);

    // Exit intent trigger (Mouse leaves viewport top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !modalShown) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenCouponModal", "true");
        modalShown = true;
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("LAUNCH50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-[#161616] border border-accent-gold rounded-lg p-6 sm:p-8 max-w-sm w-full shadow-[0_0_40px_rgba(245,197,24,0.2)]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center font-mono text-white">
              <div className="text-3xl mb-2">🎁</div>
              <h2 className="font-bebas text-2xl tracking-widest text-accent-gold mb-2">
                EXCLUSIVE LAUNCH OFFER
              </h2>
              <div className="h-[1px] w-full bg-border my-4" />

              <p className="text-sm text-text-secondary mb-4">
                You qualify for{" "}
                <strong className="text-white text-base">25% OFF!</strong>
              </p>

              <div
                className="bg-[#0A0A0A] border border-dashed border-accent-gold/50 rounded py-3 px-4 mb-2 cursor-pointer hover:bg-[#111] transition-colors"
                onClick={handleCopy}
              >
                <div className="text-text-muted text-[10px] sm:text-xs mb-1 uppercase tracking-wider">
                  Code:
                </div>
                <div className="text-accent-gold text-2xl sm:text-3xl font-bold tracking-widest">
                  LAUNCH50
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="text-xs text-text-muted hover:text-accent-gold transition-colors mb-6 flex justify-center w-full min-h-[20px] items-center gap-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-success" />{" "}
                    <span className="text-success">Copied!</span>
                  </>
                ) : (
                  "(click to copy)"
                )}
              </button>

              <a
                href={
                  process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                  "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent-gold hover:bg-accent-gold-dim text-black font-bold py-3 rounded uppercase tracking-wider transition-all block mb-4"
              >
                JOIN NOW — SAVE 25%
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-text-muted hover:text-white transition-colors tracking-widest"
              >
                ── dismiss ──
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
