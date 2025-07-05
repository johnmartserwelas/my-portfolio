import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://my-portfolio-nine-omega-66.vercel.app'),
  title: "John Mart - Full Stack Developer Portfolio",
  description: "Full Stack Developer Portfolio showcasing web development projects and skills in React, Next.js, TypeScript, and more.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "TypeScript", "Portfolio", "John Mart"],
  authors: [{ name: "John Mart" }],
  creator: "John Mart",
  publisher: "John Mart",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-nine-omega-66.vercel.app",
    siteName: "John Mart Portfolio",
    title: "John Mart - Full Stack Developer Portfolio",
    description: "Full Stack Developer Portfolio showcasing web development projects and skills in React, Next.js, TypeScript, and more.",
    images: [
      {
        url: "https://my-portfolio-nine-omega-66.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Mart - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mart - Full Stack Developer Portfolio",
    description: "Full Stack Developer Portfolio showcasing web development projects and skills in React, Next.js, TypeScript, and more.",
    images: ["https://my-portfolio-nine-omega-66.vercel.app/og-image.png"],
    creator: "@johnmartserwelas",
  },
  other: {
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/og-image.png" />
        <meta name="author" content="John Mart" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="John Mart - Full Stack Developer Portfolio" />
        
        {/* Additional meta tags for better compatibility */}
        <meta property="og:image" content="https://my-portfolio-nine-omega-66.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://my-portfolio-nine-omega-66.vercel.app/og-image.png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
