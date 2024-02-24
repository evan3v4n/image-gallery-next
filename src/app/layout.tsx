import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "NextJS Image Gallery",
  description: "Image Gallery with the Pexels API with a focus on speeding up render time",
};

export default function RootLayout({children,}: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
