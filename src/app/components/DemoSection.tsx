import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bike, Smartphone, Zap, TrendingUp } from 'lucide-react';

export function DemoSection() {
  const [power, setPower] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCharging) {
        setPower((prev) => {
          const newPower = (prev + Math.random() * 15) % 100;
          return newPower;
        });
        setBatteryLevel((prev) => Math.min(prev + 0.5, 100));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isCharging]);

  useEffect(() => {
    // Auto-start charging after component mounts
    const timer = setTimeout(() => setIsCharging(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-6xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          💪 使い方はカンタン！
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Step 1: Bike */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
              <motion.div
                animate={isCharging ? { rotate: [0, 360] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Bike className="w-32 h-32 mx-auto text-indigo-600" strokeWidth={1.5} />
              </motion.div>
              
              {/* Power meter */}
              <div className="mt-6">
                <div className="text-lg font-bold text-gray-600 mb-2">発電量</div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                    style={{ width: `${power}%` }}
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(251,191,36,0.5)",
                        "0 0 20px rgba(251,191,36,0.8)",
                        "0 0 10px rgba(251,191,36,0.5)",
                      ]
                    }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                </div>
                <div className="text-3xl font-bold text-orange-600 mt-2">
                  {power.toFixed(0)}W
                </div>
              </div>
            </div>
            <div className="bg-indigo-600 text-white rounded-2xl py-4 px-6 text-xl font-bold">
              STEP 1: ペダルを漕ぐ
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex justify-center"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="w-20 h-20 text-yellow-500" strokeWidth={2} />
          </motion.div>

          {/* Step 2: Phone charging */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6 relative">
              <div className="relative inline-block">
                <Smartphone className="w-32 h-32 mx-auto text-gray-700" strokeWidth={1.5} />
                
                {/* Battery indicator inside phone */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20">
                  <div className="h-28 border-4 border-gray-700 rounded-lg relative overflow-hidden bg-white">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-300"
                      style={{ height: `${batteryLevel}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-700 rounded-t"></div>
                </div>

                {/* Charging animation */}
                {isCharging && (
                  <motion.div
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <Zap className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                )}
              </div>

              <div className="mt-6">
                <div className="text-lg font-bold text-gray-600 mb-2">充電レベル</div>
                <div className="text-3xl font-bold text-green-600">
                  {batteryLevel.toFixed(0)}%
                </div>
              </div>
            </div>
            <div className="bg-green-600 text-white rounded-2xl py-4 px-6 text-xl font-bold">
              STEP 2: スマホ充電！
            </div>
          </motion.div>
        </div>

        {/* Message bubble */}
        <motion.div
          className="mt-16 mx-auto max-w-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-8 shadow-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">
            「今のWeb会議の電力、自分で稼ぎました！」
          </div>
          <div className="text-xl opacity-90">
            こんな会話が生まれる未来へ ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
}
