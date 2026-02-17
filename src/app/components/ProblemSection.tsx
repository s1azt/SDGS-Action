import { motion } from 'motion/react';
import { Battery, Frown, Laptop } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-gray-200">
      <div className="max-w-6xl px-8 text-center">
        <motion.h2
          className="text-6xl font-bold text-gray-800 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          こんな経験、ありませんか？
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Battery,
              title: '会社の電気で\nスマホ充電',
              description: '個人機器なのに\n会社の電力を使用...',
              color: 'from-red-400 to-red-600',
            },
            {
              icon: Frown,
              title: '運動不足で\nリフレッシュできない',
              description: 'デスクワークで\n体が重い...',
              color: 'from-orange-400 to-orange-600',
            },
            {
              icon: Laptop,
              title: 'エネルギー問題は\n他人事',
              description: '電力の貴重さを\n実感できない...',
              color: 'from-yellow-400 to-yellow-600',
            },
          ].map((problem, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${problem.color} rounded-3xl p-8 text-white shadow-2xl`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <problem.icon className="w-20 h-20 mx-auto mb-6" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                {problem.title}
              </h3>
              <p className="text-lg opacity-90 whitespace-pre-line">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-5xl font-bold text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: false }}
        >
          ⬇️ この3つの課題を一気に解決！
        </motion.div>
      </div>
    </section>
  );
}
