import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

export default function ServiceCard({ title, description, iconName, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
      
      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
        <Icon name={iconName} size={28} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-2 text-xs font-bold text-amber-600 group-hover:text-amber-700">
        <span>Explore Service Details</span>
        <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

