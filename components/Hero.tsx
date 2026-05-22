"use client";

import { motion } from "motion/react";
import Ticker from "./Ticker";

export default function Hero() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-x-clip bg-bg-primary hero-section">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Floating Ticker at top of hero */}
      <div className="absolute top-0 left-0 z-20 w-full pt-1 sm:pt-4">
        <Ticker />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="hero-headline text-white drop-shadow-2xl flex flex-col">
              <span className="shrink-0">
                TRADE SMARTER.
              </span>
              <span
                className="text-accent-gold mt-1 sm:mt-2"
                style={{ textShadow: "0 0 40px rgba(245, 197, 24, 0.3)" }}
              >
                PROFIT BIGGER.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hero-subheadline"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed">
              India&apos;s most accurate F&O signal platform for NSE & BSE traders.
            </p>
            <p className="text-white font-medium text-lg sm:text-xl md:text-2xl mt-1">
              Join 2,000+ traders already winning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
            style={{ gap: '12px' }}
          >
            <a
              href={
                process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Signals Now <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <button
              onClick={scrollToPlans}
              className="cta-secondary"
            >
              See Plans
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="trust-badges">
              <span>✅ NSE & BSE</span>
              <span>⚡ Instant Access</span>
              <span>🎟️ Code: LAUNCH50</span>
              <span>🔓 No Lock-in</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
