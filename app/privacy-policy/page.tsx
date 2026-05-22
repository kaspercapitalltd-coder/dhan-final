export const metadata = {
  title: "Privacy Policy | The Capital Guru",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-bg-primary min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-5xl tracking-widest text-white mb-8 border-b border-border pb-6">
          PRIVACY POLICY
        </h1>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>

          <h3 className="text-white text-xl font-bold mt-8">
            1. Information We Collect
          </h3>
          <p>
            When you purchase a subscription via our payment partner Cosmofeed,
            we collect basic communication data including your name, email
            address, and phone number (WhatsApp number). We do not store or
            process your credit card or bank details directly.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">
            2. How We Use Your Data
          </h3>
          <p>The collected data is used strictly for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivering the Telegram group access link.</li>
            <li>Providing customer support via WhatsApp and Email.</li>
            <li>
              Sending important updates regarding your subscription or our
              services.
            </li>
          </ul>

          <h3 className="text-white text-xl font-bold mt-8">
            3. Third-Party Tools
          </h3>
          <p>
            We utilize third-party services to operate our platform securely and
            efficiently:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cosmofeed:</strong> For payment processing and automated
              link delivery.
            </li>
            <li>
              <strong>Supabase:</strong> For secure coupon tracking and
              anonymous lead capture.
            </li>
            <li>
              <strong>Vercel:</strong> For secure hosting and basic analytics.
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to outside
            parties.
          </p>

          <h3 className="text-white text-xl font-bold mt-8">4. Your Rights</h3>
          <p>
            You have the right to request the deletion of your personal data
            from our mailing and communication lists. Simply contact us using
            the details below.
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
