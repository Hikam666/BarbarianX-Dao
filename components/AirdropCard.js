'use client';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

export default function AirdropCard({ airdrop, index }) {
  const gradients = {
    'from-blue-600 via-cyan-500 to-blue-700': 'bg-neon-cyan',
    'from-cyan-600 via-blue-500 to-indigo-600': 'bg-neon-cyan',
    'from-cyan-600 via-pink-500 to-cyan-700': 'bg-neon-cyan',
    'from-pink-600 via-emerald-500 to-pink-700': 'bg-neon-cyan',
    'from-purple-600 via-pink-500 to-purple-700': 'bg-neon-pink',
    'from-pink-600 via-red-500 to-pink-700': 'bg-neon-pink',
    'from-indigo-600 via-purple-500 to-indigo-700': 'bg-neon-pink',
    'from-rose-600 via-pink-500 to-fuchsia-600': 'bg-neon-pink',
    'from-orange-600 via-red-500 to-orange-700': 'bg-neon-pink',
  };

  const bgColor = gradients[airdrop.gradient] || 'bg-neon-cyan';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        x: 6, 
        y: 6,
      }}
      className="group"
    >
      {/* Menggunakan tag a untuk navigasi internal agar kompatibel dengan pratinjau */}
      <a href={`/airdrop/${airdrop.id}`}>
        <div className="bg-dark-900 border-4 border-white shadow-brutal hover:shadow-none transition-all duration-200 overflow-hidden h-full">
          {/* Header */}
          <div className={`${bgColor} p-5 md:p-6 border-b-4 border-white relative overflow-hidden`}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 border-4 border-white/30 rounded-full"
            />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="max-w-[80%]">
                  <h3 className="text-2xl md:text-4xl font-black mb-1 text-dark-950 truncate uppercase leading-tight">
                    {airdrop.name}
                  </h3>
                  <p className="text-[10px] md:text-sm font-bold text-dark-950/70 uppercase tracking-tighter">
                    {airdrop.category}
                  </p>
                </div>
                <span className="px-2 py-1 bg-white text-dark-950 font-black text-[10px] uppercase border-2 border-dark-950 shrink-0">
                  TIER {airdrop.tier}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {[airdrop.network, airdrop.phase, airdrop.difficulty].map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-white text-dark-950 font-bold text-[9px] md:text-xs uppercase border-2 border-dark-950">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 space-y-4">
            <p className="text-gray-300 font-semibold line-clamp-2 text-sm md:text-base">
              {airdrop.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-800 border-2 border-white p-2 md:p-3">
                <div className="flex items-center gap-1.5 text-neon-cyan mb-1">
                  <TrendingUp size={14} />
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-tighter">Reward</span>
                </div>
                <p className="text-xs md:text-sm font-black truncate">{airdrop.estimatedReward}</p>
              </div>
              <div className="bg-dark-800 border-2 border-white p-2 md:p-3">
                <div className="flex items-center gap-1.5 text-neon-pink mb-1">
                  <Clock size={14} />
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-tighter">Deadline</span>
                </div>
                <p className="text-xs md:text-sm font-black truncate">{airdrop.endDate}</p>
              </div>
            </div>

            {/* Quick Steps */}
            <div className="space-y-2">
              <h4 className="text-[10px] md:text-sm font-black uppercase text-gray-500">Quick Steps:</h4>
              {airdrop.steps.slice(0, 2).map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-neon-cyan text-sm md:text-lg mt-0.5">→</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-400 line-clamp-1 italic">{step.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="w-full py-3 md:py-4 bg-neon-cyan text-dark-950 font-black uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all flex items-center justify-center gap-2 text-sm md:text-base">
              View Guide
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}