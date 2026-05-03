import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Body Keeper — Chain of Custody',
  description: 'Morgue body tracking and chain of custody management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <Sidebar />
        <main className="md:ml-[280px] min-h-screen p-4 sm:p-6 lg:p-8 pt-20 md:pt-8 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
