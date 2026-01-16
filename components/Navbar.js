'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900 border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center shadow-brutal overflow-hidden relative"
            >
              <Image 
                src="/images/Logo.png" 
                alt="BarbarianX Logo" 
                fill
                className="object-contain p-1"
                priority
              />
            </motion.div>
            <div>
              <h1 className="text-lg md:text-2xl font-black tracking-tight leading-none">
                BarbarianX
                <span className="text-neon-cyan"> DAO</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Alpha Hunter</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-neon-cyan transition-colors font-bold uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/alpha-callers"
              className="text-white hover:text-neon-pink transition-colors font-bold tracking-wide"
            >
              BarbarianX Staff
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 border-2 border-white hover:bg-white hover:text-dark-950 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900 border-t-4 border-white overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-neon-cyan font-black uppercase py-4 border-b-2 border-white/10"
              >
                Home
              </Link>
              <Link
                href="/alpha-callers"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-neon-pink font-black py-4 border-b-2 border-white/10"
              >
                BarbarianX Staff
              </Link>
              <div className="flex flex-col space-y-4">
                <Link
                  href="https://t.me/AirdropBarbarianX"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-neon-cyan font-black py-4 border-b-2 border-white/10"
                >
                  Telegram
                </Link>
                <Link
                  href="https://x.com/Team_BarbarianX"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-neon-cyan font-black py-4 border-b-2 border-white/10"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}