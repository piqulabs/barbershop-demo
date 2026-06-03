import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piqu Barbershop",
  description:
    "Premium barbershop for men who value precision, discretion, and craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground pb-[env(safe-area-inset-bottom)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
