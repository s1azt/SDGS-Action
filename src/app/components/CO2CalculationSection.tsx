import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export function CO2CalculationSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          📊 CO2削減量の計算根拠
        </motion.h2>

        {/* CO2 Calculation Detail */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-10 h-10 text-indigo-600" />
            <h3 className="text-3xl font-bold text-gray-800">月間CO2削減量 0.5kg の根拠</h3>
          </div>

          {/* Assumptions - 横並び */}
          <div className="mb-8">
            <div className="font-bold text-xl text-gray-800 mb-4">📋 前提条件</div>
            <div className="grid grid-cols-5 gap-4">
              <motion.div
                className="bg-blue-50 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-600 mb-2">1日あたり利用者数</div>
                <div className="text-4xl font-bold text-blue-700">5人</div>
                <div className="text-xs text-gray-500 mt-1">平均的な利用状況</div>
              </motion.div>

              <motion.div
                className="bg-amber-50 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-600 mb-2">1人あたり利用時間</div>
                <div className="text-4xl font-bold text-amber-700">5分</div>
                <div className="text-xs text-gray-500 mt-1">気軽に使える時間</div>
              </motion.div>

              <motion.div
                className="bg-purple-50 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-600 mb-2">対象期間（2月）</div>
                <div className="text-4xl font-bold text-purple-700">25日</div>
                <div className="text-xs text-gray-500 mt-1">2/25時点の実績</div>
              </motion.div>

              <motion.div
                className="bg-green-50 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-600 mb-2">1人あたり発電量</div>
                <div className="text-4xl font-bold text-green-700">8.3Wh</div>
                <div className="text-xs text-gray-500 mt-1">100W × 5/60h</div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: false }}
              >
                <div className="text-sm text-gray-600 mb-2">CO2排出係数</div>
                <div className="text-4xl font-bold text-gray-700">0.5</div>
                <div className="text-xs text-gray-500 mt-1">kg-CO2/kWh</div>
              </motion.div>
            </div>
          </div>

          {/* Calculation - 横並び */}
          <div className="mb-8">
            <div className="font-bold text-xl text-gray-800 mb-4">🧮 計算プロセス</div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <motion.div
                className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="text-sm font-bold text-gray-700 mb-3">ステップ1: 月間総発電量</div>
                <div className="bg-white rounded-lg p-3 font-mono text-sm mb-3">
                  <div className="mb-2">5人 × 8.3Wh × 25日</div>
                  <div className="text-gray-500">= 1,037.5Wh</div>
                </div>
                <div className="text-center text-2xl font-bold text-blue-700">1.0375kWh</div>
              </motion.div>

              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-5xl"
                >
                  ➡️
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: false }}
              >
                <div className="text-sm font-bold text-gray-700 mb-3">ステップ2: CO2削減量</div>
                <div className="bg-white rounded-lg p-3 font-mono text-sm mb-3">
                  <div className="mb-2">1.0375kWh × 0.5</div>
                  <div className="text-gray-500">kg-CO2/kWh</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">0.51875kg</div>
                  <div className="text-sm text-gray-600 mt-1">≈ 0.5kg（月間）</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: false }}
            >
              <div className="text-sm font-semibold mb-2">年間換算</div>
              <div className="text-5xl font-bold mb-2">約6.2kg</div>
              <div className="text-sm opacity-90">0.5kg × 12ヶ月</div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 text-center flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: false }}
            >
              <div>
                <div className="text-3xl mb-2">♻️</div>
                <div className="text-gray-700 font-semibold">
                  💡 これは、ペットボトル約<span className="text-2xl font-bold text-orange-700">115本</span>分
                </div>
                <div className="text-sm text-gray-600 mt-1">のリサイクル効果に相当</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
