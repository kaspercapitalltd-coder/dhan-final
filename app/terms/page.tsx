export const metadata = {
  title: "Terms & Conditions | The Capital Guru",
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-bg-primary min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-5xl tracking-widest text-white mb-8 border-b border-border pb-6">
          TERMS & CONDITIONS
        </h1>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          <h3 className="text-white text-xl font-bold mt-8">
            Service Description
          </h3>
          <p>
            The Capital Guru provides educational trading setups, market
            analysis, and signals for the Indian Futures and Options (F&O)
            markets via a private Telegram group.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            No SEBI Registration
          </h3>
          <p>
            We are not SEBI-registered advisors. All content is for educational
            use only. We do not guarantee profits or secure returns on your
            investment. Trading in the stock market involves substantial risk.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            Subscription Terms
          </h3>
          <p>
            By subscribing, you agree to pay the stated fees for the selected
            duration (Monthly, 6 Months, or 12 Months). Access is granted
            automatically upon successful payment.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">Prohibited Uses</h3>
          <p>
            You agree not to forward, resell, or distribute the signals, links,
            or analysis provided in our private Telegram group. Violation of
            this rule will result in an immediate, permanent ban without refund.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            Limitation of Liability
          </h3>
          <p>
            Under no circumstances shall The Capital Guru, its owners, or
            affiliates be held liable for any direct, indirect, incidental, or
            consequential damages resulting from the use or inability to use our
            services or signals.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">Governing Law</h3>
          <p>
            These terms are governed by the laws of India. Any disputes arising
            shall be subject to the exclusive jurisdiction of the courts in
            India.
          </p>

          <p className="border-t border-border pt-6 mt-8">
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:mahir@thecapitalguru.net"
              className="text-accent-gold hover:underline"
            >
              mahir@thecapitalguru.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
