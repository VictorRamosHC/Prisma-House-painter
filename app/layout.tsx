import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Prisma House Painter — Acabamento que transforma", description: "Pintura residencial e comercial com precisão, cuidado e acabamento profissional." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><body>{children}</body></html>; }
