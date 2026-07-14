import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { Cursor } from "@/components/layout/cursor";
import { Toaster } from "@/components/ui/sonner";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Estudio Creativo de Marketing Digital`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "agencia de marketing digital",
    "marketing digital",
    "redes sociales",
    "publicidad digital",
    "diseño gráfico",
    "desarrollo web",
    "ViccaLab",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Estudio Creativo de Marketing Digital`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/brand/viccalab-brandguide.png", width: 1080, height: 1920 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Estudio Creativo de Marketing Digital`,
    description: SITE_DESCRIPTION,
    images: ["/brand/viccalab-brandguide.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/viccalab-logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: ["https://instagram.com/vicca.lab"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
