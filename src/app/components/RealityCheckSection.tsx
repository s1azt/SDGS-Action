import { motion } from "motion/react";
import { Battery, Smartphone, Headphones, Zap, CheckCircle } from "lucide-react";

export function RealityCheckSection() {
  const devices = [
    {
      icon: Smartphone,
      name: "スマホ",
      capacity: "約3,000~5,000mAh",
      result: "5%〜8% 回復",
      comment: "首の皮一枚つながった…",
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: Headphones,
      name: "AirPods",
      capacity: "約400~500mAh (ケース込)",
      result: "20%〜30% 回復",
      comment: "WEB会議 2〜3本分 確保！",
      color: "from-purple-400 to-purple-600",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
            <Zap className="w-6 h-6" />
            <span>意外とイケる！</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-3">
            10分漕ぐだけで、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              こんなに充電できる
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            PCは大変だけど、スマホやイヤホンなら気軽に充電可能！
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`bg-gradient-to-br ${device.color} p-4 rounded-2xl`}>
                  <device.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{device.name}</h3>
                  <p className="text-sm text-gray-500">{device.capacity}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className={`w-5 h-5 ${device.iconColor}`} />
                    <span className="text-sm font-semibold text-gray-600">
                      10分漕いだ結果
                    </span>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {device.result}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-gray-600 mb-1">
                        実感コメント
                      </div>
                      <div className="text-lg font-bold text-gray-800">
                        「{device.comment}」
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 text-white text-center shadow-2xl"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur rounded-full p-3">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-sm opacity-90">平均発電量（10分）</div>
                <div className="text-3xl font-bold">約50〜80Wh</div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/30 hidden md:block"></div>
            <div className="text-xl font-medium">
              💡 休憩時間に軽く運動するだけで、
              <br className="hidden md:block" />
              スマホやイヤホンは実用的に充電できる！
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            ※ 発電効率や充電速度は個人の漕ぐ速度によって変動します
          </p>
        </div>
      </div>
    </section>
  );
}
