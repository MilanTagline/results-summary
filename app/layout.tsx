import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Results Summary",
  description:
    "View a comprehensive summary of your results, including reaction, memory, verbal and visual scores.",
  icons: {
    icon: {
      url: "/favicon-32x32.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
