import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

export default function WorkflowStep({ step, title, desc, icon, index, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500 text-white font-extrabold text-xl shadow-md shrink-0 group-hover:scale-105 transition-transform">
        {step}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-1.5 rounded-md bg-amber-50 text-amber-600">
            <Icon name={icon} size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          {desc}
        </p>
      </div>

      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
        <Icon name="ChevronRight" size={20} />
      </div>
    </motion.div>
  );
}

