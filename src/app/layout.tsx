import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

// every hour reloads main page and will show new images
export const revalidate = 3600

export const metadata: Metadata = {
  title: "NextJS Image Gallery",
  description: "Image Gallery with the Pexels API with a focus on speeding up render time",
};

export default function RootLayout({children}: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
