import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: "Anaisa Te Guía | Guía Espiritual y Consejera",
  description: "Anaisa no predice tu futuro, te ayuda a crearlo. Consultas espirituales, lecturas ancestrales y guía personalizada para tu camino.",
  keywords: "guía espiritual, tarot, lecturas espirituales, consultas espirituales, energía, protección, caminos abiertos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
