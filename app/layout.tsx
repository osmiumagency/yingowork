import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yingo | El nuevo Tinder del talento",
  description:
    "Yingo es un AI-Powered Talent Hub que conecta empresas y personas con la oportunidad correcta. Sin fricciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="text-black scroll-smooth">
      <script src="//code.jivosite.com/widget/CcnSBceaFU" async></script>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
