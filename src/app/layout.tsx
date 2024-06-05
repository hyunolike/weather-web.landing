import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./_providers/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en" className='dark'>
        <body>
          <div>
            루트 레이아웃 (index)
          </div>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
