import PricingPlans from "@/components/PricingPlans";
import { Check, Minus } from "lucide-react";

export const metadata = {
  title: "Pricing Plans | The Capital Guru",
  description:
    "Choose the right trading membership plan for you. Get high accuracy F&O signals today.",
};

export default function PlansPage() {
  const comparisonFeatures = [
    { name: "Daily Intraday Calls", m: true, s: true, y: true },
    { name: "Positional F&O Calls", m: true, s: true, y: true },
    { name: "Telegram Group Access", m: true, s: true, y: true },
    { name: "Exact SL & Targets", m: true, s: true, y: true },
    { name: "Market Analysis Reports", m: true, s: true, y: true },
    { name: "Priority WhatsApp Support", m: false, s: true, y: true },
    { name: "Risk Management Guidance", m: false, s: true, y: true },
    { name: "Capital Allocation Strategy", m: false, s: true, y: true },
    { name: "1-on-1 Consultation Call", m: false, s: false, y: true },
    { name: "Private Portfolio Review", m: false, s: false, y: true },
    { name: "Exclusive Setup Alerts", m: false, s: false, y: true },
  ];

  return (
    <div className="pt-8">
      <PricingPlans />

      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white mb-4">
              COMPARE FEATURES
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 sm:p-6 text-text-secondary font-medium min-w-[200px]">
                    Features
                  </th>
                  <th className="p-4 sm:p-6 text-center font-bebas text-2xl tracking-widest text-white">
                    Monthly
                  </th>
                  <th className="p-4 sm:p-6 text-center font-bebas text-2xl tracking-widest leading-none">
                    <span className="text-accent-gold block">6 Months</span>
                    <span className="text-xs tracking-normal font-sans text-accent-gold/70 uppercase">
                      Most Popular
                    </span>
                  </th>
                  <th className="p-4 sm:p-6 text-center font-bebas text-2xl tracking-widest text-white">
                    12 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="hover:bg-bg-card transition-colors">
                    <td className="p-4 sm:p-6 text-sm sm:text-base text-text-primary">
                      {feature.name}
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      {feature.m ? (
                        <Check className="w-5 h-5 mx-auto text-success" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-text-muted" />
                      )}
                    </td>
                    <td className="p-4 sm:p-6 text-center bg-accent-gold/5">
                      {feature.s ? (
                        <Check className="w-5 h-5 mx-auto text-accent-gold" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-text-muted" />
                      )}
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      {feature.y ? (
                        <Check className="w-5 h-5 mx-auto text-success" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-text-muted" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center">
            <a
              href={
                process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold px-8 py-4 rounded text-lg uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(245,197,24,0.3)]"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
