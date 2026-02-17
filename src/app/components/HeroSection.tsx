import { motion } from 'motion/react';
import { Zap, Heart, Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8 max-w-6xl">
        {/* Icons animation */}
        <motion.div
          className="flex justify-center gap-12 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Leaf className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="w-20 h-20 text-yellow-300" strokeWidth={2} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 text-red-200" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl font-bold text-white mb-4 leading-tight"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            【環境×健康】
          </motion.h1>
          <h2 className="text-7xl font-bold text-white mb-6 drop-shadow-lg">
            人力発電・充電スポット
          </h2>
          <motion.p 
            className="text-3xl text-white font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ネコカフェが、エネルギー生産所になる！
          </motion.p>
        </motion.div>

        {/* SDGs badges */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { num: 3, label: '健康と福祉', color: 'bg-green-600' },
            { num: 7, label: 'クリーンエネルギー', color: 'bg-yellow-500' },
            { num: 8, label: '働きがい', color: 'bg-red-600' },
            { num: 9, label: '技術革新', color: 'bg-orange-500' },
          ].map((sdg, index) => (
            <motion.div
              key={sdg.num}
              className={`${sdg.color} text-white px-8 py-4 rounded-2xl shadow-2xl`}
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <div className="text-4xl font-bold">SDGs {sdg.num}</div>
              <div className="text-sm">{sdg.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-white text-sm mb-2">スクロールまたは↓キー</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
