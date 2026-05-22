"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Monthly",
      price: "3,299",
      period: "/mo",
      highlight: "Good Start",
      subtext: "Billed monthly • Cancel anytime",
      popular: false,
      features: [
        "Daily Intraday Calls",
        "Positional F&O Calls",
        "Telegram Group Access",
        "Exact SL & Targets",
        "Market Analysis Reports",
      ],
    },
    {
      name: "6 Months",
      price: "15,999",
      period: "",
      highlight: "⭐ MOST POPULAR",
      subtext: "₹2,666/mo effective • Save ₹3,795",
      popular: true,
      features: [
        "All Monthly Features",
        "Priority WhatsApp Support",
        "Risk Management Guidance",
        "Capital Allocation Strategy",
        "Save ₹3,795 instantly",
      ],
    },
    {
      name: "12 Months",
      price: "26,999",
      period: "",
      highlight: "Best Value",
      subtext: "₹2,249/mo effective • Save ₹12,589",
      popular: false,
      features: [
        "All 6 Month Features",
        "1-on-1 Consultation Call",
        "Private Portfolio Review",
        "Exclusive Setup Alerts",
        "Save ₹12,589 instantly",
      ],
    },
  ];

  return (
    <section
      id="plans"
      className="py-24 bg-bg-secondary relative border-y border-border"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-accent-gold/20 blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-widest text-white mb-4">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-accent-gold font-medium mb-6 animate-pulse">
            25% OFF with code LAUNCH50 for first 50 members
          </p>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col bg-bg-card rounded-xl border ${
                plan.popular
                  ? "border-accent-gold shadow-[0_0_40px_rgba(245,197,24,0.15)] border-2 md:scale-[1.04] z-10"
                  : "border-border hover:border-gray-600"
              } p-8 transition-all hover:bg-[#1a1a1a]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-black font-bold px-4 py-1 rounded text-sm uppercase tracking-wider shadow-md whitespace-nowrap">
                  {plan.highlight}
                </div>
              )}
              {!plan.popular && plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bg-secondary border border-border text-text-secondary px-4 py-1 rounded text-xs uppercase tracking-wider whitespace-nowrap">
                  {plan.highlight}
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className="font-bebas text-3xl tracking-widest text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center font-bold">
                  <span className="text-xl text-text-secondary mr-1">₹</span>
                  <span
                    className={`text-5xl tracking-tight ${plan.popular ? "text-accent-gold" : "text-white"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-muted ml-1">{plan.period}</span>
                </div>
                {plan.subtext && (
                  <p className="text-text-muted text-xs mt-3 uppercase tracking-wider max-w-[200px] mx-auto leading-relaxed">
                    {plan.subtext}
                  </p>
                )}
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-accent-gold shrink-0 mr-3 mt-0.5" />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={
                  process.env.NEXT_PUBLIC_COSMOFEED_URL ||
                  "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-12 flex items-center justify-center rounded font-bold uppercase tracking-wide transition-all ${
                  plan.popular
                    ? "bg-accent-gold hover:bg-accent-gold-dim text-black shadow-lg hover:shadow-accent-gold/50"
                    : "bg-bg-secondary hover:bg-white hover:text-black text-white border border-border"
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-bg-card border border-border px-6 py-4 rounded-lg shadow-lg">
            <span className="text-text-secondary">Use code </span>
            <strong className="text-accent-gold text-xl font-mono mx-2">
              LAUNCH50
            </strong>
            <span className="text-text-secondary">
              {" "}
              at checkout for 25% OFF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
