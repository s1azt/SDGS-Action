import { motion } from 'motion/react';
import { DollarSign, Users, Zap, TrendingUp, Calculator } from 'lucide-react';

export function ImpactSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          💰 コストと効果
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 items-start mb-4">
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

              <motion.div
                className="flex items-start gap-3 bg-purple-50 rounded-2xl p-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="bg-purple-200 rounded-full p-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    📢
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 mb-1">対外的PRの武器</div>
                  <div className="text-gray-600">採用・営業・広報活動に活用</div>
                  <div className="text-sm text-purple-700 font-semibold mt-1">企業価値向上</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CO2 Calculation Detail */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-2xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-800">月間CO2削減量の計算根拠</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Assumptions */}
            <div className="space-y-3">
              <div className="font-bold text-lg text-gray-800 mb-3">📋 前提条件</div>
              
              <motion.div
                className="bg-blue-50 rounded-xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">1日あたり利用者数</span>
                  <span className="text-2xl font-bold text-blue-700">5人</span>
                </div>
                <div className="text-xs text-gray-600">平均的な利用状況</div>
              </motion.div>

              <div className="bg-amber-50 rounded-xl p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">1人あたり平均利用時間</span>
                  <span className="text-2xl font-bold text-amber-700">5分</span>
                </div>
                <div className="text-xs text-gray-600">気軽に利用できる時間</div>
              </div>

              <div className="bg-purple-50 rounded-xl p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">対象期間（2月）</span>
                  <span className="text-2xl font-bold text-purple-700">25日間</span>
                </div>
                <div className="text-xs text-gray-600">2/25時点での実績</div>
              </div>

              <div className="bg-green-50 rounded-xl p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">1人あたり平均発電量</span>
                  <span className="text-2xl font-bold text-green-700">8.3Wh</span>
                </div>
                <div className="text-xs text-gray-600">5分間の発電量（100W × 5/60h）</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">電力のCO2排出係数</span>
                  <span className="text-2xl font-bold text-gray-700">0.5</span>
                </div>
                <div className="text-xs text-gray-600">kg-CO2/kWh（日本の電力会社平均値）</div>
              </div>
            </div>

            {/* Right: Calculation */}
            <div className="space-y-3">
              <div className="font-bold text-lg text-gray-800 mb-3">🧮 計算式</div>
              
              <motion.div
                className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border-2 border-cyan-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-700 mb-3">
                  <div className="font-bold mb-2">ステップ1: 月間総発電量</div>
                  <div className="bg-white rounded-lg p-3 font-mono text-sm">
                    <div>5人 × 8.3Wh × 25日 = 1,037.5Wh</div>
                    <div className="text-xs text-gray-500 mt-1">= 1.0375kWh</div>
                  </div>
                </div>

                <div className="flex justify-center my-2">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    👇
                  </motion.div>
                </div>

                <div className="text-sm text-gray-700">
                  <div className="font-bold mb-2">ステップ2: CO2削減量</div>
                  <div className="bg-white rounded-lg p-3 font-mono text-sm">
                    <div>1.0375kWh × 0.5kg-CO2/kWh</div>
                    <div className="text-lg font-bold text-green-600 mt-2">= 0.51875kg-CO2</div>
                    <div className="text-xs text-gray-500 mt-1">≈ 0.5kg（月間）</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-4 text-white text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm font-semibold mb-1">年間換算</div>
                <div className="text-3xl font-bold">約6.2kg</div>
                <div className="text-xs opacity-90 mt-1">0.5kg × 12ヶ月</div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: false }}
          >
            <div className="text-sm text-gray-700">
              💡 <span className="font-bold">参考:</span> これは、ペットボトル約115本分のリサイクル効果に相当します
            </div>
          </motion.div>
        </motion.div>

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