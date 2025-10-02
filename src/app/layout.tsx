import { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    { path: "../assets/fonts/poppins-100.ttf", weight: "100", style: "normal" },
    { path: "../assets/fonts/poppins-200.ttf", weight: "200", style: "normal" },
    { path: "../assets/fonts/poppins-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/poppins-500.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/poppins-600.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/poppins-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nord Dev",
  icons: "/favicon/favicon.ico",
  description:
    "Desenvolvimento web inovador para impulsionar o seu sucesso online. Conecte-se, inspire-se, evolua - somos a sua parceira no mundo digita",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
