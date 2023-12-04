import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers";
const inter = Inter({ subsets: ["latin"] });
import Toaster from "@/components/Toaster"

export const metadata = {
  title: "Car || Hub",
  description: "The best car in the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}
