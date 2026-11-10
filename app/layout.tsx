import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayoeze Creatives — Digital Experiences That Move Business Forward",
  description:
    "Ayoeze Creatives builds thoughtful websites, eCommerce experiences, intelligent automations and distinctive brand identities.",
  metadataBase: new URL("https://ayoeze-creatives.vercel.app"),
  openGraph: {
    title: "Ayoeze Creatives",
    description: "Web experiences. Intelligent automation. Powerful brands.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}