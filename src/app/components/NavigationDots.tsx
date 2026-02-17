import { motion } from 'motion/react';

interface NavigationDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export function NavigationDots({ total, current, onChange }: NavigationDotsProps) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
            index === current
              ? 'bg-emerald-600 scale-125'
              : 'bg-gray-400 hover:bg-gray-600'
          }`}
          onClick={() => onChange(index)}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <span className="sr-only">Go to section {index + 1}</span>
        </motion.button>
      ))}
    </div>
  );
}
