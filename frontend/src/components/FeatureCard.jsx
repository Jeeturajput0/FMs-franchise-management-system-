import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

export default function FeatureCard({ title, desc, category, iconName = "CheckCircle2", index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-xs">
            <Icon name={iconName} size={24} />
          </div>
          {category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
              {category}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center text-xs font-semibold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <Icon name="ArrowRight" size={14} className="ml-1" />
      </div>
    </motion.div>
  );
}

