import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolution des prix des actions",
  description: "Evolution des prix des actions Amazon et Google sur 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
