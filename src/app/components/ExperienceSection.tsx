import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { Battery, Music, Play, Pause, Volume2, Zap, Wind, Sun, Cloud } from "lucide-react";

export function ExperienceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [power, setPower] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(45);
  const [pedalRotation, setPedalRotation] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPower((prev) => Math.min(prev + 2, 85));
        setBatteryLevel((prev) => Math.min(prev + 0.3, 78));
        setPedalRotation((prev) => prev + 30);
      }, 100);
    } else {
      setPower(0);
      setBatteryLevel(45);
      setPedalRotation(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated background - Moving clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-0 text-white/40"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Cloud className="w-32 h-32" />
        </motion.div>
        <motion.div
          className="absolute top-40 left-0 text-white/30"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: 5 }}
        >
          <Cloud className="w-24 h-24" />
        </motion.div>
        <motion.div
          className="absolute top-32 left-0 text-white/35"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear", delay: 10 }}
        >
          <Cloud className="w-28 h-28" />
        </motion.div>

        {/* Sun */}
        <motion.div
          className="absolute top-10 right-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sun className="w-16 h-16 text-yellow-400" />
        </motion.div>

        {/* Moving landscape - Trees and mountains */}
        <div className="absolute bottom-0 left-0 right-0 h-48">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 to-green-400 opacity-30"
            animate={{ x: isPlaying ? [0, -100] : 0 }}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-2 bg-green-700"
                style={{
                  left: `${i * 5}%`,
                  height: `${40 + Math.random() * 40}px`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚴 実際の利用シーン
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          景色を楽しみながら、音楽を聴きながら、気軽に充電
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left side - Bike and power generation */}
          <motion.div
            className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Bike Animation */}
            <div className="relative h-64 mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Bike frame */}
              <svg width="200" height="150" viewBox="0 0 200 150" className="relative z-10">
                {/* Frame */}
                <line x1="100" y1="60" x2="140" y2="100" stroke="#333" strokeWidth="3" />
                <line x1="100" y1="60" x2="60" y2="100" stroke="#333" strokeWidth="3" />
                <line x1="60" y1="100" x2="140" y2="100" stroke="#333" strokeWidth="3" />
                <line x1="100" y1="60" x2="100" y2="40" stroke="#333" strokeWidth="3" />
                
                {/* Seat */}
                <ellipse cx="140" cy="95" rx="15" ry="5" fill="#444" />
                
                {/* Handlebars */}
                <line x1="100" y1="40" x2="90" y2="35" stroke="#333" strokeWidth="3" />
                <line x1="100" y1="40" x2="110" y2="35" stroke="#333" strokeWidth="3" />
                
                {/* Rear wheel */}
                <motion.circle
                  cx="60"
                  cy="100"
                  r="20"
                  stroke="#2563eb"
                  strokeWidth="3"
                  fill="none"
                  style={{ rotate: pedalRotation }}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                />
                
                {/* Front wheel */}
                <motion.circle
                  cx="140"
                  cy="100"
                  r="20"
                  stroke="#2563eb"
                  strokeWidth="3"
                  fill="none"
                  style={{ rotate: pedalRotation }}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                />
                
                {/* Pedals */}
                <motion.g
                  style={{ transformOrigin: "100px 100px" }}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                >
                  <circle cx="100" cy="100" r="8" fill="#666" />
                  <rect x="95" y="85" width="10" height="5" fill="#888" rx="2" />
                  <rect x="95" y="110" width="10" height="5" fill="#888" rx="2" />
                </motion.g>

                {/* Energy particles */}
                {isPlaying && (
                  <>
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="3"
                      fill="#fbbf24"
                      animate={{ 
                        y: [0, -50],
                        opacity: [1, 0],
                        scale: [1, 0.5]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="3"
                      fill="#10b981"
                      animate={{ 
                        y: [0, -50],
                        opacity: [1, 0],
                        scale: [1, 0.5]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </>
                )}
              </svg>

              {/* Wind effect */}
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute left-0 top-1/2"
                    animate={{ x: [0, 200], opacity: [0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Wind className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    className="absolute left-0 top-1/3"
                    animate={{ x: [0, 200], opacity: [0.5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  >
                    <Wind className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </>
              )}
            </div>

            {/* Power Meter */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <span className="font-bold text-gray-800">発電量</span>
                </div>
                <span className="text-3xl font-bold text-emerald-600">{power.toFixed(0)}W</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(power / 85) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Control Button */}
            <motion.button
              onClick={togglePlay}
              className={`w-full py-4 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 ${
                isPlaying
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-6 h-6" /> 停止する
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" /> 漕いでみる
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Right side - Music player and charging status */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Music Player */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-8 h-8" />
                <h3 className="text-2xl font-bold">リラックス音楽</h3>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">Peaceful Moments</div>
                    <div className="text-sm opacity-90">Relaxing Cafe Music</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>2:34</span>
                    <span>4:15</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: "60%" }}
                      animate={{ width: isPlaying ? ["60%", "100%"] : "60%" }}
                      transition={{ duration: 10, repeat: isPlaying ? Infinity : 0 }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <motion.div
                  className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Volume2 className="w-6 h-6" />
                </motion.div>
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer ${
                    isPlaying ? "bg-white text-purple-600" : "bg-white/30"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </motion.div>
              </div>
            </div>

            {/* Battery Charging Status */}
            <div className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">スマホ充電中</h3>
              </div>

              <div className="relative">
                {/* Phone illustration */}
                <div className="w-full aspect-[9/16] max-w-[200px] mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Charging animation */}
                    {isPlaying && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-green-400/30 to-transparent"
                        animate={{ y: ["100%", "-100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                    
                    <motion.div
                      animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1.5, repeat: isPlaying ? Infinity : 0 }}
                    >
                      <Zap className="w-12 h-12 text-yellow-300 mb-2" />
                    </motion.div>
                    <div className="text-white font-bold text-3xl">{batteryLevel.toFixed(0)}%</div>
                    <div className="text-white/80 text-sm mt-1">充電中...</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">開始時</div>
                    <div className="text-2xl font-bold text-gray-800">45%</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">現在</div>
                    <div className="text-2xl font-bold text-green-600">{batteryLevel.toFixed(0)}%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg font-semibold">
            💡 好きな音楽を聴きながら、景色を眺めながら、自然と運動して充電完了！
          </p>
        </motion.div>
      </div>
    </section>
  );
}
