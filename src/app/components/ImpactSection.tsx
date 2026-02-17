import { motion } from 'motion/react';
import { DollarSign, Users, Zap, TrendingUp } from 'lucide-react';

export function ImpactSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100">
      <div className="max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          💰 コストと効果
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
          {/* Cost breakdown */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">導入コスト</h3>
            </div>

            <div className="space-y-3">
              <motion.div
                className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm font-semibold text-gray-600 mb-1">エントリーモデル</div>
                <div className="text-3xl font-bold text-blue-700">3〜5万円</div>
                <div className="text-sm text-gray-600 mt-1">基本的な発電・充電機能</div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm font-semibold text-gray-600 mb-1">スマートモデル</div>
                <div className="text-3xl font-bold text-purple-700">5〜10万円</div>
                <div className="text-sm text-gray-600 mt-1">画面付き、データ連携対応</div>
              </motion.div>

              <div className="bg-gray-50 rounded-2xl p-3 text-center">
                <div className="text-sm text-gray-600 mb-1">推奨: まず2台から試験導入</div>
                <div className="text-xl font-bold text-gray-800">約10〜20万円</div>
              </div>
            </div>
          </motion.div>

          {/* Expected impact */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800">期待される効果</h3>
            </div>

            <div className="space-y-3">
              <motion.div
                className="flex items-start gap-3 bg-emerald-50 rounded-2xl p-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                <div className="bg-emerald-200 rounded-full p-3">
                  <Zap className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 mb-1">電力削減</div>
                  <div className="text-gray-600">個人機器の充電電力をオフセット</div>
                  <div className="text-sm text-emerald-700 font-semibold mt-1">年間 約50kWh削減見込み</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 bg-rose-50 rounded-2xl p-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="bg-rose-200 rounded-full p-3">
                  <Users className="w-6 h-6 text-rose-700" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 mb-1">健康経営効果</div>
                  <div className="text-gray-600">社員の健康増進とモチベーション向上</div>
                  <div className="text-sm text-rose-700 font-semibold mt-1">定量化困難だが大きな価値</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 bg-blue-50 rounded-2xl p-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: false }}
              >
                <div className="bg-blue-200 rounded-full p-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💡
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 mb-1">SDGs推進のシンボル</div>
                  <div className="text-gray-600">社内外へのアピール効果</div>
                  <div className="text-sm text-blue-700 font-semibold mt-1">企業イメージ向上</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ROI summary */}
        <motion.div
          className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: false }}
        >
          <h4 className="text-3xl font-bold mb-4">投資対効果まとめ</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-5xl mb-2">💰</div>
              <div className="text-xl font-semibold">低コスト導入</div>
              <div className="text-sm opacity-90">10〜20万円で開始</div>
            </div>
            <div>
              <div className="text-5xl mb-2">📈</div>
              <div className="text-xl font-semibold">多面的効果</div>
              <div className="text-sm opacity-90">健康×環境×技術</div>
            </div>
            <div>
              <div className="text-5xl mb-2">✨</div>
              <div className="text-xl font-semibold">高い波及効果</div>
              <div className="text-sm opacity-90">社内コミュニケーション活性化</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}