import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/provider/ThemeContext';


export const metadata: Metadata = {
  title: 'Explore Countries',
  description: 'Learn more about your favorite countries'
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ThemeProvider>
      <body
      >
      {children}
      </body>
    </ThemeProvider>
    </html>
  );
}
