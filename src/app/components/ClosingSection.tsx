import { motion } from 'motion/react';
import { Rocket, CheckCircle } from 'lucide-react';

export function ClosingSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-16 h-16 text-yellow-300 mx-auto" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
            ネコカフェから
            <br />
            <span className="text-yellow-300">未来を創ろう！</span>
          </h2>

          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            小さな一歩が、大きな変化を生む
            <br />
            楽しく、健康的に、持続可能な未来へ
          </p>
        </motion.div>

        {/* Key points */}
        <motion.div
          className="grid md:grid-cols-2 gap-3 mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
        >
          {[
            '健康経営の推進',
            '再生可能エネルギーの啓発',
            '社内コミュニケーションの活性化',
            'SDGs 4ゴールへの貢献',
          ].map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl p-3 text-white"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              viewport={{ once: false }}
            >
              <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="text-lg font-semibold">{point}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Next steps */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🎯 実現に向けて
          </h3>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">試験導入（2台から）</div>
                <div className="text-gray-600 text-sm">まずは1フロアで効果検証</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">データ取得・分析</div>
                <div className="text-gray-600 text-sm">発電量、利用状況を可視化</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-100 text-purple-700 rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">社内イントラで発信</div>
                <div className="text-gray-600 text-sm">取り組み状況を全社共有</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-100 text-orange-700 rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                4
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">段階的に展開</div>
                <div className="text-gray-600 text-sm">効果を見ながら全フロアへ</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-2xl font-bold shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(250, 204, 21, 0.5)",
                "0 0 40px rgba(250, 204, 21, 0.8)",
                "0 0 20px rgba(250, 204, 21, 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ 一緒に未来を創りましょう！ ⚡
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-4 text-white text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: false }}
        >
          ご清聴ありがとうございました 🙏
        </motion.div>
      </div>
    </section>
  );
}