"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What happens after I pay?",
      a: "Immediately after payment via Cosmofeed, you'll receive your Telegram group access link on WhatsApp and email. No manual steps needed.",
    },
    {
      q: "Is my payment secure?",
      a: "Yes. All payments are processed by Cosmofeed, a trusted Indian payment platform with SSL encryption and UPI/card support.",
    },
    {
      q: "How do I get access after payment?",
      a: "The process is entirely automated. After completing your payment securely via Cosmofeed, you will instantly receive access links via WhatsApp and Email. There are no manual verification steps.",
    },
    {
      q: "What markets do you cover?",
      a: "We actively cover Indian F&O segments, specifically Nifty, BankNifty, Finnifty, Sensex, and occasional high-volume Stock Options on the NSE and BSE.",
    },
    {
      q: "Is this SEBI registered?",
      a: "The Capital Guru is NOT a SEBI registered entity. We operate strictly as an educational platform. All signals and setups provided are for learning and observation. Members trade at their own risk.",
    },
    {
      q: "What is the accuracy of your signals?",
      a: "Our historical accuracy stands at 80%+. However, we emphasize risk management over win-rate. A proper setup with a strict Stop Loss ensures your capital is protected even on losing days.",
    },
    {
      q: "Can I use any broker?",
      a: "Yes, you can execute our setups on any broker of your choice (Zerodha, Angel One, Upstox, etc.). We recommend Dhan for its speed and trader-friendly interface.",
    },
    {
      q: "What is your refund policy?",
      a: "Due to the digital and instant nature of our services, all sales are final. We do not offer refunds once you have gained access to the Telegram group.",
    },
    {
      q: "How many signals per day?",
      a: "We value quality over quantity. Expect 2-4 high-conviction trades per day. We do not encourage over-trading.",
    },
    {
      q: "Is there a free trial?",
      a: "No, we do not offer free trials. We maintain the exclusivity of our community to ensure quality support for our serious members.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg overflow-hidden transition-colors ${openIndex === index ? "bg-bg-card border-accent-gold/50" : "bg-transparent"}`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 min-h-[44px] flex items-center justify-between focus:outline-none text-left"
              >
                <span
                  className={`font-medium pr-4 ${openIndex === index ? "text-white" : "text-text-secondary"}`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-accent-gold ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-text-muted leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
