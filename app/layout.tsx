import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import {auth} from '@/auth'
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Тести ПДР",
  description: "Безкоштовна підготовка до іспиту водія",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>Тести ПДР</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

{/* Apple Touch Icon */}
<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

{/* iOS-специфічні мета-теги */}
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Моя PWA" />

{/* Тема додатку */}
<meta name="theme-color" content="#000000" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="apple-touch-startup-image" href="/splashscreens/splash-640x1136.png" media="(device-width: 320px)" />
  <link rel="apple-touch-startup-image" href="/splashscreens/splash-750x1334.png" media="(device-width: 375px)" />
  <link rel="apple-touch-startup-image" href="/splashscreens/splash-828x1792.png" media="(device-width: 414px)" />
  <link rel="apple-touch-startup-image" href="/splashscreens/splash-1125x2436.png" media="(device-width: 375px) and (-webkit-device-pixel-ratio: 3)"/>
  <meta name="apple-mobile-web-app-capable" content="yes" />

</head>
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
