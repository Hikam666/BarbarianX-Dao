'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Twitter, 
  MessageCircle, 
  Globe,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertCircle,
  Copy
} from 'lucide-react';
import { airdrops } from '../../../lib/data';

export default function AirdropDetail({ params }) {
  const airdrop = airdrops.find(a => a.id === params.id);
  const [copiedStep, setCopiedStep] = useState(null);

  if (!airdrop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-4 uppercase">Airdrop Not Found</h1>
          <Link href="/" className="text-neon-cyan hover:underline font-bold uppercase">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text, stepIndex) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const bgColors = {
    'from-purple-600 via-navy-500 to-purple-700': 'bg-neon-navy',
    'from-blue-600 via-cyan-500 to-blue-700': 'bg-neon-cyan',
    'from-navy-600 via-red-500 to-navy-700': 'bg-neon-navy',
    'from-indigo-600 via-purple-500 to-indigo-700': 'bg-neon-navy',
    'from-green-600 via-emerald-500 to-green-700': 'bg-neon-green',
    'from-cyan-600 via-navy-500 to-cyan-700': 'bg-neon-cyan',
    'from-cyan-600 via-blue-500 to-indigo-600': 'bg-neon-cyan',
    'from-rose-600 via-navy-500 to-fuchsia-600': 'bg-neon-navy',
  };

  const bgColor = bgColors[airdrop.gradient] || 'bg-neon-cyan';

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 font-bold uppercase mb-8 px-4 py-2 border-2 border-white hover:bg-white hover:text-dark-950 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
        </Link>

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-900 border-4 border-white shadow-brutal-lg mb-8"
        >
          <div className={`${bgColor} p-8 border-b-4 border-white`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-6xl font-black mb-3 text-dark-950">{airdrop.name}</h1>
                <p className="text-xl font-bold text-dark-950/70 mb-4">{airdrop.description}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white text-dark-950 font-black border-2 border-dark-950 uppercase">
                    TIER {airdrop.tier}
                  </span>
                  <span className="px-4 py-2 bg-white text-dark-950 font-black border-2 border-dark-950 uppercase">
                    {airdrop.network}
                  </span>
                  <span className="px-4 py-2 bg-white text-dark-950 font-black border-2 border-dark-950 uppercase">
                    {airdrop.phase}
                  </span>
                  <span className="px-4 py-2 bg-white text-dark-950 font-black border-2 border-dark-950 uppercase">
                    {airdrop.difficulty}
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { href: airdrop.website, icon: Globe },
                  { href: airdrop.twitter, icon: Twitter },
                  { href: airdrop.discord, icon: MessageCircle }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-white text-dark-950 border-2 border-dark-950 flex items-center justify-center hover:bg-dark-950 hover:text-white transition-colors"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, label: 'Estimated Reward', value: airdrop.estimatedReward, color: 'text-neon-cyan' },
              { icon: Clock, label: 'Deadline', value: airdrop.endDate, color: 'text-neon-navy' },
              { icon: AlertCircle, label: 'Difficulty', value: airdrop.difficulty, color: 'text-neon-cyan' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-dark-800 border-2 border-white p-6">
                <div className={`flex items-center gap-3 ${stat.color} mb-2`}>
                  <stat.icon size={24} />
                  <span className="text-sm font-black uppercase">{stat.label}</span>
                </div>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-900 border-4 border-white shadow-brutal p-8"
            >
              <h2 className="text-3xl font-black mb-6 uppercase">📋 Step-by-Step Guide</h2>
              
              <div className="space-y-6">
                {airdrop.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="bg-dark-800 border-2 border-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-neon-cyan text-dark-950 border-2 border-white flex items-center justify-center font-black text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-2 uppercase">{step.title}</h3>
                        <p className="text-gray-400 font-semibold mb-4">{step.description}</p>
                        
                        <div className="flex flex-wrap gap-3">
                          <motion.a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3, y: 3 }}
                            className="px-4 py-2 bg-neon-cyan text-dark-950 font-black text-sm uppercase border-2 border-white shadow-brutal-sm hover:shadow-none transition-all flex items-center gap-2"
                          >
                            Start
                            <ExternalLink size={14} />
                          </motion.a>
                          
                          <motion.button
                            onClick={() => copyToClipboard(step.link, index)}
                            whileHover={{ x: 3, y: 3 }}
                            className="px-4 py-2 bg-dark-900 text-white font-black text-sm uppercase border-2 border-white shadow-brutal-sm hover:shadow-none transition-all flex items-center gap-2"
                          >
                            {copiedStep === index ? (
                              <>
                                <CheckCircle2 size={14} className="text-neon-green" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                Copy
                              </>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-900 border-4 border-white shadow-brutal p-8"
            >
              <h2 className="text-3xl font-black mb-4 uppercase">About {airdrop.name}</h2>
              <p className="text-gray-300 font-semibold leading-relaxed">{airdrop.longDescription}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-900 border-4 border-white shadow-brutal p-6 sticky top-24"
            >
              <h3 className="text-2xl font-black mb-4 uppercase">✅ Requirements</h3>
              <ul className="space-y-3 mb-8">
                {airdrop.requirements.map((req, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-semibold">{req}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mb-8 p-4 bg-dark-800 border-2 border-white">
                <h4 className="font-black mb-3 uppercase text-neon-cyan">⚠️ Important Notes</h4>
                <div className="space-y-2 text-sm text-gray-400 font-semibold">
                  <p>• Verify official links</p>
                  <p>• Never share private keys</p>
                  <p>• DYOR - Do Your Own Research</p>
                  <p>• Rewards are estimates</p>
                </div>
              </div>

              <motion.button
                whileHover={{ x: 6, y: 6 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-5 bg-neon-cyan text-dark-950 font-black uppercase border-4 border-white shadow-brutal hover:shadow-none transition-all"
              >
                Start Hunt 🎯
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}