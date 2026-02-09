import { ReactNode } from 'react';
import { SiteNav } from './SiteNav';
import { Footer } from './Footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
