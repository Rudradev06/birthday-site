import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday! 🎉",
  description: "A magical birthday surprise made just for you",
  keywords: ["birthday", "celebration", "surprise", "gift"],
  authors: [{ name: "Rudra Daadaaaa" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${dancing.variable} antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-cream-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
