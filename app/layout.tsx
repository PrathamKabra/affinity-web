import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affinity Diagnostics",
  description: "Clinical Sonography Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Removed manual color classes if you want to rely on globals.css 
         OR keep 'bg-gray-50 text-gray-900' and remove the :root vars in CSS.
         Current state: The utilities below override globals.css.
      */}
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
