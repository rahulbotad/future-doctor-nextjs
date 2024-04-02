import type { Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const viewPort: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div id="smooth-wrapper">{children}</div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
