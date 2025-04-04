import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping List",
  description: "A shared shopping list",
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
