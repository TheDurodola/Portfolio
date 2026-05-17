import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durodola Abolaji Toliat - Software Engineer",
  description: "Software Engineer specializing in backend developement and distributed systems",
  authors: [{ name: 'Durodola Abolaji Toliat' }],
  keywords: [ 'Software Engineer', 'Backend Developer', 'Distributed Systems', 'Java',
     'Golang', 'Microservices', 'Monolith', 'Cloud Computing', 'AWS', 'Docker' ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}