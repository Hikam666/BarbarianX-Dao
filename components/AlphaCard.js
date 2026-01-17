'use client';
import { motion } from 'framer-motion';
import { Twitter, Send, CheckCircle2, Award, Zap } from 'lucide-react';

export default function AlphaCard({ caller, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 6, y: 6 }}
      className="bg-dark-900 border-4 border-white shadow-brutal hover:shadow-none transition-all duration-200 p-5 md:p-6 relative overflow-hidden h-full flex flex-col"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-3 md:gap-4 mb-4">
          <div className="relative shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 md:w-20 md:h-20 border-4 border-white bg-gradient-to-br from-neon-cyan to-neon-pink flex items-center justify-center text-3xl md:text-4xl"
            >
              <img 
                src={caller.avatar} 
                alt={caller.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {caller.verified && (
              <div className="absolute -top-1 -right-1 bg-neon-cyan border-2 border-white p-0.5">
                <CheckCircle2 size={12} className="text-dark-950" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-black mb-0.5 uppercase truncate">{caller.name}</h3>
            <p className="text-[10px] md:text-sm text-neon-pink font-bold uppercase mb-2 truncate">{caller.role}</p>
            
            <div className="flex flex-wrap gap-1.5">
              <span className="px-1.5 py-0.5 bg-neon-cyan text-dark-950 border-2 border-white text-[9px] md:text-xs font-black uppercase">
                {caller.class}
              </span>
              <span className="px-1.5 py-0.5 bg-dark-800 border-2 border-white text-[9px] md:text-xs font-black uppercase">
                LVL {caller.xpLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
          <div className="bg-dark-800 border-2 border-white p-2 md:p-3">
            <div className="flex items-center gap-1 text-neon-cyan mb-1">
              <Award size={12} />
              <span className="text-[9px] md:text-xs font-black uppercase">Skill</span>
            </div>
            <p className="text-[10px] md:text-sm font-black truncate">{caller.mainSkill}</p>
          </div>
          <div className="bg-dark-800 border-2 border-white p-2 md:p-3">
            <div className="flex items-center gap-1 text-neon-pink mb-1">
              <Zap size={12} />
              <span className="text-[9px] md:text-xs font-black uppercase">Weakness</span>
            </div>
            <p className="text-[10px] md:text-sm font-black truncate">{caller.weakness}</p>
          </div>
        </div>

        <p className="text-xs md:text-sm font-semibold text-gray-400 mb-4 line-clamp-3 italic">
          "{caller.bio}"
        </p>

        <div className="bg-dark-800 border-2 border-white p-3 md:p-4 mb-4 space-y-2 mt-auto">
          {[
            { label: 'Airdrops Found', val: caller.stats.airdropsFound, color: 'text-neon-cyan' },
            { label: 'Success Rate', val: caller.stats.successRate, color: 'text-neon-pink' },
          ].map((s, i) => (
            <div key={i} className="flex justify-between text-[10px] md:text-sm">
              <span className="font-bold uppercase text-gray-500">{s.label}</span>
              <span className={`font-black ${s.color}`}>{s.val}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <motion.a
            href={caller.socialLinks.twitter}
            target="_blank"
            whileHover={{ x: 2, y: 2 }}
            className="py-2.5 bg-dark-800 border-2 border-white hover:border-neon-cyan transition-colors flex items-center justify-center gap-2 font-black uppercase text-[10px] md:text-xs"
          >
            <Twitter size={14} className="text-neon-cyan" />
            Follow
          </motion.a>
          <motion.a
            href={caller.socialLinks.telegram}
            target="_blank"
            whileHover={{ x: 2, y: 2 }}
            className="py-2.5 bg-neon-cyan text-dark-950 border-2 border-white flex items-center justify-center gap-2 font-black uppercase text-[10px] md:text-xs"
          >
            <Send size={14} />
            Message
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}