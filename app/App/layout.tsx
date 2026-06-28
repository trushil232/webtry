import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Trushil Raval | Portfolio",
  description: "AI & 3D Interactive Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}