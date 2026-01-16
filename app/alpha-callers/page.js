'use client';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp } from 'lucide-react';
import AlphaCard from '../../components/AlphaCard';
import { alphaCallers } from '../../lib/data';

export default function AlphaCallers() {
  return (
    <div className="pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Doodle Background */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-40 h-40 border-4 border-neon-cyan/10 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-40 right-20 w-32 h-32 border-4 border-neon-pink/10"
        style={{ transform: 'rotate(45deg)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-neon-cyan border-4 border-white shadow-brutal flex items-center justify-center">
              <Users className="w-14 h-14 text-dark-950" />
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none">
            BarbarianX
            <br />
            <span className="text-neon-cyan">STAF</span>
          </h1>
          
          <p className="text-xl font-bold text-gray-400 max-w-2xl mx-auto mb-12 uppercase">
            Manusia Gabut yang ingin kaya
          </p>

          {/* Stats */}
          <div className="flex flex-col items-center text-center grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, value: alphaCallers.length, label: 'Alpha Callers', color: 'bg-neon-cyan' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 6, y: 6 }}
                className="bg-dark-900 border-4 border-white shadow-brutal hover:shadow-none transition-all p-6"
              >
                <div className={`w-12 h-12 ${stat.color} border-2 border-white flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="text-dark-950" size={24} />
                </div>
                <p className="text-4xl font-black mb-1">{stat.value}</p>
                <p className="text-sm font-black uppercase text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alpha Callers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alphaCallers.map((caller, index) => (
            <AlphaCard key={caller.id} caller={caller} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ x: 8, y: 8 }}
          className="bg-dark-900 border-4 border-white shadow-brutal-lg hover:shadow-none transition-all p-12 text-center relative overflow-hidden"
        >
          {/* Doodle decoration */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-12 -right-12 w-32 h-32 border-4 border-neon-pink/20 rounded-full"
          />

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4 uppercase">Want To Be A Staff?</h2>
            <p className="text-lg font-bold text-gray-400 mb-8 max-w-2xl mx-auto uppercase">
              Share your findings and become a featured !
            </p>
            <a 
              href="https://t.me/Rahvanaaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ x: 6, y: 6 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-neon-cyan text-dark-950 font-black text-lg uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all"
              >
                Apply Now
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}