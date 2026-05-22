"use client";

import { motion } from "motion/react";
import {
  Target,
  Zap,
  ShieldCheck,
  CalendarClock,
  ShieldAlert,
  Users,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Target,
      title: "High Accuracy Signals",
      description:
        "NSE & BSE F&O calls with 80%+ historical accuracy based on premium data models.",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description:
        "Signals delivered directly to your Telegram with zero delay so you never miss an entry.",
    },
    {
      icon: ShieldCheck,
      title: "No Broker Lock-in",
      description:
        "Works with any broker of your choice. We recommend Dhan for lightning fast execution.",
    },
    {
      icon: CalendarClock,
      title: "Daily Coverage",
      description:
        "2-4 high-conviction Intraday + Positional calls provided every active market day.",
    },
    {
      icon: ShieldAlert,
      title: "Risk Managed",
      description:
        "Every call comes with exact Stop Loss and Target levels to protect your capital.",
    },
    {
      icon: Users,
      title: "24/7 Community",
      description:
        "Access our active Telegram group and dedicated WhatsApp support line.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white mb-4">
            WHY TRADERS CHOOSE US
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-bg-card border border-border p-8 rounded-lg hover:border-accent-gold/50 hover:shadow-[0_0_30px_rgba(245,197,24,0.1)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-bg-primary border border-border rounded-lg flex items-center justify-center mb-6 group-hover:border-accent-gold/50 group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
