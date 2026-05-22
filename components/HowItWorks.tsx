"use client";

import { motion } from "motion/react";
import { ArrowRight, CreditCard, Send, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Choose Your Plan",
      description:
        "Pick the membership plan that best fits your trading capital and goals.",
      delay: 0.1,
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description:
        "Secure and instant checkout via Cosmofeed using UPI, Card, or Netbanking.",
      delay: 0.3,
    },
    {
      icon: Send,
      title: "Get Instant Access",
      description:
        "Telegram group link is delivered automatically to your Email and WhatsApp.",
      delay: 0.5,
    },
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white mb-4">
            HOW IT WORKS
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="relative">
          {/* Dashed line connecting steps (desktop) */}
          <div className="hidden md:block absolute top-[45px] left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: step.delay,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-bg-secondary border-2 border-border flex items-center justify-center mb-6 relative group-hover:border-accent-gold group-hover:shadow-[0_0_20px_rgba(245,197,24,0.2)] transition-all">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-gold text-bg-primary font-bold flex items-center justify-center z-10">
                    {index + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href={
              process.env.NEXT_PUBLIC_COSMOFEED_URL ||
              "https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-primary font-bold text-lg px-8 py-4 rounded-sm transition-all hover:bg-gray-200"
          >
            Start Today <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
