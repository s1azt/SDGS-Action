import { motion } from 'motion/react';
import { Heart, Leaf, Brain, Eye, Headphones, BookOpen, ShieldCheck, AlertTriangle, Award, Megaphone, TrendingUp } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-800 mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          🎯 5つのメリット
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Benefit 1 */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-rose-400 to-pink-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              健康経営
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-rose-100 rounded-full p-2 flex-shrink-0">
                  <Heart className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">運動不足解消</div>
                  <div className="text-sm text-gray-600">短時間で気軽にリフレッシュ</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-rose-100 rounded-full p-2 flex-shrink-0">
                  <Brain className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">メンタルヘルス向上</div>
                  <div className="text-sm text-gray-600">運動で気分転換</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-rose-100 rounded-full p-2 flex-shrink-0">
                  <Eye className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">晴海の景色</div>
                  <div className="text-sm text-gray-600">美しい景色でリラックス</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Leaf className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              再エネ啓発
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⚡
                  </motion.div>
                </div>
                <div>
                  <div className="font-bold text-gray-700">エネルギー可視化</div>
                  <div className="text-sm text-gray-600">発電量をリアルタイム表示</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    🌍
                  </motion.div>
                </div>
                <div>
                  <div className="font-bold text-gray-700">カーボンニュートラル</div>
                  <div className="text-sm text-gray-600">個人機器の電力削減</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  💡
                </div>
                <div>
                  <div className="font-bold text-gray-700">エネルギーの貴重さ実感</div>
                  <div className="text-sm text-gray-600">体感で理解が深まる</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BookOpen className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              自己啓発
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">Udemyで学習</div>
                  <div className="text-sm text-gray-600">英会話など、ながら学習</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                  <Headphones className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">音楽も楽しめる</div>
                  <div className="text-sm text-gray-600">好きな音楽でモチベーションUP</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                  🔄
                </div>
                <div>
                  <div className="font-bold text-gray-700">業務への活力</div>
                  <div className="text-sm text-gray-600">明確なリフレッシュに</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShieldCheck className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              セキュリティ
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">データ保護</div>
                  <div className="text-sm text-gray-600">個人情報の安全確保</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">リスク管理</div>
                  <div className="text-sm text-gray-600">潜在的な問題の早期発見</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  🔒
                </div>
                <div>
                  <div className="font-bold text-gray-700">セキュリティ対策</div>
                  <div className="text-sm text-gray-600">最新のセキュリティ対策を採用</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefit 5 */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-12 h-12 text-white" strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              成果向上
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">生産性向上</div>
                  <div className="text-sm text-gray-600">集中力と効率性の向上</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-700">コミュニケーション強化</div>
                  <div className="text-sm text-gray-600">チームワークの向上</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  🎯
                </div>
                <div>
                  <div className="font-bold text-gray-700">目標達成</div>
                  <div className="text-sm text-gray-600">組織的な目標を達成</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}