'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-5 w-24 h-24 md:w-32 md:h-32 border-4 border-neon-cyan rounded-full opacity-20"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6 md:mb-8"
          >
            <span className="relative inline-block font-black uppercase tracking-widest text-sm md:text-base">
              <span className="text-neon-cyan">Free</span> Alpha
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-neon-pink"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1.5 }}
              />
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-[0.9] md:leading-none break-words uppercase"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            BarbarianX
            <br />
            <span className="relative inline-block">
              <span className="text-neon-cyan">DAO</span>
              <motion.div
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-3 bg-neon-pink"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-bold uppercase px-4">
            All I need is <span className="text-white font-black">'You Are Eligible'</span>!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">

            <a href="#airdrop-list" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ x: 4, y: 4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 md:px-10 md:py-5 bg-neon-cyan text-dark-950 font-black text-base md:text-lg uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all"
              >
                Explore Airdrops →
              </motion.button>
            </a>
            
            <a 
              href="https://t.me/AirdropBarbarianX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ x: 4, y: 4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-dark-900 text-white font-black text-base md:text-lg uppercase border-4 border-white shadow-brutal-pink hover:shadow-none transition-all"
              >
                Join Community
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}