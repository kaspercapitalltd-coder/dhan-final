import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CouponModal from "@/components/CouponModal";
import ScrollProgress from "@/components/ScrollProgress";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Capital Guru — India's #1 F&O Signal Platform",
  description:
    "Join 2,000+ traders getting high-accuracy NSE & BSE Futures & Options signals. Daily intraday & positional calls. Instant Telegram access. Join from ₹3,299/month.",
  openGraph: {
    title: "The Capital Guru — Trade Smarter. Profit Bigger.",
    description:
      "India's most accurate F&O signal platform for NSE & BSE traders.",
    url: "https://thecapitalguru.net",
    images: [{ url: "https://i.ibb.co/DgsH7TsJ/OG-IMAGE.png" }],
  },
  icons: {
    icon: [
      {
        url: "https://i.ibb.co/zhp8dWP3/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://i.ibb.co/sv9gScLH/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "https://i.ibb.co/ym2PkPHV/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="bg-bg-primary text-text-primary font-dm-sans antialiased flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
        <FloatingButtons />
        <CouponModal />
      </body>
    </html>
  );
}
