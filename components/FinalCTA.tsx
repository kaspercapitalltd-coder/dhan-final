"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden border-t border-border">
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[150px] animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-bebas text-5xl sm:text-7xl tracking-widest text-white mb-6 drop-shadow-lg">
          READY TO TRADE LIKE A PRO?
        </h2>

        <p className="text-xl sm:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Join <strong className="text-white">1,000+ users</strong>. Stop
          guessing. Get your first high-accuracy signals today.
        </p>

        <a
          href={
            process.env.NEXT_PUBLIC_COSMOFEED_URL ||
            "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold text-xl px-10 py-5 rounded-sm transition-all shadow-[0_0_30px_rgba(245,197,24,0.4)] hover:shadow-[0_0_50px_rgba(245,197,24,0.6)] hover:-translate-y-1"
        >
          Get Started Now <ArrowRight className="w-6 h-6" />
        </a>

        <div className="mt-8 text-sm text-text-muted flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="text-success">✔</span> Secure Payment
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-success">✔</span> Instant Access
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-success">✔</span> 24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
}
