import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barbershop SaaS',
  description:
    'Premium SaaS platform for barbershops and beauty salons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
