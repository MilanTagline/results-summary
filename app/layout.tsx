import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import clsx from "clsx";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Results Summary",
  description:
    "View a comprehensive summary of your results, including reaction, memory, verbal and visual scores.",
  icons: {
    icon: {
      url: "/images/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  },
  openGraph: {
    type: "website",
    title: "Results Summary",
    description:
      "View a comprehensive summary of your results, including reaction, memory, verbal and visual scores.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Results Summary",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(hankenGrotesk.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
