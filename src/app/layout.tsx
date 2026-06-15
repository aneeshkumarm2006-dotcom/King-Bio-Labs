import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { CartButton } from "@/components/cart/CartButton";
import { AgeGate } from "@/components/AgeGate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingbiolabs.com"),
  title: {
    template: "%s — King Bio Labs",
    default: "King Bio Labs — Verified Purity. No Exceptions.",
  },
  description:
    "Research-grade compounds from certified synthesis facilities. Third-party tested. Full COA on every batch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <AgeGate />
          {/*
            Temporary host for the cart trigger until the Navbar (Phase 1)
            exists. When the Navbar is built, render <CartButton /> inside it
            and remove this fixed wrapper.
          */}
          <div className="fixed right-4 top-4 z-40">
            <CartButton className="bg-white shadow-md ring-1 ring-brand-border" />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
