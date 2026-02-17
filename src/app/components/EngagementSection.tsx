import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Trophy, TrendingUp, Users, Radio } from 'lucide-react';

const mockData = [
  { name: '吾田さん', power: 145, time: 15 },
  { name: '佐藤さん', power: 132, time: 12 },
  { name: '鈴木さん', power: 128, time: 18 },
  { name: '高橋さん', power: 98, time: 10 },
  { name: '伊藤さん', power: 87, time: 8 },
];

export function EngagementSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          🎮 社内で盛り上がる仕組み
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          自発的に利用される楽しい施策
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Leaderboard */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Trophy className="w-8 h-8 text-yellow-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800">発電ランキング</h3>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="power" fill="#10b981" name="発電量(Wh)" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-3">
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-600 mb-1">今週のチャンピオン</div>
                <div className="text-2xl font-bold text-orange-600">🏆 吾田さん</div>
                <div className="text-base text-gray-700 mt-1">145Wh - 15分</div>
              </div>
            </div>
          </motion.div>

          {/* Real-time dashboard */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Radio className="w-10 h-10 text-blue-500" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">リアルタイム状況</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">今日の総発電量</span>
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-5xl font-bold text-green-700">892 Wh</div>
                <div className="text-sm text-gray-600 mt-1">スマホ約8台分の充電</div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">今月の利用者数</span>
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-5xl font-bold text-blue-700">47 人</div>
                <div className="text-sm text-gray-600 mt-1">前月比 +35%</div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">CO2削減量</span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    🌍
                  </motion.div>
                </div>
                <div className="text-5xl font-bold text-purple-700">2.3 kg</div>
                <div className="text-sm text-gray-600 mt-1">杉の木約0.16本分の吸収量</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: '📊', title: 'イントラで共有', desc: '発電状況を社内公開' },
            { icon: '🏅', title: '月間表彰', desc: 'トップ3を表彰' },
            { icon: '💬', title: 'コミュニケーション', desc: '会話のきっかけに' },
            { icon: '📈', title: 'データ分析', desc: '利用状況を可視化' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <div className="font-bold text-gray-800 mb-1">{feature.title}</div>
              <div className="text-sm text-gray-600">{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}