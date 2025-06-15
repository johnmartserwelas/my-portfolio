import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://john-mart-portfolio.vercel.app'),
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
    url: "https://john-mart-portfolio.vercel.app",
    siteName: "John Mart Portfolio",
    title: "John Mart - Full Stack Developer Portfolio",
    description: "Full Stack Developer Portfolio showcasing web development projects and skills in React, Next.js, TypeScript, and more.",
    images: [
      {
        url: "/pic.png",
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
    images: ["/pic.png"],
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
        <link rel="icon" href="/pic.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
