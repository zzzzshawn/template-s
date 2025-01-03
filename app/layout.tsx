import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import Dock from "@/components/dock";

const modernBold = localFont({
  src: "./fonts/modern-bold.otf",
  variable: "--font-modern-bold",
  weight: "900",
});
const modernMono = localFont({
  src: "./fonts/modern-mono.otf",
  variable: "--font-modern-mono",
  weight: "900",
});
const modernReg = localFont({
  src: "./fonts/modern-reg.otf",
  variable: "--font-modern-reg",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${modernBold.variable} ${modernMono.variable} ${modernReg.variable} antialiased bg-black`}
      >
        <main className="min-h-screen relative w-full">
          <div className="pointer-events-none absolute inset-0 w-full mx-auto -z-10">
            <Image
              src="/assets/gradient.svg"
              alt=""
              height={200}
              width={200}
              className="object-cover size-full -z-10"
              priority
            />
          </div>
          <div className=" absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-black/100 via-black/50 to-black/0 -z-10"></div>
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/100 via-black/50 to-black/0 -z-10"></div>
          {children}
          <Dock />
        </main>
      </body>
    </html>
  );
}
