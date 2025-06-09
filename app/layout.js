import './home.css'; // Import your global CSS file
import { Inter } from 'next/font/google'; // Example for font loading

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dark Background Website',
  description: 'A website with a dark background for music lovers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}