import { motion } from 'motion/react';

export function SDGsSection() {
  const sdgsGoals = [
    {
      number: 3,
      title: 'すべての人に健康と福祉を',
      color: 'from-green-500 to-green-700',
      icon: '🏥',
      contribution: '運動によるメンタルヘルス向上、短時間リフレッシュの実現',
    },
    {
      number: 7,
      title: 'エネルギーをみんなに そしてクリーンに',
      color: 'from-yellow-400 to-yellow-600',
      icon: '⚡',
      contribution: '自己発電によるカーボンニュートラル、個人機器の使用電力削減',
    },
    {
      number: 8,
      title: '働きがいも 経済成長も',
      color: 'from-red-500 to-red-700',
      icon: '💼',
      contribution: 'リフレッシュによる業務への活力、健康経営の推進',
    },
    {
      number: 9,
      title: '産業と技術革新の 基盤をつくろう',
      color: 'from-orange-500 to-orange-700',
      icon: '🏭',
      contribution: '発電量データ取得・可視化による技術活用の実践',
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          🌏 SDGsへの貢献
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          4つのゴールに同時に寄与します
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {sdgsGoals.map((goal, index) => (
            <motion.div
              key={goal.number}
              className={`bg-gradient-to-br ${goal.color} rounded-3xl p-8 text-white shadow-2xl`}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              viewport={{ once: false }}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="text-6xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {goal.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 inline-block mb-2">
                    <span className="text-2xl font-bold">SDGs {goal.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {goal.title}
                  </h3>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mt-4">
                <div className="text-sm font-semibold mb-2 opacity-90">💡 寄与内容</div>
                <p className="text-lg leading-relaxed">
                  {goal.contribution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full text-3xl font-bold shadow-2xl">
            ✨ 1つの施策で、4つのゴールを実現！
          </div>
        </motion.div>
      </div>
    </section>
  );
}