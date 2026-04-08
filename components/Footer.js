import { Send, Twitter, User } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-dark-950 border-t-4 border-white">
      <div className="w-full bg-yellow-400 border-b-4 border-white py-2 overflow-hidden">
        <marquee className="text-black text-xs font-black uppercase tracking-widest">
          DYOR (DO YOUR OWN RESEARCH) • NFA (NOT FINANCIAL ADVICE) • High Risk, High Return • Stay Safe & Secure • Happy Airdropping! •
        </marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">

          <div className="max-w-xs">
            <h2 className="text-3xl font-black text-neon-cyan tracking-tighter mb-4">
              BarbarianX DAO
            </h2>
            <p className="text-gray-400 font-bold leading-tight uppercase text-sm">
               Komunitas belajar bareng & diskusi <br />
               seputar airdrop crypto.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://t.me/AirdropBarbarianX" target="_blank" rel="noopener noreferrer" className="w-20 h-16 border-4 border-white flex items-center justify-center hover:bg-neon-cyan hover:text-dark-950 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              <Send size={28} />
            </a>
            <a href="https://x.com/Team_BarbarianX" target="_blank" rel="noopener noreferrer" className="w-20 h-16 border-4 border-white flex items-center justify-center hover:bg-neon-pink hover:text-dark-950 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              <Twitter size={28} />
            </a>
            <a href="#" className="w-20 h-16 border-4 border-white flex items-center justify-center hover:bg-neon-yellow hover:text-dark-950 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              <User size={28} />
            </a>
          </div>

          <div className="max-w-xs md:flex md:flex-col md:items-end">
            <div className="border-4 border-white shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] bg-dark-900 mb-4 inline-block">
              <div className="relative w-40 p-2">
                <Image 
                  src="/images/Logo.png" 
                  alt="BarbarianX Logo" 
                  width={256} 
                  height={128}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-white mb-8"></div>
        <div className="text-center">
          <p className="text-gray-500 font-mono text-xs tracking-widest">
            © 2026 BarbarianX DAO. Built by Rahvana, for Community.
          </p>
        </div>
      </div>
    </footer>
  );
}