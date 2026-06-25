import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Aliakbar Abbasov | Stomatoloq-Ortoped | Diş Həkimi Bakı",
  description: "Dr. Aliakbar Abbasov stomatoloji klinikasında yüksək keyfiyyətli ortopedik və estetik diş müalicəsi xidmətləri: Vinirlər, İmplantasiya, Gülüş dizaynı və Diş bərpası.",
  keywords: ["stomatoloq", "ortoped", "diş həkimi", "vinir", "implant", "gülüş dizaynı", "Dr. Aliakbar Abbasov", "Bakı stomatoloq"],
  authors: [{ name: "Dr. Aliakbar Abbasov" }],
  openGraph: {
    title: "Dr. Aliakbar Abbasov | Stomatoloq-Ortoped | Diş Həkimi Bakı",
    description: "Müasir texnologiya və peşəkar stomatoloji xidmətlərlə sağlam və mükəmməl gülüşlər dizayn edirik.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

