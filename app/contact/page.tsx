export const metadata = {
  title: "Contact Us | The Capital Guru",
};

import { Mail, MessageCircle, Send, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-24 bg-bg-primary min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-5xl tracking-widest text-white mb-4">
            CONTACT SUPPORT
          </h1>
          <p className="text-text-secondary">
            We&apos;re here to help. Reach out to us via any of the channels below.
          </p>
          <div className="w-24 h-1 bg-accent-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <a
            href="mailto:mahir@thecapitalguru.net"
            className="flex items-center gap-4 bg-bg-card p-6 border border-border rounded-xl hover:border-accent-gold/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide">Email</h3>
              <p className="text-text-muted text-sm">
                mahir@thecapitalguru.net
              </p>
            </div>
          </a>

          <a
            href="https://t.me/TheCapitalGuruSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-bg-card p-6 border border-border rounded-xl hover:border-accent-gold/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Send className="w-6 h-6 text-[#0088cc]" />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide">
                Telegram Support
              </h3>
              <p className="text-text-muted text-sm">@TheCapitalGuruSupport</p>
            </div>
          </a>

          <a
            href="https://wa.me/919106713107"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-bg-card p-6 border border-border rounded-xl hover:border-accent-gold/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide">WhatsApp</h3>
              <p className="text-text-muted text-sm">+91 9106713107</p>
            </div>
          </a>

          <a
            href="tel:+919106713107"
            className="flex items-center gap-4 bg-bg-card p-6 border border-border rounded-xl hover:border-accent-gold/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide">
                Phone Inquiry
              </h3>
              <p className="text-text-muted text-sm">+91 9106713107</p>
            </div>
          </a>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bebas text-white tracking-widest border-b border-border pb-4 mb-6">
            Send a Quick Message
          </h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
