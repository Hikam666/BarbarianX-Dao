'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import AirdropCard from '../components/AirdropCard';
import { airdrops } from '../lib/data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPhase, setSelectedPhase] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['ALL', 'TESTNET', 'MAINNET', 'RETRO', 'NODE', 'LAINNYA'];
  const phases = ['ALL', 'EARLY', 'MID', 'SNAPSHOT'];

  const filteredAirdrops = airdrops.filter(airdrop => {
    const matchesCategory = selectedCategory === 'ALL' || airdrop.network === selectedCategory;
    const matchesPhase = selectedPhase === 'ALL' || airdrop.phase === selectedPhase;
    const matchesSearch = airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         airdrop.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPhase && matchesSearch;
  });

  return (
    <>
      <Hero />

      {/* ID "airdrop-list" diletakkan pada tag <section> di bawah ini.
          "scroll-mt-24" ditambahkan agar saat bergulir, bagian atas daftar tidak tertutup Navbar.
      */}
      <section id="airdrop-list" className="py-8 md:py-12 px-4 relative overflow-hidden scroll-mt-24">
        {/* Doodle Background Elements */}
        <div className="hidden md:block">
          <motion.div
            animate={{ y: [0, 50, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-neon-pink/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            phases={phases}
            selectedPhase={selectedPhase}
            onPhaseChange={setSelectedPhase}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Results Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 mb-6"
          >
            <div className="inline-block px-4 py-2 bg-neon-cyan text-dark-950 font-black border-2 border-white text-xs md:text-sm uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              FOUND: {filteredAirdrops.length} AIRDROPS
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredAirdrops.map((airdrop, index) => (
              <AirdropCard key={airdrop.id} airdrop={airdrop} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredAirdrops.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl md:text-3xl font-black mb-4 uppercase">No Airdrops Found</p>
              <p className="text-gray-400 font-bold uppercase text-sm">Try different filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Staff CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            whileHover={{ x: 4, y: 4 }}
            className="bg-dark-900 border-4 border-white shadow-brutal-lg hover:shadow-none transition-all p-8 md:p-12 text-center"
          >
            <Users className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-neon-cyan" />
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">
              Meet The
              <span className="text-neon-cyan"> Barbarian</span>
              <span className="text-neon-pink"> Staff</span>
            </h2>
            <p className="text-base md:text-xl font-bold text-gray-400 mb-8 max-w-2xl mx-auto uppercase">
              The experts behind the findings.
            </p>
            <a href="/alpha-callers" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ x: 4, y: 4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-neon-cyan text-dark-950 font-black text-base md:text-lg uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all inline-flex items-center justify-center gap-3"
              >
                View Staff
                <ArrowRight size={20} />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan to-neon-pink p-1 border-4 border-white shadow-brutal-lg">
            <div className="bg-dark-900 p-6 md:p-10 text-center">
              <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase">Never Miss An Alert</h3>
              <p className="text-sm md:text-lg font-bold text-gray-300 mb-8 uppercase">
                Join our private communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://t.me/AirdropBarbarianX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ x: 3, y: 3 }}
                    className="w-full px-8 py-4 bg-neon-cyan text-dark-950 font-black uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all text-sm"
                  >
                    Join Telegram
                  </motion.button>
                </a>
                <a href="https://x.com/Team_BarbarianX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ x: 3, y: 3 }}
                    className="w-full px-8 py-4 bg-dark-900 text-white font-black uppercase border-4 border-white shadow-brutal-pink hover:shadow-none transition-all text-sm"
                  >
                    Follow Twitter
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}