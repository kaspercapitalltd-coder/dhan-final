import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
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
              <span className="font-bebas text-2xl tracking-wider text-text-primary">
                THE CAPITAL GURU
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              India&apos;s most accurate F&O signal platform for NSE & BSE traders.
              Trade smarter, profit bigger.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Plans", path: "/plans" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-text-secondary hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wide mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Refund Policy", path: "/refund-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-text-secondary hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl tracking-wide mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">
                  Email
                </span>
                <a
                  href="mailto:mahir@thecapitalguru.net"
                  className="hover:text-accent-gold transition-colors"
                >
                  mahir@thecapitalguru.net
                </a>
              </li>
              <li>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">
                  Telegram
                </span>
                <a
                  href="https://t.me/TheCapitalGuruSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-gold transition-colors"
                >
                  @TheCapitalGuruSupport
                </a>
              </li>
              <li>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">
                  WhatsApp / Phone
                </span>
                <a
                  href="https://wa.me/919106713107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-gold transition-colors"
                >
                  +91 9106713107
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center flex flex-col items-center gap-6">
          <div className="max-w-[600px] text-[#8A7200] text-[11px] leading-relaxed mx-auto px-4">
            ⚠️ DISCLAIMER: The Capital Guru is NOT registered with SEBI as an
            investment advisor. All signals are for educational purposes only.
            F&O trading involves high risk. Past performance does not guarantee
            future results. Trade at your own risk.
          </div>
          <p className="text-text-muted text-xs">
            © {currentYear} The Capital Guru. All rights reserved. |
            thecapitalguru.net
          </p>
        </div>
      </div>
    </footer>
  );
}
