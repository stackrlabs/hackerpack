import Providers from "@/components/auth-provider";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "counter",
  description: "Stackr Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col h-[100vh] w-[100vw]">
            <Navbar />
            <div className="flex-1 ">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
