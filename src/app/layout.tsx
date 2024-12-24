import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DH.D - Digital Health Design",
  description:
    "We provide products and services with compliance, accessibility and equity in mind from the start -- helping you help others",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white text-blue-600 p-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
