import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Airdrop BarbarianX - Your Gateway to Crypto Airdrops',
  description: 'Airdrop BarbarianX is a platform for crypto airdrops.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-dark-950 text-white antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}