import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Биржа им. Романа Абрамовича",
  description: "Работа на диплом",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
