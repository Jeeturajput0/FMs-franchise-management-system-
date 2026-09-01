import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ label, count, detail, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-lg text-center hover:border-amber-300 transition-all group"
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 group-hover:text-amber-500 transition-colors">
        {count}
      </div>
      <div className="text-sm font-bold text-gray-800 mb-0.5">{label}</div>
      {detail && <div className="text-xs text-gray-500 font-medium">{detail}</div>}
    </motion.div>
  );
}

