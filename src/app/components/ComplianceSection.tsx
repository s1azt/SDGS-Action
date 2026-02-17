import { motion } from 'motion/react';
import { AlertTriangle, Shield, Scale, Users, CheckCircle, XCircle } from 'lucide-react';

export function ComplianceSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-800 mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          ⚖️ コンプライアンス対応
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          私物充電の会社電源使用リスクを解消
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left side - Current Risks */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">従来の問題点</h3>
            </div>

            <div className="space-y-4">
              {/* Risk 1: Legal */}
              <motion.div
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Scale className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-xl text-gray-800 mb-2">1. 法律上のリスク</div>
                    <div className="text-base text-gray-700 mb-2">
                      <span className="font-semibold text-red-700">窃盗罪になる可能性</span>
                    </div>
                  </div>
                </div>
                <div className="ml-9 space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>刑法245条：電気は財物とみなされる</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>許可なく会社の電気を使用 = 電気窃盗</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>懲戒処分の口実になるリスク</span>
                  </div>
                </div>
              </motion.div>

              {/* Risk 2: Company Policy */}
              <motion.div
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-xl text-gray-800 mb-2">2. 社内規定上のリスク</div>
                  </div>
                </div>
                <div className="ml-9 space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>職務専念義務違反の可能性</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>情報セキュリティリスク（USB接続）</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>会社備品の私用禁止規定</span>
                  </div>
                </div>
              </motion.div>

              {/* Risk 3: Manners */}
              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-xl text-gray-800 mb-2">3. マナーとしての側面</div>
                  </div>
                </div>
                <div className="ml-9 space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>公私の区別がついていないと思われる</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>会社の経費を私物化している印象</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>上司や周囲からの評価低下</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Solution */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">解決策</h3>
            </div>

            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🚴⚡📱</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  自分の力で自分のスマホを充電
                </div>
                <div className="text-lg text-gray-700">
                  エアロバイク発電システム
                </div>
              </div>

              <div className="space-y-3">
                <motion.div
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-800">✅ 法的リスク解消</div>
                    <div className="text-sm text-gray-600">自己発電なので電気窃盗に該当しない</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-800">✅ 規定違反クリア</div>
                    <div className="text-sm text-gray-600">会社が提供する正式な福利厚生</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-800">✅ ポジティブイメージ</div>
                    <div className="text-sm text-gray-600">健康意識・環境意識が高いと評価</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-800">✅ セキュリティ強化</div>
                    <div className="text-sm text-gray-600">専用の充電スポットでウイルスリスク低減</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💡
                </motion.div>
                <div className="font-bold text-xl text-gray-800">会社の電力使用量も削減</div>
              </div>
              <div className="ml-9 text-base text-gray-700">
                <div className="mb-2">従来：会社のコンセントから充電 = 電力コスト増</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👇</span>
                </div>
                <div className="mt-2 font-semibold text-green-700">
                  新方式：自己発電で充電 = 会社の電力使用量0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: false }}
        >
          <div className="text-2xl font-bold mb-2">
            🎯 「グレーゾーン」を「公式な福利厚生」に変える！
          </div>
          <div className="text-lg">
            リスク回避 + 健康促進 + 環境貢献 = 三方良しの新しいカタチ
          </div>
        </motion.div>
      </div>
    </section>
  );
}
