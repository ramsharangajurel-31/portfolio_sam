import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samarpan Tamang | Full-Stack Developer",
  description:
    "Professional full-stack developer portfolio of Samarpan Tamang. Building modern web applications, dashboards, APIs, authentication systems, and database-backed products.",
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