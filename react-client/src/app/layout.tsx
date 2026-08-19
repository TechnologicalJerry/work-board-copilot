import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
  title: 'BoardPilot AI — Polyglot Agile Management Platform',
  description: 'Enterprise agile project management platform reference architecture showcasing Express, NestJS, and Fastify backends with React frontend.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
