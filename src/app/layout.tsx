import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./_providers/providers";
import RootLayoutComponent from "./_components/RootLayoutComponent";

export const metadata: Metadata = {
  title: "날씨의 속삭임",
  description: "-",
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <RootLayoutComponent>
        <Providers>
          {children}
        </Providers>
      </RootLayoutComponent>
      </body>
    </html>
  );
}
