import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script"; // <-- import Script
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishabh Shah | Portfolio",
  description:
    "A sleek, professional portfolio website with a modern corporate aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R7FYD61MJ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R7FYD61MJ3');
          `}
        </Script>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
