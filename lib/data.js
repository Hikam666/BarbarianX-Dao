export const airdrops = [
  {
    id: 'monad',
    name: 'SAMPLE DATA',
    category: 'LAYER2',
    network: 'TESTNET',
    phase: 'EARLY',
    tier: 'S',
    status: 'TESTNET',
    difficulty: 'EASY',
    description: 'High-performance EVM-compatible Layer 1 blockchain with parallel execution',
    longDescription: 'Monad is a high-performance Layer 1 blockchain that brings massive scalability to Ethereum applications. With 10,000+ TPS and full EVM compatibility, Monad enables developers to build without compromise.',
    gradient: 'from-purple-600 via-pink-500 to-purple-700',
    requirements: ['Metamask or compatible wallet', 'Testnet ETH', 'Discord account'],
    steps: [
      {
        title: 'Add Monad Testnet',
        description: 'Add the Monad testnet RPC to your wallet',
        link: 'https://monad.xyz/network'
      },
      {
        title: 'Get Testnet Tokens',
        description: 'Request testnet tokens from the faucet',
        link: 'https://faucet.monad.xyz'
      },
      {
        title: 'Bridge Assets',
        description: 'Bridge some testnet ETH to Monad',
        link: 'https://bridge.monad.xyz'
      },
      {
        title: 'Interact with dApps',
        description: 'Use DEXs, NFT marketplaces, and other protocols',
        link: 'https://ecosystem.monad.xyz'
      },
      {
        title: 'Complete Quests',
        description: 'Join Discord and complete community quests',
        link: 'https://discord.gg/monad'
      }
    ],
    estimatedReward: '$500 - $2,000',
    endDate: 'TBA',
    website: 'https://monad.xyz',
    twitter: 'https://twitter.com/monad_xyz',
    discord: 'https://discord.gg/monad'
  },
  {
    id: 'zksync',
    name: 'SAMPLE DATA',
    category: 'LAYER2',
    network: 'MAINNET',
    phase: 'MID',
    tier: 'S',
    status: 'MAINNET',
    difficulty: 'MEDIUM',
    description: 'Zero-knowledge rollup scaling solution for Ethereum',
    longDescription: 'zkSync is a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. Powered by zkEVM technology.',
    gradient: 'from-blue-600 via-cyan-500 to-blue-700',
    requirements: ['Ethereum on mainnet', 'Wallet (Metamask/WalletConnect)', 'Gas fees for bridging'],
    steps: [
      {
        title: 'Bridge to zkSync',
        description: 'Bridge ETH or tokens to zkSync Era',
        link: 'https://bridge.zksync.io'
      },
      {
        title: 'Swap Tokens',
        description: 'Trade on decentralized exchanges',
        link: 'https://app.zksync.io'
      },
      {
        title: 'Provide Liquidity',
        description: 'Add liquidity to AMM pools',
        link: 'https://app.zksync.io/liquidity'
      },
      {
        title: 'Use DeFi Protocols',
        description: 'Lend, borrow, or stake on various platforms',
        link: 'https://ecosystem.zksync.io'
      }
    ],
    estimatedReward: '$1,000 - $5,000',
    endDate: 'TBA',
    website: 'https://zksync.io',
    twitter: 'https://twitter.com/zksync',
    discord: 'https://discord.gg/zksync'
  },
  {
    id: 'scroll',
    name: 'SAMPLE DATA',
    category: 'LAYER2',
    network: 'MAINNET',
    phase: 'MID',
    tier: 'A',
    status: 'MAINNET',
    difficulty: 'EASY',
    description: 'Native zkEVM Layer 2 for Ethereum',
    longDescription: 'Scroll is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools.',
    gradient: 'from-orange-600 via-red-500 to-orange-700',
    requirements: ['ETH for bridging', 'Compatible wallet'],
    steps: [
      {
        title: 'Bridge to Scroll',
        description: 'Move assets to Scroll network',
        link: 'https://scroll.io/bridge'
      },
      {
        title: 'Interact with Protocols',
        description: 'Use DeFi applications on Scroll',
        link: 'https://scroll.io/ecosystem'
      },
      {
        title: 'Mint Session NFT',
        description: 'Mint your Scroll Sessions NFT',
        link: 'https://scroll.io/sessions'
      }
    ],
    estimatedReward: '$300 - $1,500',
    endDate: 'TBA',
    website: 'https://scroll.io',
    twitter: 'https://twitter.com/Scroll_ZKP',
    discord: 'https://discord.gg/scroll'
  }
];

export const alphaCallers = [
  {
    id: 1,
    name: 'Jawir',
    role: 'Founder & Lead Hunter',
    avatar: '/images/jawir.jpg',
    class: 'Degen',
    xpLevel: 'MAX',
    mainSkill: 'Penuyul Handal',
    weakness: 'Over Trade',
    bio: 'Founder of Airdrop Hunter.',
    verified: true,
    stats: {
      airdropsFound: 150,
      successRate: '85%',
      totalEarned: '$5K+'
    },
    socialLinks: {
      twitter: 'https://x.com/Rafiadehanafi/',
      telegram: 'https://t.me/Rafiadehanafi'
    }
  },
  {
    id: 2,
    name: 'NPCCRYPTO',
    role: 'Early Hunter',
    avatar: '/images/npc.jpg',
    class: 'Early Adopter',
    xpLevel: '100',
    mainSkill: 'Sepuh Krito',
    weakness: '---',
    bio: 'Expert in Web3.',
    verified: true,
    stats: {
      airdropsFound: 120,
      successRate: '92%',
      totalEarned: '$40K+'
    },
    socialLinks: {
      twitter: 'https://x.com/0xnpccrypto',
      telegram: 'https://t.me/NPCCRYPTO'
    }
  },
  {
    id: 3,
    name: 'Rahvana',
    role: 'Alpha Hunter',
    avatar: '/images/rahvana.jpg',
    class: 'Gambler',
    xpLevel: '95',
    mainSkill: '---',
    weakness: '---',
    bio: 'Loves to explore web3.',
    verified: true,
    stats: {
      airdropsFound: 95,
      successRate: '88%',
      totalEarned: '$35K+'
    },
    socialLinks: {
      twitter: 'https://x.com/0xRahvanaa',
      telegram: 'https://t.me/Rahvanaa'
    }
  }
];