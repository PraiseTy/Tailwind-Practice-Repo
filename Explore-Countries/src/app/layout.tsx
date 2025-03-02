import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/provider/ThemeContext';
import React from 'react';
import { Navbar } from '@/components';


export const metadata: Metadata = {
  title: 'Explore Countries',
  description: 'Learn more about your favorite countries'
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
    <ThemeProvider>
      <body>
      <Navbar />
      {children}
      </body>
    </ThemeProvider>
    </html>
  );
};
export default Layout;
