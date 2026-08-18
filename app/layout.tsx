import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteShell from "@/components/layout/SiteShell";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/assets/img/logo/logo-orange.png",
  },
};

const templateStyles = [
  "/fonts/inter.css",
  "/assets/css/bootstrap.css",
  "/assets/css/animate.css",
  "/assets/css/custom-animation.css",
  "/assets/css/swiper-bundle.css",
  "/assets/css/nice-select.css",
  "/assets/css/magnific-popup.css",
  "/assets/css/font-awesome-pro.css",
  "/assets/css/spacing.css",
  "/assets/css/main.css",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="no-js pixora-dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {templateStyles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
