export const metadata = {
  title: "Disclaimer | The Capital Guru",
};

export default function DisclaimerPage() {
  return (
    <div className="py-24 bg-bg-primary min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-5xl tracking-widest text-white mb-8 border-b border-border pb-6">
          THE CAPITAL GURU — DISCLAIMER
        </h1>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          <p>
            The Capital Guru is <strong>not registered with SEBI</strong>{" "}
            (Securities and Exchange Board of India) as an investment advisor or
            research analyst. All signals, calls, and content provided on this
            platform are for educational and informational purposes only and
            should not be construed as financial or investment advice.
          </p>

          <p>
            Trading in Futures & Options (F&O) involves a high degree of risk
            and may not be suitable for all investors. You may lose all or more
            than your initial investment. Past performance of signals does not
            guarantee future results.
          </p>

          <p>
            Before trading, please consult a SEBI-registered financial advisor.
            The Capital Guru, its owners, partners, and team members are not
            liable for any financial losses incurred based on the information
            provided.
          </p>

          <p>
            By subscribing to our services, you acknowledge and agree to this
            disclaimer.
          </p>

          <p className="border-t border-border pt-6 mt-8">
            <strong>For queries:</strong>{" "}
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
