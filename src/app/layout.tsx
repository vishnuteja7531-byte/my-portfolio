import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Anton } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

export const metadata: Metadata = {
  title: "Chinthala Midhun Reddy | Portfolio",
  description: "Portfolio of Chinthala Midhun Reddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${anton.variable} antialiased scroll-smooth`}
    >
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
