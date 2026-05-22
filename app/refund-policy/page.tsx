export const metadata = {
  title: "Refund Policy | The Capital Guru",
};

export default function RefundPolicyPage() {
  return (
    <div className="py-24 bg-bg-primary min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-5xl tracking-widest text-white mb-8 border-b border-border pb-6">
          REFUND POLICY
        </h1>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          <p className="text-lg font-medium text-white p-6 bg-red-900/20 border border-red-900/50 rounded-lg">
            Due to the digital nature of our service (instant Telegram group
            access), all sales are final. No refunds will be issued once access
            has been granted.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            Access Verification
          </h3>
          <p>
            Our delivery system securely logs when the Telegram link is
            delivered and accessed. Because proprietary setups and market
            insights cannot be returned, we strictly enforce this no-refund
            policy to protect our intellectual property.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            Technical Failures
          </h3>
          <p>
            In exceptional cases involving a technical failure where access was
            not delivered post-payment, please contact us within 24 hours. We
            will manual verify the payment and provide immediate access. If we
            cannot provide access within 48 hours of your request, a full refund
            will be initiated.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            Chargebacks & Disputes
          </h3>
          <p>
            Any unauthorized chargebacks or payment disputes will result in
            immediate and permanent revocation of your access. We keep detailed
            logs of delivery and usage which will be submitted to the payment
            provider in the event of a dispute.
          </p>

          <p className="border-t border-border pt-6 mt-8">
            <strong>For support regarding access:</strong>{" "}
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
