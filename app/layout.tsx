import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "./output.css";

const robotoCond = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${robotoCond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
