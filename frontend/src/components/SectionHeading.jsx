import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, highlightTitle, description, center = true }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/80 mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        {title}{' '}
        {highlightTitle && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
            {highlightTitle}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}

