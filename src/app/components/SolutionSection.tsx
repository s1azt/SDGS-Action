import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SolutionSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-100 overflow-hidden">
      {/* Animated sparkles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-xl font-bold mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💡 解決策
            </motion.div>

            <h2 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
              ネコカフェが
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                エネルギー生産所
              </span>
              <br />
              に変わる！
            </h2>

            <div className="space-y-6">
              {[
                '🚴 エアロバイク型発電機を設置',
                '📱 自分のスマホを自分の力で充電',
                '⚡ 発電量をリアルタイムで可視化',
                '🌅 晴海の景色を見ながらリフレッシュ',
                '📚 Udemyで学習しながらペダリング',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  viewport={{ once: false }}
                >
                  <ArrowRight className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-xl font-medium text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image with bike animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* 
                ============================================================
                🎬 動画差し替えポイント 🎬
                ============================================================
                
                ここに自分の動画を配置してください：
                
                1. 動画ファイルを /public フォルダに配置
                   例: /public/bike-video.mp4
                
                2. 下記の src を変更
                   src="/bike-video.mp4"
                
                対応形式: MP4, WebM, OGG
                推奨サイズ: 1920x1080 または 1280x720
                推奨時間: 10-30秒（ループ再生）
                
                ============================================================
              */}
              
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] object-cover"
                poster="https://images.unsplash.com/photo-1759201092316-e4db7274915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGJpa2UlMjBjeWNsaW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NzEyNDg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              >
                {/* 動画（差し替え可能） */}
                <source
                  src="/bike-video.mp4"  
                  type="video/mp4"
                />
                {/* フォールバック: 動画が読み込めない場合は画像を表示 */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759201092316-e4db7274915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGJpa2UlMjBjeWNsaW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NzEyNDg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="エアロバイク"
                  className="w-full h-[500px] object-cover"
                />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
              
              {/* Animated power indicator */}
              <motion.div
                className="absolute top-8 right-8 bg-yellow-400 text-gray-900 px-6 py-4 rounded-2xl shadow-xl font-bold text-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.3)",
                    "0 10px 50px rgba(250,204,21,0.6)",
                    "0 10px 30px rgba(0,0,0,0.3)",
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ⚡ 発電中！
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-32 h-32 flex items-center justify-center text-5xl shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ⚙️
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}