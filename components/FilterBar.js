'use client';
import { motion } from 'framer-motion';
import { Search, Filter, Clock } from 'lucide-react';

export default function FilterBar({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  phases,
  selectedPhase,
  onPhaseChange,
  searchTerm, 
  onSearchChange 
}) {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
        <input
          type="text"
          placeholder="SEARCH AIRDROPS..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-14 pr-4 py-5 bg-dark-900 border-4 border-white text-white placeholder-gray-500 font-bold uppercase focus:outline-none focus:border-neon-cyan transition-colors"
        />
      </div>

      {/* Network Filter */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Filter size={24} className="text-neon-cyan" />
          <span className="text-lg font-black uppercase tracking-wide">Network Status</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                x: selectedCategory === cat ? 0 : 4,
                y: selectedCategory === cat ? 0 : 4,
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-black uppercase border-4 transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-cyan text-dark-950 border-white shadow-none translate-x-1.5 translate-y-1.5'
                  : 'bg-dark-900 text-white border-white shadow-brutal hover:shadow-none'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Phase Filter */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Clock size={24} className="text-neon-pink" />
          <span className="text-lg font-black uppercase tracking-wide">Phase</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {phases.map((phase, index) => (
            <motion.button
              key={phase}
              onClick={() => onPhaseChange(phase)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ 
                x: selectedPhase === phase ? 0 : 4,
                y: selectedPhase === phase ? 0 : 4,
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-black uppercase border-4 transition-all ${
                selectedPhase === phase
                  ? 'bg-neon-pink text-dark-950 border-white shadow-none translate-x-1.5 translate-y-1.5'
                  : 'bg-dark-900 text-white border-white shadow-brutal-pink hover:shadow-none'
              }`}
            >
              {phase}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}