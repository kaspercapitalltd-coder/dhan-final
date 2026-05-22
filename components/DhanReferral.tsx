"use client";

import Image from "next/image";

export default function DhanReferral() {
  return (
    <section className="py-20 bg-bg-secondary w-full border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-widest text-white mb-2">
            OUR RECOMMENDED BROKER
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 justify-between hover:border-accent-gold/30 transition-colors shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-gold/5 blur-[80px] pointer-events-none" />

          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative rounded-2xl overflow-hidden border-[3px] border-accent-gold shadow-[0_0_15px_rgba(245,197,24,0.3)] p-2 bg-white flex items-center justify-center">
            <Image
              src="https://i.ibb.co/WvNHWqTc/dhan-logo.jpg"
              alt="Dhan Broker"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 128px, 160px"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="flex-grow text-center md:text-left z-10">
            <p className="text-lg text-white mb-6 leading-relaxed">
              Open your trading account with{" "}
              <strong className="text-accent-gold">Dhan</strong> &mdash; India&apos;s
              fastest growing discount broker. Zero brokerage on equity
              delivery. Lightning fast execution for F&O traders.
            </p>

            <a
              href="https://invite.dhan.co/?join=MAHI56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold px-8 py-3 rounded text-sm sm:text-base uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(245,197,24,0.2)] hover:shadow-[0_0_25px_rgba(245,197,24,0.4)]"
            >
              Open Free Account
            </a>

            <p className="text-xs text-text-muted mt-4 italic">
              Opening an account via our link supports us at no extra cost to
              you. 🙏
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
