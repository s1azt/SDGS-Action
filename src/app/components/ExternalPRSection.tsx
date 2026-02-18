import { motion } from 'motion/react';
import { Megaphone, Users, Briefcase, TrendingUp, Globe, Award, Camera, FileText } from 'lucide-react';

export function ExternalPRSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-8">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          📢 対外的アピール効果
        </motion.h2>

        <motion.p
          className="text-center text-xl text-gray-700 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
        >
          この取り組みは、<span className="font-bold text-purple-600">社内だけでなく、対外的にも大きな価値</span>を生み出します。
          <br />
          SDGsへの積極的な姿勢を示す<span className="font-bold text-indigo-600">「生きた証拠」</span>として活用できます。
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* PR Point 1: Recruitment */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Users className="w-10 h-10 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              採用活動
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">採用サイト</span>での紹介事例
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">会社説明会</span>での実演
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">Z世代</span>へのアピール
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">✓</div>
                <div className="text-gray-700">
                  働きやすさの<span className="font-bold">可視化</span>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-4 bg-blue-50 rounded-xl p-3 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xs text-gray-600 mb-1">期待される効果</div>
              <div className="text-lg font-bold text-blue-700">応募者数UP</div>
            </motion.div>
          </motion.div>

          {/* PR Point 2: Business Partners */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.05 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Briefcase className="w-10 h-10 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              営業活動
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">提案資料</span>での差別化
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">企業姿勢</span>の証明
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">取引先</span>からの評価向上
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-green-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">信頼関係</span>の構築
                </div>
              </div>
            </div>

            <motion.div
              className="mt-4 bg-green-50 rounded-xl p-3 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xs text-gray-600 mb-1">期待される効果</div>
              <div className="text-lg font-bold text-green-700">受注率UP</div>
            </motion.div>
          </motion.div>

          {/* PR Point 3: Media & PR */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.05 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-orange-400 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-10 h-10 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              広報・メディア
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="text-orange-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">プレスリリース</span>配信
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-orange-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">SNS</span>での発信ネタ
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-orange-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">メディア取材</span>の可能性
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-orange-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">ウェブサイト</span>掲載
                </div>
              </div>
            </div>

            <motion.div
              className="mt-4 bg-orange-50 rounded-xl p-3 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xs text-gray-600 mb-1">期待される効果</div>
              <div className="text-lg font-bold text-orange-700">認知度UP</div>
            </motion.div>
          </motion.div>

          {/* PR Point 4: CSR Reports */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.05 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FileText className="w-10 h-10 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              CSR報告
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="text-purple-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">統合報告書</span>への掲載
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-purple-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">ESG投資家</span>へのアピール
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-purple-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">業界イベント</span>での発表
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-purple-600 mt-1">✓</div>
                <div className="text-gray-700">
                  <span className="font-bold">受賞</span>への応募材料
                </div>
              </div>
            </div>

            <motion.div
              className="mt-4 bg-purple-50 rounded-xl p-3 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xs text-gray-600 mb-1">期待される効果</div>
              <div className="text-lg font-bold text-purple-700">企業価値UP</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: false }}
        >
          <h4 className="text-3xl font-bold mb-6 text-center">
            🌟 SDGsへの積極取り組みの「見える化」
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <motion.div
                className="text-5xl mb-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎯
              </motion.div>
              <div className="text-xl font-semibold mb-2">具体的で分かりやすい</div>
              <div className="text-sm opacity-90">
                「エアロバイクで発電」という<br />誰でも理解できる取り組み
              </div>
            </div>

            <div className="text-center">
              <motion.div
                className="text-5xl mb-3"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📸
              </motion.div>
              <div className="text-xl font-semibold mb-2">ビジュアル映えする</div>
              <div className="text-sm opacity-90">
                写真・動画で伝わる<br />SNS・メディア向けコンテンツ
              </div>
            </div>

            <div className="text-center">
              <motion.div
                className="text-5xl mb-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💪
              </motion.div>
              <div className="text-xl font-semibold mb-2">ストーリー性がある</div>
              <div className="text-sm opacity-90">
                「健康×環境」の融合<br />共感を呼ぶメッセージ
              </div>
            </div>
          </div>

          <motion.div
            className="mt-8 bg-white bg-opacity-20 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="text-2xl font-bold mb-3 leading-relaxed">
              💡 この取り組みは、SDGsへの「本気度」を示す証拠になります
            </div>
            <div className="text-lg opacity-95 leading-relaxed">
              単なるスローガンではなく、<span className="font-bold">行動で示す姿勢</span>が評価されます
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}