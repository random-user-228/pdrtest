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
      <head><title>Тести ПДР</title></head>
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
